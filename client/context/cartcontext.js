import { createContext, useState, useContext } from 'react'

const CartContext = createContext()

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([])

  const addToCart = (product) => {
    setCartItems((prevCartItems) => [
      ...prevCartItems,
      {
        ...product,
        qty: 1,
      },
    ])
  }
  console.log(addToCart)

  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter((item) => item.product_id !== productId))
  }

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  return useContext(CartContext)
}
