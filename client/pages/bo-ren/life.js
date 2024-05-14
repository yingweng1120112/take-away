import React from 'react'
import styles from '@/styles/life.module.css'

export default function life() {
  return (
    <>
      <div className={`${styles['banner']} ${styles['banner-life-1']}`}></div>
      <div className={styles['life-container']}>
        <div>
          <div className={styles['banner-fixed']}>
            <div className={`${styles['banner']} ${styles['banner-life-2']}`}>
              <div className={styles['left']}>
                <p className={styles['menu-a']}>LIFE</p>
                <p className={styles['menu-b']}>生活紀錄</p>
              </div>
              <div className={styles['middle']}>
                <div className={styles['accordion']} id="accordionExample">
                  <button
                    className={styles['accordion-button']}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    <p className={styles['middle-page-title']}>選項</p>
                    <span className={styles['middle-page-title']}>
                      日誌列表
                    </span>
                    <span>選擇日誌分類</span>
                  </button>
                </div>
              </div>
            </div>
            <div
              id="collapseOne"
              className={`${styles['accordion-collapse']} ${styles['collapse']} ${styles['show']}`}
              data-bs-parent="#accordionExample"
            >
              <div
                id="collapseOne"
                className={`${styles['accordion-collapse']} ${styles['collapse']} ${styles['show']}`}
                data-bs-parent="#accordionExample"
              >
                <div className={styles['accordion-body']}>
                  <div className={styles['select']}>
                    <div className={styles['select-left']}>
                      <div className={styles['select-item-a']}>
                        <p className={styles['select-title']}>選擇年齡</p>
                        <div className={styles['select-item']}>
                          <label className={styles['cl-checkbox']}>
                            <input defaultChecked="" type="checkbox" />
                            <span>幼年 0~1</span>
                          </label>
                          <label className={styles['cl-checkbox']}>
                            <input defaultChecked="" type="checkbox" />
                            <span>青年 2~3</span>
                          </label>
                          <label className={styles['cl-checkbox']}>
                            <input defaultChecked="" type="checkbox" />
                            <span>中年 4~7</span>
                          </label>
                          <label className={styles['cl-checkbox']}>
                            <input defaultChecked="" type="checkbox" />
                            <span> 老年 8以上</span>
                          </label>
                        </div>
                      </div>
                      <div className={styles['select-item-a']}>
                        <p className={styles['select-title']}>寵物體型</p>
                        <div className={styles['select-item']}>
                          <label className={styles['cl-checkbox']}>
                            <input type="checkbox" />
                            <span>大型20kg以上</span>
                          </label>
                          <label className={styles['cl-checkbox']}>
                            <input defaultChecked="" type="checkbox" />
                            <span>中型8-20kg</span>
                          </label>
                          <label className={styles['cl-checkbox']}>
                            <input defaultChecked="" type="checkbox" />
                            <span>小型8kg以下</span>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className={styles['select-right']}>
                      <div className={styles['select-item-a']}>
                        <p className={styles['select-title']}>適用物種</p>
                        <div className={styles['select-item']}>
                          <label className={styles['cl-checkbox']}>
                            <input type="checkbox" />
                            <span>狗寶貝</span>
                          </label>
                          <label className={styles['cl-checkbox']}>
                            <input defaultChecked="" type="checkbox" />
                            <span>貓寶貝</span>
                          </label>
                        </div>
                      </div>
                      <div className={styles['select-item-b']}>
                        <p className={styles['select-title']}>姓別</p>
                        <div className={styles['select-item']}>
                          <label className={styles['cl-checkbox']}>
                            <input defaultChecked="" type="radio" name="a" />
                            <span>男生</span>
                          </label>
                          <label className={styles['cl-checkbox']}>
                            <input defaultChecked="" type="radio" name="a" />
                            <span>女生</span>
                          </label>
                        </div>
                        <p className={styles['select-title']}> 毛孩搜尋 </p>
                        <div
                          className={`${styles['mb-3']} ${styles['shop-select-out']}`}
                        >
                          <input
                            type="text"
                            className={`${styles['form-control']} ${styles['shop-select']}`}
                            id="exampleFormControlInput1"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
          <div className={styles['swiper mySwiper']}>
            <div className={styles['swiper-wrapper']}>
              <div className={styles['swiper-slide']}>
                <a href="">
                  <img src="/img/food.svg" alt="" />
                </a>
              </div>
              <div className={styles['swiper-slide']}>
                <a href="">
                  <img src="/img/food.svg" alt="" />
                </a>
              </div>
              <div className={styles['swiper-slide']}>
                <a href="">
                  <img src="/img/food.svg" alt="" />
                </a>
              </div>
              <div className={styles['swiper-slide']}>
                <a href="">
                  <img src="/img/food.svg" alt="" />
                </a>
              </div>
              <div className={styles['swiper-slide']}>
                <a href="">
                  <img src="/img/food.svg" alt="" />
                </a>
              </div>
              <div className={styles['swiper-slide']}>
                <a href="">
                  <img src="/img/food.svg" alt="" />
                </a>
              </div>
              <div className={styles['swiper-slide']}>
                <a href="">
                  <img src="/img/food.svg" alt="" />
                </a>
              </div>
              <div className={styles['swiper-slide']}>
                <a href="">
                  <img src="/img/food.svg" alt="" />
                </a>
              </div>
              <div className={styles['swiper-slide']}>
                <a href="">
                  <img src="/img/food.svg" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={styles['shop-Carousel-phone']}>
          <div className={styles['swiper mySwiper2']}>
            <div className={styles['swiper-wrapper']}>
              <div className={styles['swiper-slide']}>
                <a href="">
                  <img src="/img/food.svg" alt="" />
                </a>
              </div>
              <div className={styles['swiper-slide']}>
                <a href="">
                  <img src="/img/food.svg" alt="" />
                </a>
              </div>
              <div className={styles['swiper-slide']}>
                <a href="">
                  <img src="/img/food.svg" alt="" />
                </a>
              </div>
              <div className={styles['swiper-slide']}>
                <a href="">
                  <img src="/img/food.svg" alt="" />
                </a>
              </div>
              <div className={styles['swiper-slide']}>
                <a href="">
                  <img src="/img/food.svg" alt="" />
                </a>
              </div>
              <div className={styles['swiper-slide']}>
                <a href="">
                  <img src="/img/food.svg" alt="" />
                </a>
              </div>
              <div className={styles['swiper-slide']}>
                <a href="">
                  <img src="/img/food.svg" alt="" />
                </a>
              </div>
              <div className={styles['swiper-slide']}>
                <a href="">
                  <img src="/img/food.svg" alt="" />
                </a>
              </div>
              <div className={styles['swiper-slide']}>
                <a href="">
                  <img src="/img/food.svg" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
