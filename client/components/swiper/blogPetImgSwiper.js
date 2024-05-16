import React, { useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles

import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import 'swiper/css/thumbs'
import styles from '@/styles/blog.module.css'

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules'

export default function App() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)

  return (
    <>
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        loop={true}
        spaceBetween={4}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[Navigation, Thumbs]}
        className={styles['mySwiper2']}
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

      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={4}
        slidesPerView={3}
        watchSlidesProgress
        modules={[Navigation, Thumbs]}
        className={styles['mySwiper']}
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
