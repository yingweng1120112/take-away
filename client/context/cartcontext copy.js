import { createContext, useState, useContext, useEffect } from 'react'
import useLocalStorage from '@/hooks/use-localstorage'

const CartContext = createContext()

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => {
    const storedCartItems = localStorage.getItem('cartItems')
    return storedCartItems ? JSON.parse(storedCartItems) : []
  })

  const increaseItem = (product_id) => {
    const updatedItems = cartItems.map((item) =>
      item.product_id === product_id ? { ...item, qty: item.qty + 1 } : item
    )
    setCartItems(updatedItems)
  }

  const decreaseItem = (product_id) => {
    const updatedItems = cartItems.map((item) =>
      item.product_id === product_id && item.qty > 1
        ? { ...item, qty: item.qty - 1 }
        : item
    )
    setCartItems(updatedItems)
  }

  const addToCart = (product) => {
    const existingItemIndex = cartItems.findIndex(
      (item) => item.product_id === product.product_id
    )

    if (existingItemIndex !== -1) {
      increaseItem(product.product_id)
    } else {
      const newItem = { ...product, qty: 1 }
      setCartItems([...cartItems, newItem])
    }
  }

  const removeItem = (product_id) => {
    const updatedItems = cartItems.filter(
      (item) => item.product_id !== product_id
    )
    setCartItems(updatedItems)
  }

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems))
  }, [cartItems])

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeItem, increaseItem, decreaseItem }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}
