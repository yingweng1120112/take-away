import { createContext, useState, useContext, useEffect } from 'react' 
import useLocalStorage from '@/hooks/use-localstorage' 

const CartContext = createContext() 

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useLocalStorage('cartItems', []) 
  const [selectedItems, setSelectedItems] = useState(() => {
    // 从 localStorage 恢复 selectedItems
    const savedSelectedItems = window.localStorage.getItem('selectedItems') 
    return savedSelectedItems ? JSON.parse(savedSelectedItems) : [] 
  }) 
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    order_remark: '',
    payment_method: '',
    Invoice_no: ''
  }) 

  const synchronizeSelectedItems = (updatedCartItems) => {
    const nextSelectedItems = updatedCartItems.map((item) => ({
      ...item,
      checked: selectedItems.find(
        (selected) => selected.product_id === item.product_id
      )?.checked || false,
    })) 
    setSelectedItems(nextSelectedItems) 
  } 

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

  const increaseItem = (product_id) => {
    const nextItems = cartItems.map((v) => {
      if (v.product_id === product_id)
        return { ...v, qty: v.qty + 1, subTotal: (v.qty + 1) * v.price } 
      else return v 
    }) 
    setCartItems(nextItems) 
    synchronizeSelectedItems(nextItems) 
  } 

  const decreaseItem = (product_id) => {
    let nextItems = cartItems.map((v) => {
      if (v.product_id === product_id)
        return { ...v, qty: v.qty - 1, subTotal: (v.qty - 1) * v.price } 
      else return v 
    }) 
    nextItems = nextItems.filter((v) => v.qty > 0) 
    setCartItems(nextItems) 
    synchronizeSelectedItems(nextItems) 
  } 

  const addToCart = (product) => {
    const foundIndex = cartItems.findIndex(
      (v) => v.product_id === product.product_id
    ) 
    if (foundIndex > -1) {
      increaseItem(product.product_id) 
    } else {
      const qty = product.qty || 1 
      const price = product.price || 0 
      const subTotal = qty * price 
      setCartItems((prevCartItems) => [
        ...prevCartItems,
        {
          ...product,
          qty: qty,
          subTotal: subTotal,
        },
      ]) 
    }
  } 

  const removeItem = (product_id) => {
    setCartItems(cartItems.filter((item) => item.product_id !== product_id)) 
  } 

  // 监视 cartItems 的变化并更新到 localStorage
  useEffect(() => {
    window.localStorage.setItem('cartItems', JSON.stringify(cartItems)) 
  }, [cartItems]) 

  // 监视 selectedItems 的变化并更新到 localStorage
  useEffect(() => {
    window.localStorage.setItem('selectedItems', JSON.stringify(selectedItems)) 
  }, [selectedItems]) 

  // 监视 localStorage 变化
  useEffect(() => {
    const handleStorageChange = (event) => {
      if (event.key === 'cartItems') {
        setCartItems(JSON.parse(event.newValue)) 
      } else if (event.key === 'selectedItems') {
        setSelectedItems(JSON.parse(event.newValue)) 
      }
    } 

    window.addEventListener('storage', handleStorageChange) 
    return () => {
      window.removeEventListener('storage', handleStorageChange) 
    } 
  }, []) 

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
      }}
    >
      {children}
    </CartContext.Provider>
  ) 
}

export function useCart() {
  return useContext(CartContext) 
}
