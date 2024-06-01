import React, { useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import Link from 'next/link' //Link
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import styles from '@/styles/petDiary/petDiary.module.css'

// import required modules
import { Pagination } from 'swiper/modules'

export default function App({ pic }) {
  // console.log('pic1', pic)

  return (
    <>
      <div className={styles['post-swiper-container']}>
        <Swiper
          loop={true}
          pagination={true}
          modules={[Pagination]}
          className={`${styles['swiper']} ${styles['mySwiper3']} `}
        >
          {pic.map((v, i) => {
            {
              /* console.log('PIC2', v) */
            }
            return (
                <SwiperSlide
                  key={i}
                  className={`swiper-slide ${styles['swiper-slide']} `}
                >
                  <img className={styles['img']} src={`/img/petDiary/${v}`} />
                </SwiperSlide>
            )
          })}
          <SwiperNavigations />
        </Swiper>
      </div>
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
