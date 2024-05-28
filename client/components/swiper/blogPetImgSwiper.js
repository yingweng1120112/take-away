import React, { useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'

// Import Swiper styles

import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import 'swiper/css/thumbs'
import styles from '@/styles/petDiary/petDiary.module.css'

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules'

export default function App() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)

  return (
    <>
      <Swiper
        loop={true}
        spaceBetween={4}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[Navigation, Thumbs]}
        className={`mySwiper2 ${styles['mySwiper2']} `}
      >
        <SwiperSlide className={styles['swiper-slide']}>
          <img className={styles['img']} src="/img/petDiary/cat1.jpg" />
        </SwiperSlide>
        <SwiperSlide className={styles['swiper-slide']}>
          <img className={styles['img']} src="/img/petDiary/cat2.jpg" />
        </SwiperSlide>
        <SwiperSlide className={styles['swiper-slide']}>
          <img className={styles['img']} src="/img/petDiary/cat3.jpg" />
        </SwiperSlide>
        <SwiperSlide className={styles['swiper-slide']}>
          <img className={styles['img']} src="/img/petDiary/cat4.jpg" />
        </SwiperSlide>
        <SwiperSlide className={styles['swiper-slide']}>
          <img className={styles['img']} src="/img/petDiary/cat5.jpg" />
        </SwiperSlide>
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
          <img className={styles['img']} src="/img/petDiary/cat1.jpg" />
        </SwiperSlide>
        <SwiperSlide className={styles['swiper-slide']}>
          <img className={styles['img']} src="/img/petDiary/cat2.jpg" />
        </SwiperSlide>
        <SwiperSlide className={styles['swiper-slide']}>
          <img className={styles['img']} src="/img/petDiary/cat3.jpg" />
        </SwiperSlide>
        <SwiperSlide className={styles['swiper-slide']}>
          <img className={styles['img']} src="/img/petDiary/cat4.jpg" />
        </SwiperSlide>
        <SwiperSlide className={styles['swiper-slide']}>
          <img className={styles['img']} src="/img/petDiary/cat5.jpg" />
        </SwiperSlide>
      </Swiper>
    </>
  )
}
