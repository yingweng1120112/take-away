import { useState, useEffect } from 'react'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import styles from '@/styles/user/user-info.module.css'
import banner from '@/styles/banner/banner.module.css'
import Link from 'next/link'

export default function UserInfo() {
  // const [userInfo, setUserInfo] = useState([])

  // const getUserInfo = async () => {
  //   const data = await loadUserInfo()
  //   // 確認資料結構是否與原始專案相符，並設置到狀態中
  //   if (Array.isArray(data.user_info)) {
  //     setUserInfo(data.user_info)
  //   } else {
  //     console.error('資料結構不符', data)
  //   }
  //   console.log(data)
  // }
  // useEffect(() => {
  //   getUserInfo()
  // }, [])

  // // 確認是否有會員資料
  // if (userInfo.length === 0) {
  //   return (
  //     <>
  //       <Header />
  //       <p>尚無會員資料</p>
  //       <Footer />
  //     </>
  //   )
  // }
  // //獲取表頭
  // const tableHeaders = Object.keys(userInfo[0])

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
            <div className={styles['rope']} />
            <div className={styles['bookContainer']}>
              <h2>個人資料</h2>
              <div className={styles['user']}>
                <div className={styles['stickers']}>
                  <img src={`/img/user/cat_cookie1.jpg`} alt="" />
                </div>
                <h5 className={styles['']}>姓名：三明治</h5>
              </div>
              <div className={styles['bookItem']}>
                <img src={`/img/user/user-dog.jpg`} alt="" />
                <h5>電話：0931111222</h5>
                <hr />
              </div>
              <div className={styles['bookItem']}>
                <img src="../images/user-dog.jpg" alt="" />
                <h5>生日：1999/03/03</h5>
              </div>
              <div className={styles['bookItem']}>
                <img src="../images/user-dog.jpg" alt="" />
                <h5>密碼：************</h5>
              </div>
              <div className={styles['bookItem']}>
                <img src="../images/user-dog.jpg" alt="" />
                <h5>確認密碼：************</h5>
              </div>
              <div className={styles['bookItem']}>
                <img src="../images/user-dog.jpg" alt="" />
                <h5>地址：台南市白河區狸貓路人造人11號</h5>
              </div>
              <div className={styles['btnItem']}>
                <Link href="/user/user-edit">
                  <button className={styles['btnConfirm']}>修改資料</button>
                </Link>
                <button className={styles['btnConfirm']}>登出</button>
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
