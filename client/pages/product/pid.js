import { useState, useEffect } from 'react'
import Header from '@/components/layout/header'
import InformationBanner from './information_banner'
import Info from './info'
import Reviews from './reviews'
import MyReviews from './my_reviews'
import InfoSwiper from './info_swiper'
import Footer from '@/components/layout/footer'
import styles from '@/styles/product/information.module.css'
// 測試
import ProductCarousel from './product_carousel'
import Quantity from './quantity'
import { loadProduct } from '@/services/product'
import { useRouter } from 'next/router'
//測試

export default function Information() {
  const router = useRouter()

  const [product, setProduct] = useState({
    product_id: 0,
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
    } else {
      console.log('數據結構不符合預期:', data)
    }
  }
  useEffect(() => {
    console.log(router.query)

    if (router.isReady) {
      const { product_id } = router.query
      getProduct(product_id)
    }
    // eslint-disable-next-line
  }, [router.isReady, router.query])

  return (
    <>
      <Header />
      <InformationBanner />
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
      <Reviews />
      <MyReviews />
      {/* 裝飾字 */}
      <section className={styles['decorative-area']}>
        <div className={`${styles.content} ${styles['decorative-words-info']}`}>
          <p>Other Products</p>
          <p>其他你也許有可能會喜歡的商品再看一眼吧</p>
        </div>
      </section>
      <InfoSwiper />
      <Footer />
    </>
  )
}
