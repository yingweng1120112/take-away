import React, { useRef, useEffect, useState } from 'react'

import CarouselPc from '@/components/swiper/shop-swiper-pc'
import CarouselPhone from '@/components/swiper/shop-swiper-phone'
import Banner from '@/components/banner'
import styles from '@/styles/life.module.css'

export default function life() {
  return (
    <>
      <div className={`${styles['banner']} ${styles['banner-life-1']}`}></div>
      <div className={styles['life-container']}>
        <div>
          <div className={styles['banner-fixed']}>
            <Banner />
          </div>
          <div className={styles['hidden']}>
            <div className={styles['container-main-1']}>
              <img src="/img/bg2.svg" className={styles['bg-1']} />
              <h1 className={styles['content-word']}>
                這裡是大家細心照料的
                <br />
                孩子們，要來看看嗎 ?
              </h1>
            </div>
            <div className={styles['container-a']}>
              <div className={styles['project-list']}>
                <div className={styles['item']}>
                  <img
                    src="/img/貓貓6 1.jpg"
                    alt=""
                    className={styles['project-pic']}
                  />
                  <div className={styles['project-info']}>
                    <h3>貓1</h3>
                    <div className={styles['cat-info']}>
                      <p className={styles['desc']}>今年1歲 </p>
                      <i className={styles['fa-solid fa-venus fa-lg']} />
                    </div>
                  </div>
                </div>
                <div className={styles['item']}>
                  <img
                    src="/img/貓貓6 1.jpg"
                    alt=""
                    className={styles['project-pic']}
                  />
                  <div className={styles['project-info']}>
                    <h3>貓2</h3>
                    <div className={styles['cat-info']}>
                      <p className={styles['desc']}>今年8歲</p>
                      <i className={styles['fa-solid fa-venus fa-lg']} />
                    </div>
                  </div>
                </div>
                <div className={styles['item']}>
                  <img
                    src="/img/貓貓6 1.jpg"
                    alt=""
                    className={styles['project-pic']}
                  />
                  <div className={styles['project-info']}>
                    <h3>貓3</h3>
                    <div className={styles['cat-info']}>
                      <p className={styles['desc']}>今年5歲</p>
                      <i className={styles['fa-solid , fa-mars , fa-lg']} />
                    </div>
                  </div>
                </div>
                <div className={styles['item']}>
                  <img
                    src="/img/貓貓6 1.jpg"
                    alt=""
                    className={styles['project-pic']}
                  />
                  <div className={styles['project-info']}>
                    <h3>貓4</h3>
                    <div className={styles['cat-info']}>
                      <p className={styles['desc']}>今年3歲</p>
                      <i className={styles['fa-solid fa-mars fa-lg']} />
                    </div>
                  </div>
                </div>
                <div className={styles['item']}>
                  <img
                    src="/img/貓貓6 1.jpg"
                    alt=""
                    className={styles['project-pic']}
                  />
                  <div className={styles['project-info']}>
                    <h3>貓1</h3>
                    <div className={styles['cat-info']}>
                      <p className={styles['desc']} 今年1歲 />
                      <i className={styles['fa-solid fa-venus fa-lg']} />
                    </div>
                  </div>
                </div>
                <div className={styles['item']}>
                  <img
                    src="/img/貓貓6 1.jpg"
                    alt=""
                    className={styles['project-pic']}
                  />
                  <div className={styles['project-info']}>
                    <h3>貓2</h3>
                    <div className={styles['cat-info']}>
                      <p className={styles['desc']}>今年8歲</p>
                      <i className={styles['fa-solid fa-venus fa-lg']} />
                    </div>
                  </div>
                </div>
                <div className={styles['item']}>
                  <img
                    src="/img/貓貓6 1.jpg"
                    alt=""
                    className={styles['project-pic']}
                  />
                  <div className={styles['project-info']}>
                    <h3>貓3</h3>
                    <div className={styles['cat-info']}>
                      <p className={styles['desc']}>今年5歲</p>
                      <i className={styles['fa-solid , fa-mars , fa-lg']} />
                    </div>
                  </div>
                </div>
                <div className={styles['item']}>
                  <img
                    src="/img/貓貓6 1.jpg"
                    alt=""
                    className={styles['project-pic']}
                  />
                  <div className={styles['project-info']}>
                    <h3>貓4</h3>
                    <div className={styles['cat-info']}>
                      <p className={styles['desc']}>今年3歲</p>
                      <i className={styles['fa-solid fa-mars fa-lg']} />
                    </div>
                  </div>
                </div>
                <div className={styles['item']}>
                  <img
                    src="/img/貓貓6 1.jpg"
                    alt=""
                    className={styles['project-pic']}
                  />
                  <div className={styles['project-info']}>
                    <h3>貓1</h3>
                    <div className={styles['cat-info']}>
                      <p className={styles['desc']} 今年1歲 />
                      <i className={styles['fa-solid fa-venus fa-lg']} />
                    </div>
                  </div>
                </div>
                <div className={styles['item']}>
                  <img
                    src="/img/貓貓6 1.jpg"
                    alt=""
                    className={styles['project-pic']}
                  />
                  <div className={styles['project-info']}>
                    <h3>貓2</h3>
                    <div className={styles['cat-info']}>
                      <p className={styles['desc']}>今年8歲</p>
                      <i className={styles['fa-solid fa-venus fa-lg']} />
                    </div>
                  </div>
                </div>
                <div className={styles['item']}>
                  <img
                    src="/img/貓貓6 1.jpg"
                    alt=""
                    className={styles['project-pic']}
                  />
                  <div className={styles['project-info']}>
                    <h3>貓3</h3>
                    <div className={styles['cat-info']}>
                      <p className={styles['desc']}>今年5歲</p>
                      <i className={styles['fa-solid , fa-mars , fa-lg']} />
                    </div>
                  </div>
                </div>
                <div className={styles['item']}>
                  <img
                    src="/img/貓貓6 1.jpg"
                    alt=""
                    className={styles['project-pic']}
                  />
                  <div className={styles['project-info']}>
                    <h3>貓4</h3>
                    <div className={styles['cat-info']}>
                      <p className={styles['desc']}>今年3歲</p>
                      <i className={styles['fa-solid fa-mars fa-lg']} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 頁數這邊有問題 role="navigation' aria-label="First Page" href="#' rel='prev' aria-label="Last Page" href="#'*/}
        <div className={styles['hidden']}>
          <div className={styles['wp-pagenavi']}>
            <a className={styles['first']} href="#" aria-label="First Page">
              «
            </a>
            <a className={styles['previouspostslink']}>&lt;</a>
            <a className={styles['page smaller']}>1</a>
            <a className={styles['page smaller']}>2</a>
            <span aria-current="page" className={styles['current']}>
              3
            </span>
            <a className={styles['page larger']}>4</a>
            <a className={styles['page larger']}>5</a>
            <a
              className={styles['nextpostslink']}
              rel="next"
              aria-label="次のページ"
              href="#"
            >
              &gt;
            </a>
            <a className={styles['last']} href="#" aria-label="Last Page">
              »
            </a>
          </div>
          <div className={styles['container-main-2']}>
            <img src="/img/bg2.svg" className={styles['bg-2']} />
            <h1 className={styles['content-word']}>
              有了狗狗和貓貓
              <br />
              那是不是就可以買一些他們的東西呢
            </h1>
            <div>
              <button className={styles['cta btn-more']}>
                <span className={styles['hover-underline-animation']}>
                  來去看看
                </span>

                <svg
                  id="arrow-horizontal"
                  xmlns="http://www.w3.org/2000/svg"
                  width={30}
                  height={10}
                  viewBox="0 0 46 16"
                >
                  <path
                    id="Path_10"
                    data-name="Path 10"
                    d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                    transform="translate(30)"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className={styles['shop-Carousel-pc']}>
          <CarouselPc />
        </div>
        <div className={styles['shop-Carousel-phone']}>
          <CarouselPhone />
        </div>
      </div>
    </>
  )
}
