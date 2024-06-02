import React, { useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles

import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import styles from '@/styles/swiper/swiper-shop.module.css'

// import required modules
import { Autoplay } from 'swiper/modules'

export default function ShopSwiperPC() {
  return (
    <>
      <Swiper
        slidesPerView={5}
        loop={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        modules={[Autoplay]}
        className={`mySwiper ${styles['swiper']}`}
      >
        <SwiperSlide className={styles['swiper-slide']}>
          <a href={'/product/menu'}>
            <img
              className={styles['img']}
              src="/img/diarySearch/food.svg"
              alt=""
            />
          </a>
        </SwiperSlide>
        <SwiperSlide className={styles['swiper-slide']}>
          <a href={'/product/10073'}>
            <img
              className={styles['img']}
              src="/img/diarySearch/food1.webp"
              alt=""
            />
          </a>
        </SwiperSlide>
        <SwiperSlide className={styles['swiper-slide']}>
          <a href={'/product/10074'}>
            <img
              className={styles['img']}
              src="/img/diarySearch/food2.webp"
              alt=""
            />
          </a>
        </SwiperSlide>
        <SwiperSlide className={styles['swiper-slide']}>
          <a href={'/product/10064'}>
            <img
              className={styles['img']}
              src="/img/diarySearch/food3.webp"
              alt=""
            />
          </a>
        </SwiperSlide>
        <SwiperSlide className={styles['swiper-slide']}>
          <a href={'/product/10066'}>
            <img
              className={styles['img']}
              src="/img/diarySearch/food4.webp"
              alt=""
            />
          </a>
        </SwiperSlide>
        <SwiperSlide className={styles['swiper-slide']}>
          <a href={'/product/10062'}>
            <img
              className={styles['img']}
              src="/img/diarySearch/food5.webp"
              alt=""
            />
          </a>
        </SwiperSlide>
      </Swiper>
    </>
  )
}
