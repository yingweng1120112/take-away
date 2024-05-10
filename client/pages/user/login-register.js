import React from 'react'
import styles from '@/styles/login-register.module.css'

export default function LoginRegister() {
  return (
    <>
      <section>
        <p className="tip">點選圖片中的按鈕以切換登入、註冊</p>
        <div className={styles['cont']}>
          <div className="form sign-in">
            <h2 className="h2">立即參觀！</h2>
            <label className="label">
              <span className="span spanl">Email：</span>
              <input className="input" type="email" />
            </label>
            <label className="label">
              <span className="span spanl">密碼：</span>
              <input className="input" type="password" />
            </label>
            <p className="forgot-pass">忘記密碼？</p>
            <button type="button" className="button submit">
              登入
            </button>
            <button type="button" className="button fb-btn">
              Connect with <span className="span fb-btns">Google</span>
            </button>
          </div>
          <div className="sub-cont">
            <div className="img">
              <div className="img__text m--up">
                <h2 className="h2 h2text">老朋友</h2>
                <h6 className="h6">趕快回來~我們有新朋友想介紹給你</h6>
              </div>
              <div className="img__text m--in">
                <h2 className="h2 h2text">新成員？</h2>
                <h6 className="h6">
                  快來了解各種毛孩
                  <br />
                  以及豐富的寵物用品吧！
                </h6>
              </div>
              <div className="img__btn">
                <span className="span spanbtn m--up">註冊</span>
                <span className="span spanbtn m--in">登入</span>
              </div>
            </div>
            <div className="form sign-up">
              <h2 className="h2">歡迎加入毛孩樂園</h2>
              <label className="label">
                <span className="span spanl">姓名：</span>
                <input className="input" type="text" />
              </label>
              <label className="label">
                <span className="span spanl">Email：</span>
                <input className="input" type="email" />
              </label>
              <label className="label">
                <span className="span spanl">密碼：</span>
                <input className="input" type="password" />
              </label>
              <button type="button" className="button submit">
                註冊
              </button>
              <button type="button" className="button fb-btn">
                Join with <span className="span fb-btns">Google</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
