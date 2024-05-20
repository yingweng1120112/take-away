import React, { useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import styles from '@/styles/bo-ren/blog.module.css'

// import required modules
import { Pagination } from 'swiper/modules'

export default function App() {
  return (
    <>
      <Swiper
        loop={true}
        pagination={true}
        modules={[Pagination]}
        className={`${styles['swiper']} ${styles['mySwiper3']} `}
      >
        <SwiperSlide className={`swiper-slide ${styles['swiper-slide']} `}>
          <img className={styles['img']} src="/img/bg2.svg" />
        </SwiperSlide>
        <SwiperSlide className={`swiper-slide ${styles['swiper-slide']} `}>
          <img className={styles['img']} src="/img/banner.jpg" />
        </SwiperSlide>
        <SwiperSlide className={`swiper-slide ${styles['swiper-slide']} `}>
          <img className={styles['img']} src="/img/cat_cookie1.jpg" />
        </SwiperSlide>
        <SwiperSlide className={`swiper-slide ${styles['swiper-slide']} `}>
          <img className={styles['img']} src="/img/cat_chocolate1.jpg" />
        </SwiperSlide>
        <SwiperSlide className={`swiper-slide ${styles['swiper-slide']} `}>
          <img className={styles['img']} src="/img/貓貓6 1.jpg" />
        </SwiperSlide>
        <SwiperNavigations />
      </Swiper>
    </>
  )
}
const SwiperNavigations = () => {
  const swiper = useSwiper()

  return (
    <div className={styles['swiper-btn']}>
      <button
        className={styles['swiper-button-prev']}
        onClick={() => swiper.slidePrev()}
      />

      <button
        className={styles['swiper-button-next']}
        onClick={() => swiper.slideNext()}
      />
    </div>
  )
}
