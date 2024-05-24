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
        loop={true}
        spaceBetween={4}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[Navigation, Thumbs]}
        className={`mySwiper2 ${styles['mySwiper2']} `}
      >
        <SwiperSlide className={styles['swiper-slide']}>
        <img className={styles['img']} src={`/img/diarySearch/${petInfo.adopt1}`} />
        </SwiperSlide>
        <SwiperSlide className={styles['swiper-slide']}>
        <img className={styles['img']} src={`/img/diarySearch/${petInfo.adopt2}`} />
        </SwiperSlide>
        <SwiperSlide className={styles['swiper-slide']}>
          <img className={styles['img']} src={`/img/diarySearch/${petInfo.adopt3}`} />
        </SwiperSlide>
        <SwiperSlide className={styles['swiper-slide']}>
        <img className={styles['img']} src={`/img/diarySearch/${petInfo.adopt4}`} />
        </SwiperSlide>
        <SwiperSlide className={styles['swiper-slide']}>
        <img className={styles['img']} src={`/img/diarySearch/${petInfo.phone1}`} />
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
          <img className={styles['img']} src={`/img/diarySearch/${petInfo.adopt1}`} />
        </SwiperSlide>
        <SwiperSlide className={styles['swiper-slide']}>
          <img className={styles['img']} src={`/img/diarySearch/${petInfo.adopt2}`} />
        </SwiperSlide>
        <SwiperSlide className={styles['swiper-slide']}>
          <img className={styles['img']} src={`/img/diarySearch/${petInfo.adopt3}`} />
        </SwiperSlide>
        <SwiperSlide className={styles['swiper-slide']}>
          <img className={styles['img']} src={`/img/diarySearch/${petInfo.adopt4}`} />
        </SwiperSlide>
        <SwiperSlide className={styles['swiper-slide']}>
          <img className={styles['img']}src={`/img/diarySearch/${petInfo.phone1}`} />
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
