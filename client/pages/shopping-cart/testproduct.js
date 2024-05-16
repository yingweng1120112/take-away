import { useState, useEffect } from 'react'
import Link from 'next/link'
import { loadProducts } from '@/services/testproduct'

export default function List() {
  const [products, setProducts] = useState([])

  const getProducts = async () => {
    const data = await loadProducts()
    // 設定到狀態中 ===> 進入update階段，觸發重新渲染(re-render) ===> 顯示資料
    // 確定資料是陣列資料類型才設定到狀態中(最基本的保護)
    if (Array.isArray(data)) {
      setProducts(data)
    }
    console.log(data)
  }
  // 樣式2: 元件初次渲染之後(after)執行一次，之後不會再執行
  useEffect(() => {
    getProducts()
  }, [])

  return (
    <>
      <h1>商品列表頁</h1>
      <ul>
        {products.map((v, i) => {
          return (
            <li key={v.product_id}>
              <Link href={`/testproduct/${v.product_id}`}>{v.name}</Link>
            </li>
          )
        })}
      </ul>
    </>
  )
}
