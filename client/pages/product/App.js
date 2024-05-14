import React, { useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import styles from '@/pages/product/styles.module.css'
import styles2 from '@/styles/menu.module.css'
// import required modules
import { Pagination, Navigation } from 'swiper/modules'

export default function App() {
  return (
    <>
      <section className={styles2.recommend}>
        <div className={styles2.frame}>
          <Swiper
            slidesPerView={3}
            centeredSlides={true}
            spaceBetween={30}
            navigation={true}
            modules={[Pagination, Navigation]}
            className={styles['mySwiper']}
          >
            <SwiperSlide>
              <a href="#" className={styles2['related-products-card']}>
                <img src="/img/menu/recommended-dog1.jpg" alt="" />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#" className={styles2['related-products-card']}>
                <img src="/img/menu/recommended-dog1.jpg" alt="" />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#" className={styles2['related-products-card']}>
                <img src="/img/menu/recommended-dog1.jpg" alt="" />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#" className={styles2['related-products-card']}>
                <img src="/img/menu/recommended-dog1.jpg" alt="" />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#" className={styles2['related-products-card']}>
                <img src="/img/menu/recommended-dog1.jpg" alt="" />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#" className={styles2['related-products-card']}>
                <img src="/img/menu/recommended-dog1.jpg" alt="" />
              </a>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  )
}
