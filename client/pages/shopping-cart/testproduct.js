import { useState, useEffect } from 'react'
import Link from 'next/link'
import { loadProducts } from '@/services/my-product'

export default function List() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await loadProducts()
        setProducts(data.products)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [])

  return (
    <>
      <h1>商品列表頁</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link href={`/product/${product.id}`}>
              {product.name} (價格: {product.price})
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}
