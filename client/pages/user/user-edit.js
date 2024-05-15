import React from 'react'
import styles from '@/styles/user-edit.module.css'

export default function UserEdit() {
  return (
    <section className={`${styles.mt5} ${styles.w100}`}>
      <img className={styles.bgfeet1} src="/img/user/loading.png" alt="" />
      <img className={styles.bgfeet2} src="/img/user/loading.png" alt="" />
      <div className="container">
        <div className={`${styles.book} d-flex`}>
          <div className={`${styles.bookInfo} d-flex`}>
            <div
              className={`${styles.bookContainer} ${styles.w100} ${styles.hAuto} bg-light`}
            >
              <h2>編輯資料</h2>
              <div className={styles.rope}></div>
              <div
                className={`${styles.bookItems} d-block justify-content-center align-items-center`}
              >
                <form className={styles.items}>
                  <div className={styles.user}>
                    <div className={styles.stickers}>
                      <img src="/img/user/cat_cookie1.jpg" alt="Sticker" />
                    </div>
                    <h5 className={styles.userName}>會員名稱：三明治</h5>
                  </div>
                  <img
                    className={styles.bell}
                    src="/img/user/bell.png"
                    alt=""
                  />
                  <div className={styles.bookItem}>
                    <img src="/img/user/user-dog.png" alt="" />
                    <div className={styles.group}>
                      <input className="form-control" type="text" required />
                      <span className={styles.highlight}></span>
                      <span className={styles.bar}></span>
                      <label className={styles.label}>姓名</label>
                    </div>
                    <h6 className="text-danger">* 修改名稱不得使用特殊字元</h6>
                  </div>
                  <div className={styles.bookItem}>
                    <img src="/img/user/user-dog.png" alt="" />
                    <div className={styles.group}>
                      <input className="form-control" type="text" required />
                      <span className={styles.highlight}></span>
                      <span className={styles.bar}></span>
                      <label className={styles.label}>電話：</label>
                    </div>
                    <h6 className="text-danger">* 修改名稱不得使用特殊字元</h6>
                  </div>
                  <div className={styles.bookItem}>
                    <img src="/img/user/user-dog.png" alt="" />
                    <div className={styles.group}>
                      <input className="form-control" type="text" required />
                      <span className={styles.highlight}></span>
                      <span className={styles.bar}></span>
                      <label className={styles.label}>生日：</label>
                    </div>
                    <h6 className="text-danger">* 修改名稱不得使用特殊字元</h6>
                  </div>
                  <div className={styles.bookItem}>
                    <img src="/img/user/user-dog.png" alt="" />
                    <div className={styles.group}>
                      <input className="form-control" type="text" required />
                      <span className={styles.highlight}></span>
                      <span className={styles.bar}></span>
                      <label className={styles.label}>密碼：</label>
                    </div>
                    <h6 className="text-danger">* 修改名稱不得使用特殊字元</h6>
                  </div>
                  <div className={styles.bookItem}>
                    <img src="/img/user/user-dog.png" alt="" />
                    <div className={styles.group}>
                      <input className="form-control" type="text" required />
                      <span className={styles.highlight}></span>
                      <span className={styles.bar}></span>
                      <label className={styles.label}>確認密碼：</label>
                    </div>
                    <h6 className="text-danger">* 修改名稱不得使用特殊字元</h6>
                  </div>
                  <div className={styles.bookItem}>
                    <img src="/img/user/user-dog.png" alt="" />
                    <div className={styles.group}>
                      <input className="form-control" type="text" required />
                      <span className={styles.highlight}></span>
                      <span className={styles.bar}></span>
                      <label className={styles.label}>地址：</label>
                    </div>
                    <h6 className="text-danger">* 修改名稱不得使用特殊字元</h6>
                  </div>
                  <img
                    className={styles.feet}
                    src="/img/user/loadfeet.png"
                    alt=""
                  />
                </form>
                <div className={styles.btnItem}>
                  <button className="btn btn-primary">確認修改</button>
                  <button className="btn btn-secondary">取消修改</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
