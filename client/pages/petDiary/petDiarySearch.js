import React, { useRef, useEffect, useState } from 'react'

import CarouselPc from '@/components/swiper/shopSwiperPc'
import CarouselPhone from '@/components/swiper/shopSwiperPhone'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import banner from '@/styles/banner/banner.module.css'
import styles from '@/styles/petDiary/petDiarySearch.module.css'
import { FaVenus, FaMars } from 'react-icons/fa6'

export default function life() {
  return (
    <>
      <div>
        <Header />
        <div className={styles['life-container']}>
          {/* banner start*/}
          <div
            className={`${banner['banner']} ${banner['banner-life-1']} ${styles['banner-life-1']}`}
          ></div>
          <div className={banner['banner-select']}>
            <div
              className={`${banner['banner']} ${styles['banner']} ${banner['banner-life-2']} ${styles['banner-life-2']}`}
            >
              <div className={banner['left']}>
                <p className={banner['menu-a']}>LIFE</p>
                <p className={banner['menu-b']}>生活紀錄</p>
              </div>
              <div className={banner['middle']}>
                <div
                  className={`accordion ${banner['accordion']}`}
                  id="accordionExample"
                >
                  <button
                    className={`accordion-button ${banner['accordion-button']}`}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    <span className={banner['middle-page-title']}>
                      日誌列表
                    </span>
                    <span>選擇日誌分類</span>
                  </button>
                </div>
              </div>
            </div>

            <div
              id="collapseOne"
              class="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div className={`accordion-body ${banner['accordion-body']}`}>
                <div className={banner['select']}>
                  <div className={banner['select-left']}>
                    <div className={banner['select-item-a']}>
                      <p className={banner['select-title']}>選擇年齡</p>
                      <div className={banner['select-item']}>
                        <label className={banner['cl-checkbox']}>
                          <input type="checkbox" />
                          <span>幼年 0~1</span>
                        </label>
                        <label className={banner['cl-checkbox']}>
                          <input type="checkbox" />
                          <span>青年 2~3</span>
                        </label>
                        <label className={banner['cl-checkbox']}>
                          <input type="checkbox" />
                          <span>中年 4~7</span>
                        </label>
                        <label className={banner['cl-checkbox']}>
                          <input type="checkbox" />
                          <span>老年 8以上</span>
                        </label>
                      </div>
                    </div>
                    <div className={banner['select-item-a']}>
                      <p className={banner['select-title']}>寵物體型</p>
                      <div className={banner['select-item']}>
                        <label className={banner['cl-checkbox']}>
                          <input type="checkbox" />
                          <span>大型 20kg以上</span>
                        </label>
                        <label className={banner['cl-checkbox']}>
                          <input type="checkbox" />
                          <span>中型 8-20kg</span>
                        </label>
                        <label className={banner['cl-checkbox']}>
                          <input type="checkbox" />
                          <span>小型 8kg以下</span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className={banner['select-right']}>
                    <div className={banner['select-item-a']}>
                      <p className={banner['select-title']}>適用物種</p>
                      <div className={banner['select-item']}>
                        <label className={banner['cl-checkbox']}>
                          <input type="checkbox" />
                          <span>狗寶貝</span>
                        </label>
                        <label className={banner['cl-checkbox']}>
                          <input type="checkbox" />
                          <span>貓寶貝</span>
                        </label>
                      </div>
                    </div>
                    <div className={banner['select-item-c']}>
                      <p className={banner['select-title']}>姓別</p>
                      <div className={banner['select-item']}>
                        <label className={banner['cl-checkbox']}>
                          <input type="checkbox" />
                          <span>男生</span>
                        </label>
                        <label className={banner['cl-checkbox']}>
                          <input type="checkbox" />
                          <span>女生</span>
                        </label>
                      </div>
                      <p className={banner['select-title']}> 毛孩搜尋 </p>
                      <div className={`mb-3 ${banner['shop-select-out']}`}>
                        <input
                          type="text"
                          className={`form-control ${banner['shop-select']}`}
                          id="exampleFormControlInput1"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* banner end */}
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
                      <FaVenus />
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
                      <FaVenus />
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
                      <FaMars />
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
                      <FaVenus />
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
                      <p className={styles['desc']}>今年1歲</p>
                      <FaVenus />
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
                      <FaMars />
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
                      <FaMars />
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
                      <FaMars />
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
                      <p className={styles['desc']}>今年1歲</p>
                      <FaVenus />
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
                      <FaVenus />
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
                      <FaVenus />
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
                      <FaVenus />
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
            <a className={`${styles['page']} smaller`}> 1 </a>
            <a className={`${styles['page']} smaller`}>2</a>
            <span aria-current="page" className={styles['current']}>
              3
            </span>
            <a className={`${styles['page']} smaller`}>4</a>
            <a className={`${styles['page']} smaller`}>5</a>
            <a
              className={styles['nextpostslink']}
              rel="next"
              aria-label="次のページ"
              href="#"
            >
              &gt;
            </a>
            <a className={'last'} href="#" aria-label="Last Page">
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
              <button className={`${styles['cta']} ${styles['btn-more']}`}>
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
        <Footer />
      </div>
    </>
  )
}
