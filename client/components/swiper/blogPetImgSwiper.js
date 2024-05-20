import React, { useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'

// Import Swiper styles

import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import 'swiper/css/thumbs'
import styles from '@/styles/bo-ren/blog.module.css'

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules'

export default function App() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)

  return (
    <>
      <Swiper
        loop={true}
        spaceBetween={4}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[Navigation, Thumbs]}
        className={`mySwiper2 ${styles['mySwiper2']} `}
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
        <SwiperNavigations />
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={4}
        slidesPerView={3}
        watchSlidesProgress
        modules={[Navigation, Thumbs]}
        className={`mySwiper ${styles['mySwiper']} `}
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
