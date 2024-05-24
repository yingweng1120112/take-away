import React, { useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import swiper1 from '@/styles/product/menu_swiper.module.css'
import swiper2 from '@/styles/product/menu.module.css'
// import required modules
import { Pagination, Navigation } from 'swiper/modules'

export default function App() {
  return (
    <>
      <section className={swiper2.recommend}>
        <div className={swiper2.frame}>
          <Swiper
            slidesPerView={3}
            centeredSlides={true}
            spaceBetween={30}
            navigation={true}
            modules={[Pagination, Navigation]}
            className={swiper1['mySwiper']}
          >
            <SwiperSlide>
              <a href="#" className={swiper2['related-products-card']}>
                <img src="/img/menu/recommended-dog1.jpg" alt="" />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#" className={swiper2['related-products-card']}>
                <img src="/img/menu/recommended-dog1.jpg" alt="" />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#" className={swiper2['related-products-card']}>
                <img src="/img/menu/recommended-dog1.jpg" alt="" />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#" className={swiper2['related-products-card']}>
                <img src="/img/menu/recommended-dog1.jpg" alt="" />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#" className={swiper2['related-products-card']}>
                <img src="/img/menu/recommended-dog1.jpg" alt="" />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#" className={swiper2['related-products-card']}>
                <img src="/img/menu/recommended-dog1.jpg" alt="" />
              </a>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  )
}
