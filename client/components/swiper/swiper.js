import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

// import required modules
import { Autoplay, FreeMode, Navigation, Thumbs } from 'swiper/modules'

export default function Carousel() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)

  return (
    <>
      <Swiper
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[Autoplay, FreeMode, Navigation, Thumbs]}
        className="adoptswiper"
      >
        <SwiperSlide>
          <img
            style={{
              'width': '100%',
              'height': '100%',
            }}
            src="/images/pet-info/10020/10020-1.jpg" />
            {/* 720x480 */}
        </SwiperSlide>
        <SwiperSlide>
          <img
            style={{
              'width': '100%',
            'height': '100%',
            }}
            src="/images/pet-info/10020/10020-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img style={{
            'width': '100%',
            'height': '100%',
          }} src="/images/pet-info/10020/10020-5.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img style={{
            'width': '100%',
            'height': '100%',
          }} src="/images/pet-info/10020/10020-4.jpg" />
        </SwiperSlide>
      </Swiper>
      
    </>
  )
}
