import React, { useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import styles from '@/styles/blog.module.css'

// import required modules
import { Navigation, Pagination } from 'swiper/modules'

export default function App() {
  return (
    <>
      <Swiper
        loop={true}
        cssMode={true}
        navigation={true}
        pagination={true}
        modules={[Navigation, Pagination]}
        className={styles['mySwiper3']}
      >
        <SwiperSlide className={styles['swiper-slide']}>
          <img className={styles['img']} src="/img/bg2.svg" />
        </SwiperSlide>
        <SwiperSlide className={styles['swiper-slide']}>
          <img className={styles['img']} src="/img/banner.jpg" />
        </SwiperSlide>
        <SwiperSlide className={styles['swiper-slide']}>
          <img className={styles['img']} src="/img/cat_cookie1.jpg" />
        </SwiperSlide>
        <SwiperSlide className={styles['swiper-slide']}>
          <img className={styles['img']} src="/img/cat_chocolate1.jpg" />
        </SwiperSlide>
        <SwiperSlide className={styles['swiper-slide']}>
          <img className={styles['img']} src="/img/貓貓6 1.jpg" />
        </SwiperSlide>
      </Swiper>
    </>
  )
}
