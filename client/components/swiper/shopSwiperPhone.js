import React, { useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles

import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import styles from '@/styles/life.module.css'

// import required modules
import { Autoplay } from 'swiper/modules'

export default function ShopSwiperPhone() {
  return (
    <>
      <Swiper
        slidesPerView={2}
        loop={true}
        spaceBetween={20}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        modules={[Autoplay]}
        className={`mySwiper ${styles['swiper']}`}
      >
        <SwiperSlide className={styles['swiper-slide']}>
          <a href="">
            <img className={styles['img']} src="/img/food.svg" alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide className={styles['swiper-slide']}>
          <a href="">
            <img className={styles['img']} src="/img/food.svg" alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide className={styles['swiper-slide']}>
          <a href="">
            <img className={styles['img']} src="/img/food.svg" alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide className={styles['swiper-slide']}>
          <a href="">
            <img className={styles['img']} src="/img/food.svg" alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide className={styles['swiper-slide']}>
          <a href="">
            <img className={styles['img']} src="/img/food.svg" alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide className={styles['swiper-slide']}>
          <a href="">
            <img className={styles['img']} src="/img/food.svg" alt="" />
          </a>
        </SwiperSlide>
      </Swiper>
    </>
  )
}
