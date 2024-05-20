import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import styles from '@/styles/user/user-edit.module.css'

export default function UserEdit() {
  const [startDate, setStartDate] = useState(null)

  const date = (date) => {
    setStartDate(date)
  }

  return (
    <section>
      <Header />
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
    </section>
  )
}
