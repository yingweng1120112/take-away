import { createContext, useState, useContext, useEffect } from 'react'
import { ToastContainer, toast, Slide } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Modal, Button } from 'react-bootstrap'
import  {jwtDecode}  from 'jwt-decode'
import { useRouter } from 'next/router'

const CartContext = createContext()

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([])  
  const [selectedItems, setSelectedItems] = useState([])
  const [cartItemCount, setCartItemCount] = useState(0); // 购物车数量状态
  const [userInfo, setUserInfo] = useState({
    delivery_type: '宅配',
    name: '',
    email: '',
    phone: '',
    address: '',
    order_remark: '',
    payment_method: '',
    Invoice_no: '',
  })
  const [deleteProduct, setDeleteProduct] = useState(null)
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [deleteProductId, setDeleteProductId] = useState(null)
  const [userID, setUserID] = useState(null)


    const initializeUser = async () => {
    const userId = localStorage.getItem('userKey')
    if (userId) {
      try {
        const user = jwtDecode(userId)
        const userID = user.user_id
        if (!userID) throw new Error('Invalid user ID')
          setUserID(userID)
          setCartItems(JSON.parse(window.localStorage.getItem(`cartItems_${userID}`)) || [])
          setSelectedItems(JSON.parse(window.localStorage.getItem(`selectedItems_${userID}`)) || [])
      } catch (error) {
        console.error('Invalid user ID:', error)
      }
    } else {
      setUserID(null)    
      setCartItems([])    
      setSelectedItems([])    
    }
  }   

  useEffect(() => {
    initializeUser()    
  
  }, [])
  
  

  useEffect(() => {
    if (userID) {
      window.localStorage.setItem(`cartItems_${userID}`, JSON.stringify(cartItems)) 
      window.localStorage.setItem(`selectedItems_${userID}`, JSON.stringify(selectedItems))   
    }
  }, [cartItems, selectedItems, userID])    

  useEffect(() => {
    if (userID) {
      window.localStorage.setItem('userInfo', JSON.stringify(userInfo))
    }
  }, [userInfo, userID])   

  useEffect(() => {
    const handleStorageChange = (event) => {
      if (event.key === `cartItems_${userID}`) {
        setCartItems(JSON.parse(event.newValue))    
      } else if (event.key === 'userInfo') {
        setUserInfo(JSON.parse(event.newValue))    
      }
    }    

    window.addEventListener('storage', handleStorageChange)    
    return () => {
      window.removeEventListener('storage', handleStorageChange)    
    }    
  }, [userID])
  const handleLoginSuccess = async () => {
    initializeUser()
  }    

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
      item.product_id === product_id
        ? { ...item, checked: !item.checked }
        : item
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
    return selectedTotalPrice < 899
      ? selectedTotalPrice + 80
      : selectedTotalPrice
  }

  const countSelectedExtraFee = () => {
    return countSelectedTotalPrice() < 899 ? '80' : '0'
  }

  const increaseItem = (product_id, increment = 1) => {
    const nextItems = cartItems.map((v) => {
      // 如果符合條件(id=傳入id)，回傳物件要屬性qty加上increment
      if (v.product_id === product_id) {
        const newQty = v.qty + increment
        return { ...v, qty: newQty, subTotal: newQty * v.price }
      }
      // 否則回傳原本物件
      else {
        return v
      }
    })
    setCartItems(nextItems)
    synchronizeSelectedItems(nextItems)
  }

  const decreaseItem = (product_id, name) => {
    // 商品數量為1就刪除
    if (cartItems.find((item) => item.product_id === product_id)?.qty === 1) {
      // 設置刪除商品的id
      setDeleteProductId(product_id)
      // 顯示modal
      setShowDeleteModal(true)
      // 設置要刪除產品的訊息
      setDeleteProduct({ id: product_id, name: name })
    } else {
      //减少商品數量
      let nextItems = cartItems.map((v, i) => {
        if (v.product_id === product_id)
          return { ...v, qty: v.qty - 1, subTotal: (v.qty - 1) * v.price }
        else return v
      })
      nextItems = nextItems.filter((v) => v.qty > 0)
      setCartItems(nextItems)
      synchronizeSelectedItems(nextItems)
    }
  }

  //加入購物車
  const addToCart = (product) => {
    const foundIndex = cartItems.findIndex(
      (v) => v.product_id === product.product_id
    )
    const quantity = product.quantity || 1 // 如果 quantity 屬性不存在，默認設置為 1
    if (foundIndex > -1) {
      increaseItem(product.product_id, quantity)
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

    // 當購物車內商品發生改變時更新已選擇的商品
    // useEffect(() => {
    //   setSelectedItems((prevState) => {
    //     const nextState = cartItems.map((item) => ({
    //       ...item,
    //       checked:
    //         prevState.find(
    //           (selected) => selected.product_id === item.product_id
    //         )?.checked || false,
    //     }))
    //     return nextState
    //   })
    // }, [cartItems])

    //提示框
    toast.success(`${product.name} 已加入購物車！`, {
      position: 'top-center',
      autoClose: 600,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: 'dark',
      transition: Slide,
    })
  }

  const removeItem = (product_id, name) => {
    // 設置刪除商品的id
    setDeleteProductId(product_id)
    // 顯示modal
    setShowDeleteModal(true)

    setDeleteProduct({ id: product_id, name: name })
  }

  // 確認刪除
  const confirmDelete = () => {
    // 刪除後更新購物車項目
    const updatedCartItems = cartItems.filter(
      (item) => item.product_id !== deleteProductId
    )
    // 更新
    setCartItems(updatedCartItems)
    // 關閉modal
    setShowDeleteModal(false)

    toast.success(`${deleteProduct.name} 已成功刪除！`, {
      position: 'top-center',
      autoClose: 600,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: 'dark',
      transition: Slide,
    })
  }

  // 取消删除
  const cancelDelete = () => {
    // 清除要刪除的產品ID
    setDeleteProductId(null)
    // 關閉modal
    setShowDeleteModal(false)
  }

  //監聽localStorage變化
  // useEffect(() => {
  //   const handleStorageChange = (event) => {
  //     if (event.key === `cartItems_${userID}`) {
  //       setCartItems(JSON.parse(event.newValue))
  //     } else if (event.key === 'userInfo') {
  //       setUserInfo(JSON.parse(event.newValue))
  //     }
  //   }

  //   window.addEventListener('storage', handleStorageChange)
  //   return () => {
  //     window.removeEventListener('storage', handleStorageChange)
  //   }
  // }, [userID])

  // //將cartItems狀態儲存到localStorage
  // useEffect(() => {
  //   if (userID) {
  //     window.localStorage.setItem(`cartItems_${userID}`, JSON.stringify(cartItems))
  //   }
  // }, [cartItems, userID])

  // useEffect(() => {
  //   if (userID) {
  //     window.localStorage.setItem(`selectedItems_${userID}`, JSON.stringify(selectedItems))
  //   }
  // }, [selectedItems, userID])
  // useEffect(() => {
  //   window.localStorage.setItem('userInfo', JSON.stringify(userInfo))
  // }, [userInfo])

  //管理購物車數量
  useEffect(() => {
    // 从 localStorage 加载购物车内容
    const savedCartItems = localStorage.getItem('cartItems');
    if (savedCartItems) {
      setCartItems(JSON.parse(savedCartItems));
      setCartItemCount(JSON.parse(savedCartItems).length); // 更新购物车数量
    }
  }, []);
  useEffect(() => {
    // 在购物车内容变化时更新 localStorage
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    setCartItemCount(cartItems.length); // 更新购物车数量
  }, [cartItems]);

  const totalPrice = cartItems.reduce((acc, v) => acc + v.qty * v.price, 0)
  const finalTotalPrice = totalPrice < 899 ? totalPrice + 80 : totalPrice
  const extraFee = totalPrice < 899 ? '80' : '0'

  //   //如果該商品已經被選擇，從 cartItems 中刪除
  //   const isSelected = cartItems.find(item => item.product_id === product_id);
  // if (isSelected) {
  //   const updatedCartItems = cartItems.filter(item => item.product_id !== product_id);
  //   setCartItems(updatedCartItems);
  //   // 同步更新 selectedItems
  //   synchronizeSelectedItems(updatedCartItems);
  // }
  

  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
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
        synchronizeSelectedItems,
        userInfo,
        setUserInfo,
        totalPrice,
        finalTotalPrice,
        extraFee,
        cartItemCount,
        setCartItemCount,
        handleLoginSuccess
      }}
    >
      {children}
      <ToastContainer />
      <Modal show={showDeleteModal} onHide={cancelDelete}>
        <Modal.Header closeButton>
          <Modal.Title>確認刪除</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {deleteProduct && `確定要刪除 ${deleteProduct.name} 嗎？`}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={cancelDelete}>
            取消
          </Button>
          <Button variant="danger" onClick={confirmDelete}>
            删除
          </Button>
        </Modal.Footer>
      </Modal>
    </CartContext.Provider>
  )
}

export function useCart() {
  return useContext(CartContext)
}
