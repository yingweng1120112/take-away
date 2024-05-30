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

export default function App(petInfo) {
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
        className={`mySwiper2 ${styles['mySwiper2']} `}
      >
        <SwiperSlide className={styles['swiper-slide']}>
          <img
            className={styles['img']}
            src={`/img/diarySearch/${petInfo.adopt1}`}
          />
        </SwiperSlide>
        <SwiperSlide className={styles['swiper-slide']}>
          <img
            className={styles['img']}
            src={`/img/diarySearch/${petInfo.adopt2}`}
          />
        </SwiperSlide>
        <SwiperSlide className={styles['swiper-slide']}>
          <img
            className={styles['img']}
            src={`/img/diarySearch/${petInfo.adopt3}`}
          />
        </SwiperSlide>
        <SwiperSlide className={styles['swiper-slide']}>
          <img
            className={styles['img']}
            src={`/img/diarySearch/${petInfo.adopt4}`}
          />
        </SwiperSlide>
        <SwiperSlide className={styles['swiper-slide']}>
          <img
            className={styles['img']}
            src={`/img/diarySearch/${petInfo.phone1}`}
          />
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
          <img
            className={styles['img']}
            src={`/img/diarySearch/${petInfo.adopt1}`}
          />
        </SwiperSlide>
        <SwiperSlide className={styles['swiper-slide']}>
          <img
            className={styles['img']}
            src={`/img/diarySearch/${petInfo.adopt2}`}
          />
        </SwiperSlide>
        <SwiperSlide className={styles['swiper-slide']}>
          <img
            className={styles['img']}
            src={`/img/diarySearch/${petInfo.adopt3}`}
          />
        </SwiperSlide>
        <SwiperSlide className={styles['swiper-slide']}>
          <img
            className={styles['img']}
            src={`/img/diarySearch/${petInfo.adopt4}`}
          />
        </SwiperSlide>
        <SwiperSlide className={styles['swiper-slide']}>
          <img
            className={styles['img']}
            src={`/img/diarySearch/${petInfo.phone1}`}
          />
        </SwiperSlide>
      </Swiper>
    </>
  )
}
