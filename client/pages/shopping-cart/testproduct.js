import { useState, useEffect } from 'react'
import Link from 'next/link'
import { loadProducts } from '@/services/testproduct'
import styles from '@/components/testproduct/cart.module.css'

export default function List() {
  const [products, setProducts] = useState([])

  const getProducts = async () => {
    const data = await loadProducts()
    // 確認資料結構是否與原始專案相符，並設置到狀態中
    if (Array.isArray(data.product)) {
      setProducts(data.product)
    }
    console.log(data)
  }

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <div>
      <h1>商品列表頁</h1>
      <ul className={styles['list']}>
        {products.map((v) => (
          <li key={v.product_id} className={styles['item']}>
            <Link href={`/shopping-cart/testproduct/${v.product_id}`}>
              {v.name}
            </Link>
            <button>加入購物車</button>
          </li>
        ))}
      </ul>
    </div>
  )
}
