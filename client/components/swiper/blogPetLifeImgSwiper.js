import React, { useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import styles from '@/styles/petDiary/petDiary.module.css'

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
          <img className={styles['img']} src="/img/petDiary/cat1.jpg" />
        </SwiperSlide>
        <SwiperSlide className={`swiper-slide ${styles['swiper-slide']} `}>
          <img className={styles['img']} src="/img/petDiary/cat2.jpg" />
        </SwiperSlide>
        <SwiperSlide className={`swiper-slide ${styles['swiper-slide']} `}>
          <img className={styles['img']} src="/img/petDiary/cat3.jpg" />
        </SwiperSlide>
        <SwiperSlide className={`swiper-slide ${styles['swiper-slide']} `}>
          <img className={styles['img']} src="/img/petDiary/cat4.jpg" />
        </SwiperSlide>
        <SwiperSlide className={`swiper-slide ${styles['swiper-slide']} `}>
          <img className={styles['img']} src="/img/petDiary/cat5.jpg" />
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
