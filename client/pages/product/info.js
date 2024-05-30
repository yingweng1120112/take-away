import { useState, useEffect } from 'react'
import styles from '@/styles/product/information.module.css'
import ProductCarousel from './product_carousel'
import Quantity from './quantity'
import { loadProduct } from '@/services/product'
import { useRouter } from 'next/router'
// 產品資訊
export default function Info() {
  const router = useRouter()

  const [product, setProduct] = useState({
    product_id: 10000,
    name: '',
    brand_name: '',
    price: 0,
    pic1: '',
    pic2: '',
    pic3: '',
    pic4: '',
    pic5: '',
    pic6: '',
    type: '',
    species: '',
    information: '',
    reviews_id: 0,
  })
  const getProduct = async (product_id) => {
    const data = await loadProduct(product_id)
    console.log(data)

    if (typeof data === 'object' && data !== null && !Array.isArray(data)) {
      setProduct(data)
    }
  }
  useEffect(() => {
    console.log(router.query)

    if (router.isReady) {
      const { product_id } = router.query
      // getPet(product_id)
      getProduct(product_id)
    }
    // eslint-disable-next-line
  }, [router.isReady])

  return (
    <>
      <section key={product.product_id} className={styles.section}>
        <div className={styles.content}>
          {/* 產品輪播 */}
          <ProductCarousel />
          {/* 產品標題區 */}
          <div className={styles['product-info']}>
            <div className={styles['product-title']}>
              <h1>{product.name}</h1>
              <h2>售價 : ${product.price}</h2>
            </div>
            <Quantity />
          </div>
          <div className={styles['footprint-banner']}>
            <img src="\img\information\footprint-banner.svg" alt="" />
          </div>
          {/* 產品內容區 */}
          <div className={styles['product-description-title']}>
            <img src="\img\information\product-description-title.svg" alt="" />
            <p className={styles.p}>{product.information}</p>
          </div>
        </div>
      </section>
    </>
  )
}
