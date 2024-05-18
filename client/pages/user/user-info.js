import React from 'react'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import styles from '@/styles/user/user-info.module.css'

export default function UserInfo() {
  return (
    <section>
      <Header />
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
                <img
                  src={`/img/user/cat_cookie1.jpg`}
                  src="../images/user-dog.jpg"
                  alt=""
                />
                <h5>生日：1999/03/03</h5>
              </div>
              <div className={styles['bookItem']}>
                <img src="../images/user-dog.jpg" alt="" />
                <h5>密碼：************</h5>
              </div>
              <div className={styles['bookItem']}>
                <img
                  src={`/img/user/cat_cookie1.jpg`}
                  src="../images/user-dog.jpg"
                  alt=""
                />
                <h5>確認密碼：************</h5>
              </div>
              <div className={styles['bookItem']}>
                <img src="../images/user-dog.jpg" alt="" />
                <h5>地址：台南市白河區狸貓路人造人11號</h5>
              </div>
              <div className={styles['btnItem']}>
                <button className={styles['btnConfirm']}>修改資料</button>
                <button className={styles['btnConfirm']}>登出</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  )
}
