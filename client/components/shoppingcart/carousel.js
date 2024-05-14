/* eslint-disable @next/next/no-img-element */
import React, { useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faCircleInfo } from '@fortawesome/free-solid-svg-icons'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

import styles from '@/components/shoppingcart/styles.module.css'

// import required modules
import { Pagination } from 'swiper/modules'

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          400: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className={styles['myswiper']}
      >
        <SwiperSlide className={styles['item']}>
          <div className={styles['container']}>
            <img src="/cart/car-item1.png" alt="" />
            <div className={styles['text']}>
              <p>牛肉風味棒 耐嚼型潔牙棒85克 [牛肉風味]</p>
              <p>$45</p>
            </div>
            <div className={styles['icon']}>
              <button className={styles['button']}>
                <FontAwesomeIcon
                  icon={faCircleInfo}
                  className={styles['iconstyle']}
                />
                <div>商品資訊</div>
              </button>
              <button className={styles['button']}>
                <FontAwesomeIcon
                  className={styles['iconstyle']}
                  icon={faCartPlus}
                />
                <div>新增商品</div>
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles['item']}>
          <div className={styles['container']}>
            <img src="/cart/car-item1.png" alt="" />
            <div className={styles['text']}>
              <p>牛肉風味棒 耐嚼型潔牙棒85克 [牛肉風味]</p>
              <p>$45</p>
            </div>
            <div className={styles['icon']}>
              <button className={styles['button']}>
                <FontAwesomeIcon
                  icon={faCircleInfo}
                  className={styles['iconstyle']}
                />
                <div>商品資訊</div>
              </button>
              <button className={styles['button']}>
                <FontAwesomeIcon
                  className={styles['iconstyle']}
                  icon={faCartPlus}
                />
                <div>新增商品</div>
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles['item']}>
          <div className={styles['container']}>
            <img src="/cart/car-item1.png" alt="" />
            <div className={styles['text']}>
              <p>牛肉風味棒 耐嚼型潔牙棒85克 [牛肉風味]</p>
              <p>$45</p>
            </div>
            <div className={styles['icon']}>
              <button className={styles['button']}>
                <FontAwesomeIcon
                  icon={faCircleInfo}
                  className={styles['iconstyle']}
                />
                <div>商品資訊</div>
              </button>
              <button className={styles['button']}>
                <FontAwesomeIcon
                  className={styles['iconstyle']}
                  icon={faCartPlus}
                />
                <div>新增商品</div>
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles['item']}>
          <div className={styles['container']}>
            <img src="/cart/car-item1.png" alt="" />
            <div className={styles['text']}>
              <p>牛肉風味棒 耐嚼型潔牙棒85克 [牛肉風味]</p>
              <p>$45</p>
            </div>
            <div className={styles['icon']}>
              <button className={styles['button']}>
                <FontAwesomeIcon
                  icon={faCircleInfo}
                  className={styles['iconstyle']}
                />
                <div>商品資訊</div>
              </button>
              <button className={styles['button']}>
                <FontAwesomeIcon
                  className={styles['iconstyle']}
                  icon={faCartPlus}
                />
                <div>新增商品</div>
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles['item']}>
          <div className={styles['container']}>
            <img src="/cart/car-item1.png" alt="" />
            <div className={styles['text']}>
              <p>牛肉風味棒 耐嚼型潔牙棒85克 [牛肉風味]</p>
              <p>$45</p>
            </div>
            <div className={styles['icon']}>
              <button className={styles['button']}>
                <FontAwesomeIcon
                  icon={faCircleInfo}
                  className={styles['iconstyle']}
                />
                <div>商品資訊</div>
              </button>
              <button className={styles['button']}>
                <FontAwesomeIcon
                  className={styles['iconstyle']}
                  icon={faCartPlus}
                />
                <div>新增商品</div>
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles['item']}>
          <div className={styles['container']}>
            <img src="/cart/car-item1.png" alt="" />
            <div className={styles['text']}>
              <p>牛肉風味棒 耐嚼型潔牙棒85克 [牛肉風味]</p>
              <p>$45</p>
            </div>
            <div className={styles['icon']}>
              <button className={styles['button']}>
                <FontAwesomeIcon
                  icon={faCircleInfo}
                  className={styles['iconstyle']}
                />
                <div>商品資訊</div>
              </button>
              <button className={styles['button']}>
                <FontAwesomeIcon
                  className={styles['iconstyle']}
                  icon={faCartPlus}
                />
                <div>新增商品</div>
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles['item']}>
          <div className={styles['container']}>
            <img src="/cart/car-item1.png" alt="" />
            <div className={styles['text']}>
              <p>牛肉風味棒 耐嚼型潔牙棒85克 [牛肉風味]</p>
              <p>$45</p>
            </div>
            <div className={styles['icon']}>
              <button className={styles['button']}>
                <FontAwesomeIcon
                  icon={faCircleInfo}
                  className={styles['iconstyle']}
                />
                <div>商品資訊</div>
              </button>
              <button className={styles['button']}>
                <FontAwesomeIcon
                  className={styles['iconstyle']}
                  icon={faCartPlus}
                />
                <div>新增商品</div>
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles['item']}>
          <div className={styles['container']}>
            <img src="/cart/car-item1.png" alt="" />
            <div className={styles['text']}>
              <p>牛肉風味棒 耐嚼型潔牙棒85克 [牛肉風味]</p>
              <p>$45</p>
            </div>
            <div className={styles['icon']}>
              <button className={styles['button']}>
                <FontAwesomeIcon
                  icon={faCircleInfo}
                  className={styles['iconstyle']}
                />
                <div>商品資訊</div>
              </button>
              <button className={styles['button']}>
                <FontAwesomeIcon
                  className={styles['iconstyle']}
                  icon={faCartPlus}
                />
                <div>新增商品</div>
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles['item']}>
          <div className={styles['container']}>
            <img src="/cart/car-item1.png" alt="" />
            <div className={styles['text']}>
              <p>牛肉風味棒 耐嚼型潔牙棒85克 [牛肉風味]</p>
              <p>$45</p>
            </div>
            <div className={styles['icon']}>
              <button className={styles['button']}>
                <FontAwesomeIcon
                  icon={faCircleInfo}
                  className={styles['iconstyle']}
                />
                <div>商品資訊</div>
              </button>
              <button className={styles['button']}>
                <FontAwesomeIcon
                  className={styles['iconstyle']}
                  icon={faCartPlus}
                />
                <div>新增商品</div>
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  )
}
