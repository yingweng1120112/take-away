import { useState, useEffect } from 'react'
import Link from 'next/link'
import { loadProducts } from '@/services/testproduct'
import styles from '@/components/testproduct/cart.module.css'
import { useCart } from '@/context/cartcontext'

export default function List() {
  const [products, setProducts] = useState([])
  const { addToCart } = useCart()

  const getProducts = async () => {
    const data = await loadProducts()
    // 確認資料結構是否與原始專案相符，並設置到狀態中
    if (Array.isArray(data.product)) {
      setProducts(data.product)
    } else {
      console.error('資料結構不符', data)
    }
    console.log(data)
  }

  useEffect(() => {
    getProducts()
  }, [])
  return (
    <div>
      <h1>商品列表頁</h1>
      <Link href="/shopping-cart/step1">連至 購物車</Link>
      <ul className={styles['list']}>
        {products.map((product) => (
          <li key={product.product_id} className={styles['item']}>
            <Link href={`/shopping-cart/testproduct/${product.product_id}`}>
              {product.name}
            </Link>
            {product.price}
            <button
              onClick={() => {
                addToCart(product)
              }}
            >
              加入購物車
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
