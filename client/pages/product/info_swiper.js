import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import styles from '@/styles/product/info_swiper.module.css'
// import required modules
import { Pagination, Navigation } from 'swiper/modules'

export default function InfoSwiper() {
  return (
    <>
      <section className={styles.recommend}>
        <div className={styles.frame}>
          <Swiper
            slidesPerView={3}
            centeredSlides={true}
            spaceBetween={30}
            navigation={true}
            modules={[Pagination, Navigation]}
            className={styles['mySwiper']}
          >
            <SwiperSlide className={styles.info}>
              <div className={styles['info_swiper']}>
                <a href="#" className={styles['products-card']}>
                  <img src="/img/menu/related-products.jpg" alt="" />
                  <p className={styles.p}>
                    斑尼菲 無穀狗糧 鹿肉關節450克(狗飼料)
                  </p>
                  <div>
                    <button className={styles['cart-btn']}>
                      <svg
                        id="arrow-horizontal"
                        xmlns="http://www.w3.org/2000/svg"
                        width={47}
                        height={27}
                        viewBox="0 0 576 512"
                      >
                        <path
                          id="Path_10"
                          data-name="Path 10"
                          d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"
                          transform="translate(30)"
                        />
                      </svg>
                    </button>
                    <p className={styles.p}>$207</p>
                  </div>
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.info}>
              <div className={styles['info_swiper']}>
                <a href="#" className={styles['products-card']}>
                  <img src="/img/menu/related-products.jpg" alt="" />
                  <p className={styles.p}>
                    斑尼菲 無穀狗糧 鹿肉關節450克(狗飼料)
                  </p>
                  <div>
                    <button className={styles['cart-btn']}>
                      <svg
                        id="arrow-horizontal"
                        xmlns="http://www.w3.org/2000/svg"
                        width={47}
                        height={27}
                        viewBox="0 0 576 512"
                      >
                        <path
                          id="Path_10"
                          data-name="Path 10"
                          d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"
                          transform="translate(30)"
                        />
                      </svg>
                    </button>
                    <p className={styles.p}>$207</p>
                  </div>
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.info}>
              <div className={styles['info_swiper']}>
                <a href="#" className={styles['products-card']}>
                  <img src="/img/menu/related-products.jpg" alt="" />
                  <p className={styles.p}>
                    斑尼菲 無穀狗糧 鹿肉關節450克(狗飼料)
                  </p>
                  <div>
                    <button className={styles['cart-btn']}>
                      <svg
                        id="arrow-horizontal"
                        xmlns="http://www.w3.org/2000/svg"
                        width={47}
                        height={27}
                        viewBox="0 0 576 512"
                      >
                        <path
                          id="Path_10"
                          data-name="Path 10"
                          d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"
                          transform="translate(30)"
                        />
                      </svg>
                    </button>
                    <p className={styles.p}>$207</p>
                  </div>
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.info}>
              <div className={styles['info_swiper']}>
                <a href="#" className={styles['products-card']}>
                  <img src="/img/menu/related-products.jpg" alt="" />
                  <p className={styles.p}>
                    斑尼菲 無穀狗糧 鹿肉關節450克(狗飼料)
                  </p>
                  <div>
                    <button className={styles['cart-btn']}>
                      <svg
                        id="arrow-horizontal"
                        xmlns="http://www.w3.org/2000/svg"
                        width={47}
                        height={27}
                        viewBox="0 0 576 512"
                      >
                        <path
                          id="Path_10"
                          data-name="Path 10"
                          d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"
                          transform="translate(30)"
                        />
                      </svg>
                    </button>
                    <p className={styles.p}>$207</p>
                  </div>
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.info}>
              <div className={styles['info_swiper']}>
                <a href="#" className={styles['products-card']}>
                  <img src="/img/menu/related-products.jpg" alt="" />
                  <p className={styles.p}>
                    斑尼菲 無穀狗糧 鹿肉關節450克(狗飼料)
                  </p>
                  <div>
                    <button className={styles['cart-btn']}>
                      <svg
                        id="arrow-horizontal"
                        xmlns="http://www.w3.org/2000/svg"
                        width={47}
                        height={27}
                        viewBox="0 0 576 512"
                      >
                        <path
                          id="Path_10"
                          data-name="Path 10"
                          d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"
                          transform="translate(30)"
                        />
                      </svg>
                    </button>
                    <p className={styles.p}>$207</p>
                  </div>
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.info}>
              <div className={styles['info_swiper']}>
                <a href="#" className={styles['products-card']}>
                  <img src="/img/menu/related-products.jpg" alt="" />
                  <p className={styles.p}>
                    斑尼菲 無穀狗糧 鹿肉關節450克(狗飼料)
                  </p>
                  <div>
                    <button className={styles['cart-btn']}>
                      <svg
                        id="arrow-horizontal"
                        xmlns="http://www.w3.org/2000/svg"
                        width={47}
                        height={27}
                        viewBox="0 0 576 512"
                      >
                        <path
                          id="Path_10"
                          data-name="Path 10"
                          d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"
                          transform="translate(30)"
                        />
                      </svg>
                    </button>
                    <p className={styles.p}>$207</p>
                  </div>
                </a>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  )
}
