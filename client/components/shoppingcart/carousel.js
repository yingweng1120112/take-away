/* eslint-disable @next/next/no-img-element */
import React, { useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

// import '@/components/shoppingcart/styles.css'

// import required modules
import { Pagination } from 'swiper/modules'

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="/cart/car-item1.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/cart/car-item1.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/cart/car-item1.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/cart/car-item1.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/cart/car-item1.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/cart/car-item1.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/cart/car-item1.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/cart/car-item1.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/cart/car-item1.png" alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  )
}
