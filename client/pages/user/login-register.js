import React, { useEffect } from 'react'
import styles from '@/styles/user/login-register.module.scss'
import DefaultLayout from '@/components/layout/default-layout'

export default function LoginRegister() {
  useEffect(() => {
    // 添加事件監聽器
    const handleClick = () => {
      document
        .querySelector(`.${styles['cont']}`)
        .classList.toggle(styles['s--signup'])
    }

    const imgBtn = document.querySelector(`.${styles['img__btn']}`)
    imgBtn.addEventListener('click', handleClick)

    // 在組件卸載時移除事件監聽器
    return () => {
      imgBtn.removeEventListener('click', handleClick)
    }
  }, [styles])

  return (
    <>
      <section className={styles['section']}>
        <p className={styles['tip']}>點選圖片中的按鈕以切換登入、註冊</p>
        <div className={styles['cont']}>
          <div className={`${styles['form']} ${styles['sign-in']}`}>
            <h2 className={styles['h2']}>立即參觀！</h2>
            <label className={styles['label']}>
              <span className={`${styles['span']} ${styles['spanl']}`}>
                Email：
              </span>
              <input className={styles['input']} type="email" />
            </label>
            <label className={styles['label']}>
              <span className={`${styles['span']} ${styles['spanl']}`}>
                密碼：
              </span>
              <input className={styles['input']} type="password" />
            </label>
            <p className={styles['forgot-pass']}>忘記密碼？</p>
            <button
              type="button"
              className={`${styles['button']} ${styles['submit']}`}
            >
              登入
            </button>
            <button
              type="button"
              className={`${styles['button']} ${styles['fb-btn']}`}
            >
              Connect with{' '}
              <span className={`${styles['span']} ${styles['fb-btns']}`}>
                Google
              </span>
            </button>
          </div>
          <div className={styles['sub-cont']}>
            <div className={styles['img']}>
              <di className={`${styles['img__text']} ${styles['m--up']}`}>
                <h2 className={`${styles['h2']} ${styles['h2text']}`}>
                  老朋友
                </h2>
                <h6 className={styles['h6']}>
                  趕快回來~我們有新朋友想介紹給你
                </h6>
              </di>
              <div className={`${styles['img__text']} ${styles['m--in']}`}>
                <h2 className={`${styles['h2']} ${styles['h2text']}`}>
                  新成員？
                </h2>
                <h6 className={styles['h6']}>
                  快來了解各種毛孩
                  <br />
                  以及豐富的寵物用品吧！
                </h6>
              </div>
              <div className={styles['img__btn']}>
                <span
                  className={`${styles['span']} ${styles['spanbtn']} ${styles['m--up']}`}
                >
                  註冊
                </span>
                <span
                  className={`${styles['span']} ${styles['spanbtn']} ${styles['m--in']}`}
                >
                  登入
                </span>
              </div>
            </div>
            <div className={`${styles['form']} ${styles['sign-up']}`}>
              <h2 className={styles['h2']}>歡迎加入毛孩樂園</h2>
              <label className={styles['label']}>
                <span className={`${styles['span']} ${styles['spanl']}`}>
                  姓名：
                </span>
                <input className={styles['input']} type="text" />
              </label>
              <label className={styles['label']}>
                <span className={`${styles['span']} ${styles['spanl']}`}>
                  Email：
                </span>
                <input className={styles['input']} type="email" />
              </label>
              <label className={styles['label']}>
                <span className={`${styles['span']} ${styles['spanl']}`}>
                  密碼：
                </span>
                <input className={styles['input']} type="password" />
              </label>
              <button
                type="button"
                className={`${styles['button']} ${styles['submit']}`}
              >
                註冊
              </button>
              <button
                type="button"
                className={`${styles['button']} ${styles['fb-btn']}`}
              >
                Join with{' '}
                <span className={`${styles['span']} ${styles['fb-btns']}`}>
                  Google
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
