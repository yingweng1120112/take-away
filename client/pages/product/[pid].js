import React from 'react'
import Header from '@/components/layout/header'
import InformationBanner from './information_banner'
import Info from './info'
import Reviews from './reviews'
import MyReviews from './my_reviews'
import InfoSwiper from './info_swiper'
import Footer from '@/components/layout/footer'
import styles from '@/styles/product/information.module.css'

export default function Information() {
  return (
    <>
      <Header />
      <InformationBanner />
      <Info />
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
