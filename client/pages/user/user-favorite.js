import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import styles from '@/styles/user/user-favorite.module.css'
import banner from '@/styles/banner/banner.module.css'
import Link from 'next/link'
import { IoMdTrash } from 'react-icons/io'
import { favs } from '@/pages/pets/index.jsx'
import { ToastContainer, toast, Slide } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function UserEdit() {
  // const [startDate, setStartDate] = useState(null)

  // const date = (date) => {
  //   setStartDate(date)
  // }

  const [isRemoveMARX, setIsRemoveMARX] = useState(false)
  const [isRemoveFU, setIsRemoveFU] = useState(false)

  const removeMARX = () => {
    toast.success(`已成功移除收藏`, {
      position: 'top-center',
      autoClose: 600,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: 'light',
      transition: Slide,
    })

    setIsRemoveMARX(!isRemoveMARX)
  }

  const removeFU = () => {
    toast.success(`已成功移除收藏`, {
      position: 'top-center',
      autoClose: 600,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: 'light',
      transition: Slide,
    })

    setIsRemoveFU(!isRemoveFU)
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
          className="accordion-collapse collapse show"
          data-bs-parent="#accordionExample"
        >
          <div className={`accordion-body ${banner['accordion-body']}`}>
            <div className={`banner['select']`}>
              <div
                className={`w-100 d-flex flex-row align-items-start ${styles['select-phone']}`}
              >
                <div className={`banner['select-item-a'] w-100`}>
                  <Link href="/user/user-info">
                    <p
                      className={`link ${banner['select-title']} 
                    ${styles['select-title']}`}
                    >
                      個人資料
                    </p>
                  </Link>
                </div>
                <div className={`banner['select-item-a'] w-100`}>
                  <Link href="/user/shopping-cart/step1">
                    <p
                      className={`link ${banner['select-title']} 
                    ${styles['select-title']} `}
                    >
                      購物車
                    </p>
                  </Link>
                </div>
                <div className={`banner['select-item-a'] w-100`}>
                  <Link href="/user/user-order-history">
                    <p
                      className={`link ${banner['select-title']} 
                    ${styles['select-title']}`}
                    >
                      訂單紀錄
                    </p>
                  </Link>
                </div>
                <div className={`banner['select-item-a'] w-100`}>
                  <Link href="/user/user-favorite">
                    <p
                      className={`link ${banner['select-title']} 
                    ${styles['select-title']}`}
                    >
                      浪浪收藏
                    </p>
                  </Link>
                </div>
                <div className={`banner['select-item-a'] w-100`}>
                  <Link href="#">
                    <p
                      className={`link ${banner['select-title']} 
                    ${styles['select-title']}`}
                    >
                      我的寵物
                    </p>
                  </Link>
                </div>
                <div className={`banner['select-item-a'] w-100`}>
                  <Link href="/user/user-reserve">
                    <p
                      className={`link ${banner['select-title']} 
                    ${styles['select-title']}`}
                    >
                      預約紀錄
                    </p>
                  </Link>
                </div>
                <div className={`banner['select-item-a'] w-100`}>
                  <Link href="/user/user-adopt">
                    <p
                      className={`link ${banner['select-title']}
                    ${styles['select-title']}`}
                    >
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
              <h2>浪浪收藏</h2>
              <div className={styles['rope']} />
              <div className={styles['bookItems']}>
                <div className={isRemoveMARX ? styles['remove'] : styles['pet-card']}>
                  <img src={`/img/pet-info/10002-1.jpg`} alt="" />
                  <div className={styles['card-desc']}>
                    <p>馬克斯</p>
                    <span>3 歲</span>
                    <div>
                      <span>6 KG</span>
                      <img
                        src="/img/pets/icon_boy.png"
                        alt=""
                        draggable="false"
                      />
                      <IoMdTrash className={styles['trash-icon']} onClick={() => {
                        removeMARX()
                      }} />
                    </div>
                    <Link href={`/pets/10002`}>
                    <button className={styles['cta']}>
                      <span className={styles['hover-underline-animation']}>
                        {' '}
                        前往頁面{' '}
                      </span>
                      <svg
                        id="arrow-horizontal"
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="10"
                        viewBox="0 0 46 16"
                      >
                        <path
                          id="Path_10"
                          data-name="Path 10"
                          d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                          transform="translate(30)"
                        ></path>
                      </svg>
                    </button>
                    </Link>
                  </div>
                </div>
                <div className={isRemoveFU ? styles['remove'] : styles['pet-card']}>
                  <img src={`/img/pet-info/10005-1.jpg`} alt="" />
                  <div className={styles['card-desc']}>
                    <p>大福</p>
                    <span>4 歲</span>
                    <div>
                      <span>9 KG</span>
                      <img
                        src="/img/pets/icon_girl.png"
                        alt=""
                        draggable="false"
                      />
                      <IoMdTrash className={styles['trash-icon']} onClick={() => {
                        removeFU()
                      }} />
                    </div>
                    <Link href={`/pets/10006`}>
                    <button className={styles['cta']}>
                      <span className={styles['hover-underline-animation']}>
                        {' '}
                        前往頁面{' '}
                      </span>
                      <svg
                        id="arrow-horizontal"
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="10"
                        viewBox="0 0 46 16"
                      >
                        <path
                          id="Path_10"
                          data-name="Path 10"
                          d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                          transform="translate(30)"
                        ></path>
                      </svg>
                    </button>
                    </Link>
                  </div>
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
