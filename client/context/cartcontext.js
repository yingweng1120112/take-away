import { createContext, useState, useContext, useEffect } from 'react'
import useLocalStorage from '@/hooks/use-localstorage'
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Modal, Button } from 'react-bootstrap';

const CartContext = createContext()

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useLocalStorage('cartItems', [])
  //選擇的商品  
  const [selectedItems, setSelectedItems] = useState([])
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    order_remark: '',
    payment_method: '',
    Invoice_no: ''
  })
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedSelectedItems = window.localStorage.getItem('selectedItems')
      if (savedSelectedItems) {
        setSelectedItems(JSON.parse(savedSelectedItems))
      }
    }
  }, [])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedUserInfo = window.localStorage.getItem('userInfo')
      if (savedUserInfo) {
        setUserInfo(JSON.parse(savedUserInfo))
      }
    }
  }, []) 

  const synchronizeSelectedItems = (updatedCartItems) => {
    const nextSelectedItems = updatedCartItems.map((item) => ({
      ...item,
      checked:
        selectedItems.find(
          (selected) => selected.product_id === item.product_id
        )?.checked || false,
    }))
    setSelectedItems(nextSelectedItems)
  }

  //計算被選擇的商品
  const handleToggleChecked = (product_id) => {
    const updatedSelectedItems = selectedItems.map((item) =>
      item.product_id === product_id ? { ...item, checked: !item.checked } : item
    ) 
    setSelectedItems(updatedSelectedItems) 
  } 
  const countSelectedTotalPrice = () => {
    return selectedItems
      .filter((item) => item.checked)
      .reduce((acc, item) => acc + item.subTotal, 0)
  }

  const countSelectedFinalTotalPrice = () => {
    const selectedTotalPrice = countSelectedTotalPrice()
    return selectedTotalPrice < 899 ? selectedTotalPrice + 80 : selectedTotalPrice
  }

  const countSelectedExtraFee = () => {
    return countSelectedTotalPrice() < 899 ? '80' : '0'
  }


  const increaseItem = (product_id, increment = 1) => {
    const nextItems = cartItems.map((v) => {
      // 如果符合條件(id=傳入id)，回傳物件要屬性qty加上increment
      if (v.product_id === product_id) {
        const newQty = v.qty + increment;
        return { ...v, qty: newQty, subTotal: newQty * v.price };
      } 
      // 否則回傳原本物件
      else {
        return v;
      }
    });
    setCartItems(nextItems);
    synchronizeSelectedItems(nextItems);
  };

  const decreaseItem = (product_id) => {
    let nextItems = cartItems.map((v, i) => {
      // 如果符合條件(id=傳入id)，回傳物件要屬性qty+1
      if (v.product_id === product_id)
        return { ...v, qty: v.qty - 1, subTotal: (v.qty - 1) * v.price }
      // 否則回傳原本物件
      else return v
    })
    nextItems = nextItems.filter((v) => v.qty > 0)
    setCartItems(nextItems)
    synchronizeSelectedItems(nextItems)
  }

  //加入購物車
  const addToCart = (product) => {
    const foundIndex = cartItems.findIndex(
      (v) => v.product_id === product.product_id
    )
    const quantity = product.quantity || 1 // 如果 quantity 屬性不存在，默認設置為 1
    if (foundIndex > -1) {
      increaseItem(product.product_id,quantity)
    } else {
      const price = product.price || 0 // 如果 price 屬性不存在，默認設置為 0
      const subTotal = quantity * price // 計算小計金額
      setCartItems((prevCartItems) => [
        ...prevCartItems,
        {
          ...product,
          qty: quantity,
          subTotal: subTotal,
        },
      ])
    }
    //提示框
    toast.success(`${product.name} 已加入購物車！`, {
      position: "top-center",
      autoClose: 600,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: "dark",
      transition: Slide,
    });
  }

  const removeItem = (product_id) => {
    setCartItems(cartItems.filter((item) => item.product_id !== product_id))
  }

  //監聽localStorage變化
  useEffect(() => {
    const handleStorageChange = (event) => {
      if (event.key === 'cartItems') {
        setCartItems(JSON.parse(event.newValue))
      } else if (event.key === 'selectedItems') {
        setSelectedItems(JSON.parse(event.newValue))
      } else if (event.key === 'userInfo') {
        setUserInfo(JSON.parse(event.newValue)) 
      }
    }

    window.addEventListener('storage', handleStorageChange)
    return () => {
      window.removeEventListener('storage', handleStorageChange)
    }
  }, [])
  
  //將cartItems狀態儲存到localStorage
  useEffect(() => {
    //在伺服器端渲染（SSR）時，window 物件是不可用的。由於`useEffect` 只在客戶端執行，可以在這個鉤子中安全地使用
    window.localStorage.setItem('cartItems', JSON.stringify(cartItems))
  }, [cartItems])

  useEffect(() => {
    window.localStorage.setItem('selectedItems', JSON.stringify(selectedItems))
  }, [selectedItems])

  useEffect(() => {
    window.localStorage.setItem('userInfo', JSON.stringify(userInfo))
  }, [userInfo])

  const totalPrice = cartItems.reduce((acc, v) => acc + v.qty * v.price, 0)
  const finalTotalPrice = totalPrice < 899 ? totalPrice + 80 : totalPrice
  const extraFee = totalPrice < 899 ? '80' : '0'

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeItem,
        increaseItem,
        decreaseItem,
        selectedItems,
        setSelectedItems,
        handleToggleChecked,
        countSelectedTotalPrice,
        countSelectedExtraFee,
        countSelectedFinalTotalPrice,
        userInfo,
        setUserInfo,
        totalPrice,
        finalTotalPrice,
        extraFee,
      }}
    >
      {children}
      <ToastContainer />
    </CartContext.Provider>
  )
}

export function useCart() {
  return useContext(CartContext)
}
