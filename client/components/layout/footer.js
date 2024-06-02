import React, { useEffect, useRef } from 'react'
import styles from '@/styles/index/footer.module.css'

export default function Footer() {
  const footerRef = useRef(null)

  useEffect(() => {
    const footer = footerRef.current

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            footer.classList.add(styles.animate)
            observer.unobserve(footer) // 只触发一次
          }
        })
      },
      { threshold: 0.1 } // 当footer进入视口10%时触发
    )

    if (footer) {
      observer.observe(footer)
    }

    return () => {
      if (footer) {
        observer.unobserve(footer)
      }
    }
  }, [])

  return (
    <>
      <footer ref={footerRef} className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footerLogo}>
            <img src="/img/index/logo-removebg-preview.png" alt="" />
          </div>
          <div className={styles.footerInfo}>
            {/* 認養資訊 */}
            <div className={styles.footerItem}>
              <h3>領養資訊</h3>
              <hr className={styles.footerHr} />
              <ol>
                <li>
                  <a
                    className={`${styles['dropdown-item']} ${styles['desc']}`}
                    href=""
                  >
                    心理測驗
                  </a>
                </li>
                <li>
                  <a
                    className={`${styles['dropdown-item']} ${styles['desc']}`}
                    href=""
                  >
                    領養流程
                  </a>
                </li>
              </ol>
            </div>

            {/* 領養專區 */}
            <div className={styles.footerItem}>
              <h3>領養專區</h3>
              <hr className={styles.footerHr} />
              <ol>
                <li>
                  <a
                    className={`${styles['dropdown-item']} ${styles['desc']}`}
                    href=""
                  >
                    浪浪列表
                  </a>
                </li>
                <li>
                  <a
                    className={`${styles['dropdown-item']} ${styles['desc']}`}
                    href=""
                  >
                    追蹤日誌
                  </a>
                </li>
              </ol>
            </div>

            {/* 顧客服務 */}
            <div className={styles.footerItem + ' flex-sm-column mt-2'}>
              <h3>顧客服務</h3>
              <hr className={styles.footerHr} />
              <ol>
                <li>
                  <a
                    className={`${styles['dropdown-item']} ${styles['desc']}`}
                    href=""
                  >
                    常見問題
                  </a>
                </li>
                <li>
                  <a
                    className={`${styles['dropdown-item']} ${styles['desc']}`}
                    href=""
                  >
                    客服中心
                  </a>
                </li>
              </ol>
            </div>

            {/* 隱私政策 */}
            <div className={styles.footerItem + ' flex-sm-column mt-2'}>
              <h3>隱私政策</h3>
              <hr className={styles.footerHr} />
              <ol>
                <li>
                  <a
                    className={`${styles['dropdown-item']} ${styles['desc']}`}
                    href=""
                  >
                    隱私條款
                  </a>
                </li>
              </ol>
            </div>

            {/* 聯絡我們 */}
            <div className={styles.footerItem}>
              <h3>聯絡我們</h3>
              <hr className={styles.footerHr} />
              <ol className={styles.footerol}>
                <li>
                  <a
                    className={`${styles['dropdown-item']} ${styles['desc']}`}
                    href=""
                  >
                    營業人名稱：袋寵物走股份有限公司
                  </a>
                </li>
                <li>
                  <a
                    className={`${styles['dropdown-item']} ${styles['desc']}`}
                    href=""
                  >
                    線上客服：週一 ~ 週五 08:00 ~ 17:00
                  </a>
                </li>
                <li>
                  <a
                    className={`${styles['dropdown-item']} ${styles['desc']}`}
                    href=""
                  >
                    電話： 06 253 3131
                  </a>
                </li>
                <li>
                  <a className={`${styles['dropdown-item']} ${styles['desc']}`}>
                    信箱： xinpetfood@gmail.com
                  </a>
                </li>
                <li>
                  <a
                    className={`${styles['dropdown-item']} ${styles['desc']}`}
                    href=""
                  >
                    地址： 71005 台南市永康區南台街1號
                  </a>
                </li>
              </ol>
            </div>

            {/* 社群連結 */}
            <div className={`${styles['footerItem']} `}>
              <h3>社群連結</h3>
              <hr className={`${styles['footerHr']} `} />
              <ol className={`${styles['icon']}`}>
                <li>
                  <a
                    href="https://www.facebook.com/profile.php?id=100090898966387"
                    className={`${styles['footerLink']}`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/cookie_chocolate_0228/?hl=zh-tw"
                    className={`${styles['footerLink']}`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9 26.2 26.2 58 34.4 93.9 36.2 37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.9 0-184.9zm-48.5 224.4c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="https://store.line.me/stickershop/product/1043153/zh-Hant"
                    className={`${styles['footerLink']}`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path d="M311 196.8v81.3c0 2.1-1.6 3.7-3.7 3.7h-13c-1.3 0-2.4-.7-3-1.5l-37.3-50.3v48.2c0 2.1-1.6 3.7-3.7 3.7h-13c-2.1 0-3.7-1.6-3.7-3.7V196.9c0-2.1 1.6-3.7 3.7-3.7h12.9c1.1 0 2.4 .6 3 1.6l37.3 50.3V196.9c0-2.1 1.6-3.7 3.7-3.7h13c2.1-.1 3.8 1.6 3.8 3.5zm-93.7-3.7h-13c-2.1 0-3.7 1.6-3.7 3.7v81.3c0 2.1 1.6 3.7 3.7 3.7h13c2.1 0 3.7-1.6 3.7-3.7V196.8c0-1.9-1.6-3.7-3.7-3.7zm-31.4 68.1H150.3V196.8c0-2.1-1.6-3.7-3.7-3.7h-13c-2.1 0-3.7 1.6-3.7 3.7v81.3c0 1 .3 1.8 1 2.5c.7 .6 1.5 1 2.5 1h52.2c2.1 0 3.7-1.6 3.7-3.7v-13c0-1.9-1.6-3.7-3.5-3.7zm193.7-68.1H327.3c-1.9 0-3.7 1.6-3.7 3.7v81.3c0 1.9 1.6 3.7 3.7 3.7h52.2c2.1 0 3.7-1.6 3.7-3.7V265c0-2.1-1.6-3.7-3.7-3.7H344V247.7h35.5c2.1 0 3.7-1.6 3.7-3.7V230.9c0-2.1-1.6-3.7-3.7-3.7H344V213.5h35.5c2.1 0 3.7-1.6 3.7-3.7v-13c-.1-1.9-1.7-3.7-3.7-3.7zM512 93.4V419.4c-.1 51.2-42.1 92.7-93.4 92.6H92.6C41.4 511.9-.1 469.8 0 418.6V92.6C.1 41.4 42.2-.1 93.4 0H419.4c51.2 .1 92.7 42.1 92.6 93.4zM441.6 233.5c0-83.4-83.7-151.3-186.4-151.3s-186.4 67.9-186.4 151.3c0 74.7 66.3 137.4 155.9 149.3c21.8 4.7 19.3 12.7 14.4 42.1c-.8 4.7-3.8 18.4 16.1 10.1s107.3-63.2 146.5-108.2c27-29.7 39.9-59.8 39.9-93.1z" />
                    </svg>
                  </a>
                </li>
              </ol>
            </div>

            {/* 贊助方案 */}
            <div className={styles.footerItem}>
              <h3>贊助方案</h3>
              <hr className={styles.footerHr} />
              <div className={styles.fosponsor}>
                <div className={styles.sponsor}>
                  <img src="/img/index/footer_linepay.jpg" alt="" />
                  <img src="/img/index/footer_lineQR.jpg" alt="" />
                </div>
                <div>
                  <p className={styles.sponDesc}>戶名：Take Pet Away</p>
                  <p className={styles.sponDesc}>銀行：喵汪銀行 - 熊熊分行</p>
                  <p className={styles.sponDesc}>帳號：059-004-167249</p>
                </div>
              </div>
              <hr />
            </div>

            {/* copyright */}
            <div className={styles.copyright}>
              <h4 className={styles.copyrightDesc}>
                Copyright © 2024 | Take_Away
              </h4>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
