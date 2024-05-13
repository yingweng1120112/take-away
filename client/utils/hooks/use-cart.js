import { createContext, useContext, useState } from 'react'

// 1.建立與導出它:
const CartContext = createContext(null)

// 2. 建立一個Context Provider(提供者)元件
// 目的: 提供給最上層元件(_app.js)方便使用，共享狀態在這裡面統一管理
// children指的是被包覆在ThemeProvider中的所有子女元件
export function CartProvider({ children }) {
  // 共享狀態
  // 加入到購物車的商品項目
  // 以其中的物件資料來比較，比product物件多了一個qty(數量)
  const [items, setItems] = useState([])

  const increaseItem = (id) => {
    // 1 2 展開每個成員
    const nextItems = items.map((v, i) => {
      // 如果符合條件(id=傳入id)，回傳物件要屬性qty+1
      if (v.id === id)
        return { ...v, qty: v.qty + 1, subTotal: (v.qty + 1) * v.price }
      // 否則回傳原本物件
      else return v
    })
    // 3
    setItems(nextItems)
  }

  const decreaseItem = (id) => {
    // 1 2 展開每個成員
    let nextItems = items.map((v, i) => {
      // 如果符合條件(id=傳入id)，回傳物件要屬性qty-1
      if (v.id === id)
        return { ...v, qty: v.qty - 1, subTotal: (v.qty - 1) * v.price }
      // 否則回傳原本物件
      else return v
    })

    // 過濾掉qty=0的item
    nextItems = nextItems.filter((v) => v.qty > 0)

    // 3
    setItems(nextItems)
  }

  const removeItem = (id) => {
    // 1 2
    const nextItems = items.filter((v, i) => {
      return v.id !== id
    })
    //3
    setItems(nextItems)
  }

  const addItem = (product) => {
    // 先尋找判斷是否已在購物車中
    const foundIndex = items.findIndex((v) => v.id === product.id)

    if (foundIndex > -1) {
      // 如果有找到 ===> 遞增數量
      increaseItem(product.id)
    } else {
      // 否則 ===> 新增商品
      // 擴充商品物件多一個qty數字屬性，預設為1
      const newItem = { ...product, qty: 1, subTotal: product.price }
      const nextItems = [newItem, ...items]
      setItems(nextItems)
    }
  }

  // 計算總金額
  // const calcTotalPrice = (items) => {
  //   let total = 0
  //   for (let i = 0; i < items.length; i++) {
  //     total += items[i].qty * items[i].price
  //   }
  //   return total
  // }

  // // 計算總數量
  // const calcTotalQty = (items) => {
  //   let total = 0
  //   for (let i = 0; i < items.length; i++) {
  //     total += items[i].qty
  //   }
  //   return total
  // }

  // 用陣列迭代方法 reduce(累加/歸納)來計算總金額和數量
  const totalQty = items.reduce((acc, v) => acc + v.qty, 0)
  const totalPrice = items.reduce((acc, v) => acc + v.qty * v.price, 0)

  return (
    <CartContext.Provider
      // 使用value屬性提供資料給元件階層以下的所有後代元件(如果是消費者的話)
      value={{
        items,
        addItem,
        decreaseItem,
        increaseItem,
        removeItem,
        totalPrice,
        totalQty,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

// 3. 建立一個包裝useContext的專用名稱函式
// 目的: 讓消費者們(consumer)方便使用，呼叫useXXXX就可以取得共享狀態
export const useCart = () => useContext(CartContext)
