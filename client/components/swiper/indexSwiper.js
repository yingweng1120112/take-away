import React, { useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import styles from '@/styles/swiper/indexSwipper.module.css'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules'

export default function App() {
  const progressCircle = useRef(null)
  const progressContent = useRef(null)
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress)
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`
  }
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className={styles['indexSwipper']}
      >
        <SwiperSlide>
          {' '}
          <img
            style={{
              width: '100%',
              height: '100%',
            }}
            src={`/img/index1.jpg`}
          />
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <img
            style={{
              width: '100%',
              height: '100%',
            }}
            src={`/img/index4.jpg`}
          />
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <img
            style={{
              width: '100%',
              height: '100%',
            }}
            src={`/img/index2.jpg`}
          />
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <img
            style={{
              width: '100%',
              height: '100%',
            }}
            src={`/img/index3.jpg`}
          />
        </SwiperSlide>
        <div className={styles['autoplay-progress']} slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  )
}
