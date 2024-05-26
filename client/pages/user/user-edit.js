import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import styles from '@/styles/user/user-edit.module.css'
import banner from '@/styles/banner/banner.module.css'
import Link from 'next/link'

export default function UserEdit() {
  const [startDate, setStartDate] = useState(null)

  const date = (date) => {
    setStartDate(date)
  }

  return (
    <section>
      <Header />
      {/* banner start*/}
      <div
        className={`${banner['banner']} ${banner['banner-life-1']} ${styles['banner-life-1']}`}
      ></div>
      <div className={banner['banner-select']}>
        <div
          className={`${banner['banner']} ${banner['banner-life-2']} ${styles['banner-life-2']}`}
        >
          <div className={banner['left']}>
            <p className={banner['menu-a']}>PROP</p>
            <p className={banner['menu-b']}>個人資料</p>
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
                <span className={banner['middle-page-title']}>會員中心</span>
                <span>功能選單</span>
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
            <div className={`banner['select']`}>
              <div className="w-100 d-flex flex-row align-items-start">
                <div className={`banner['select-item-a'] w-100`}>
                  <Link href="/user/user-info">
                    <p className={`link ${banner['select-title']}`}>個人資料</p>
                  </Link>
                </div>
                <div className={`banner['select-item-a'] w-100`}>
                  <Link href="/user/shopping-cart/step1">
                    <p className={`link ${banner['select-title']}`}>購物車</p>
                  </Link>
                </div>
                <div className={`banner['select-item-a'] w-100`}>
                  <Link href="/user/user-order-history">
                    <p className={`link ${banner['select-title']}`}>訂單紀錄</p>
                  </Link>
                </div>
                <div className={`banner['select-item-a'] w-100`}>
                  <Link href="/user/">
                    <p className={`link ${banner['select-title']}`}>浪浪收藏</p>
                  </Link>
                </div>
                <div className={`banner['select-item-a'] w-100`}>
                  <Link href="/user/user-mypet">
                    <p className={`link ${banner['select-title']}`}>我的寵物</p>
                  </Link>
                </div>
                <div className={`banner['select-item-a'] w-100`}>
                  <Link href="/user/user-reserve">
                    <p className={`link ${banner['select-title']}`}>預約紀錄</p>
                  </Link>
                </div>
                <div className={`banner['select-item-a'] w-100`}>
                  <Link href="/user/user-adopt-history">
                    <p className={`link ${banner['select-title']}`}>
                      線上認養紀錄
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* banner end */}
      <img className={styles['bgfeet1']} src={`/img/user/loading.png`} alt="" />
      <img className={styles['bgfeet2']} src={`/img/user/loading.png`} alt="" />
      <div className={styles['container']}>
        <div className={styles['book']}>
          <div className={styles['bookInfo']}>
            <div className={styles['bookContainer']}>
              <h2>編輯資料</h2>
              <div className={styles['rope']} />
              <div className={styles['bookItems']}>
                <form className={styles['items']}>
                  <div className={styles['user']}>
                    <div className={styles['stickers']}>
                      <img src={`/img/user/cat_cookie1.jpg`} alt="Sticker" />
                    </div>
                    <h5 className={styles['userName']}>會員名稱：三明治</h5>
                  </div>
                  <img
                    className={styles['bell']}
                    src={`/img/user/bell.png`}
                    alt=""
                  />
                  <div className={styles['bookItem']}>
                    <img src={`/img/user/user-dog.png`} alt="" />
                    <div className={styles['group']}>
                      <input
                        className={styles['input']}
                        type="text"
                        required
                        id="name"
                      />
                      <span className={styles['highlight']} />
                      <span className={styles['bar']} />
                      <label className={styles['label']} htmlFor="name">
                        姓名：
                      </label>
                    </div>
                    <h6 className={styles['text-danger']}>
                      * 修改名稱不得使用特殊字元
                    </h6>
                  </div>
                  <div className={styles['bookItem']}>
                    <img src={`/img/user/user-dog.png`} alt="" />
                    <div className={styles['group']}>
                      <input
                        className={styles['input']}
                        type="text"
                        required
                        id="phone"
                      />
                      <span className={styles['highlight']} />
                      <span className={styles['bar']} />
                      <label className={styles['label']} htmlFor="phone">
                        電話：
                      </label>
                    </div>
                    <h6 className={styles['text-danger']}>
                      * 修改名稱不得使用特殊字元
                    </h6>
                  </div>
                  <div className={styles['bookItem']}>
                    <img src={`/img/user/user-dog.png`} alt="" />
                    <div className={styles['group']}>
                      <DatePicker
                        selected={startDate}
                        onChange={date}
                        dateFormat="yyyy/MM/dd"
                        className={styles['input']}
                        id="birthday"
                      />
                      <span className={styles['highlight']} />
                      <span className={styles['bar']} />
                      <label
                        className={`${styles['label']} ${
                          startDate ? styles['active'] : ''
                        }`}
                        htmlFor="birthday"
                      >
                        生日：
                      </label>
                    </div>
                    <h6 className={styles['text-danger']}>
                      * 修改名稱不得使用特殊字元
                    </h6>
                  </div>
                  <div className={styles['bookItem']}>
                    <img src={`/img/user/user-dog.png`} alt="" />
                    <div className={styles['group']}>
                      <input
                        className={styles['input']}
                        type="text"
                        required
                        id="password"
                      />
                      <span className={styles['highlight']} />
                      <span className={styles['bar']} />
                      <label className={styles['label']} htmlFor="password">
                        密碼：
                      </label>
                    </div>
                    <h6 className={styles['text-danger']}>
                      * 修改名稱不得使用特殊字元
                    </h6>
                  </div>
                  <div className={styles['bookItem']}>
                    <img src={`/img/user/user-dog.png`} alt="" />
                    <div className={styles['group']}>
                      <input
                        className={styles['input']}
                        type="text"
                        required
                        id="confirm-password"
                      />
                      <span className={styles['highlight']} />
                      <span className={styles['bar']} />
                      <label
                        className={styles['label']}
                        htmlFor="confirm-password"
                      >
                        確認密碼：
                      </label>
                    </div>
                    <h6 className={styles['text-danger']}>
                      * 修改名稱不得使用特殊字元
                    </h6>
                  </div>
                  <div className={styles['bookItem']}>
                    <img src={`/img/user/user-dog.png`} alt="" />
                    <div className={styles['group']}>
                      <input
                        className={styles['input']}
                        type="text"
                        required
                        id="address"
                      />
                      <span className={styles['highlight']} />
                      <span className={styles['bar']} />
                      <label className={styles['label']} htmlFor="address">
                        地址：
                      </label>
                    </div>
                    <h6 className={styles['text-danger']}>
                      * 修改名稱不得使用特殊字元
                    </h6>
                  </div>
                  <img
                    className={styles['feet']}
                    src={`/img/user/loadfeet.png`}
                    alt=""
                  />
                </form>
                <div className={styles['btnItem']}>
                  <button className={styles['btnConfirm']}>確認修改</button>
                  <button className={styles['btnConfirm']}>取消修改</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <style jsx>
        {`
          .link {
            cursor: pointer;
          }
        `}
      </style>
    </section>
  )
}
