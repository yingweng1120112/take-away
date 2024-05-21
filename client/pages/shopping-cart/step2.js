import React from 'react'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import styles from '@/styles/shopping-cart/shoppingcar-step2.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faAnglesLeft,
  faClipboardCheck,
} from '@fortawesome/free-solid-svg-icons'

export default function Step1() {
  return (
    <>
      <Header />
      {/* 背景樣式上 */}
      <section className={`${styles['roof']} ${styles['sectionstyle']}`}>
        <img src="/shopping-cart/roof.png" alt="" />
      </section>
      {/* 步驟 */}
      <section className={`${styles['step']} ${styles['sectionstyle']}`}>
        <div className={styles['stepbg']}>
          <div className={styles['everystep']}>
            <div className={styles['nextto']}>
              <h1>1</h1>
              <h2>購物車</h2>
            </div>
            <div className={styles['nextto']}>
              <h1>2</h1>
              <h2>填寫資料</h2>
            </div>
            <div className={styles['nextto']}>
              <h1>3</h1>
              <h2>訂單確認</h2>
            </div>
          </div>
        </div>
      </section>

      {/* 會員資料 */}
      <div className={styles['writemessage']}>
        <div
          className={`${styles['writemessageleft']} ${styles['itemscroll']}`}
        >
          <div>
            <div
              className={`${styles['carttitle']} ${styles['carttopstyle1']}`}
            >
              <div>會員資料</div>
            </div>
            <div className={styles['cartbottomstyle']}>
              <div>
                <div>會員姓名</div>
                <div>
                  <input readOnly value="王小明" />
                </div>
              </div>
              <div>
                <div>電子郵件</div>
                <div>
                  <input readOnly value="a123456789@gmail.com" />
                </div>
              </div>
              <div>
                <div>電話號碼</div>
                <div>
                  <input readOnly value="0912345678" />
                </div>
              </div>
              <div>
                <div>地址</div>
                <div>
                  <input readOnly value="台南市中西區健康路一段1號" />
                </div>
              </div>
            </div>
          </div>
          {/* 送貨資料 */}
          <div>
            <div
              className={`${styles['carttitle']} ${styles['carttopstyle1']}`}
            >
              <div>送貨資料</div>
            </div>
            <div className={styles['cartbottomstyle']}>
              {/*  */}
              <div>
                <div>送貨方式</div>
                <div>
                  <select name="" id="">
                    <option selected="">請選擇配送方式</option>
                    <option>宅配(滿499免運費)</option>
                    <option>超商取貨(滿499免運費)</option>
                  </select>
                </div>
              </div>
              {/*  */}
              <div className={styles['checklinestyle']}>
                <input type="checkbox" className={styles['checkboxstyle']} />
                <span className={styles['spanstyle']}>
                  收件人資料與會員資料相同
                </span>
              </div>
              {/*  */}
              <div>
                <div>電子郵件</div>
                <div>
                  <input placeholder="請輸入名字（請填入真實姓名以利收件）" />
                </div>
              </div>
              {/*  */}
              <div>
                <div>電話號碼</div>
                <div>
                  <input placeholder="請輸入號碼（0912345678）" />
                </div>
              </div>
              {/*  */}
              <div className={styles['writeaddress']}>
                <div>寄送地址</div>
                <div>
                  <div className={styles['writeaddressright']}>
                    <div>
                      <select name="" id="">
                        <option>縣市</option>
                      </select>
                    </div>
                    <div>
                      <select name="" id="">
                        <option>鄉鎮市區</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <input placeholder="請輸入詳細地址" />
                  </div>
                </div>
              </div>
              {/*  */}
              <div>
                <div>訂單備註</div>
                <div>
                  <textarea
                    placeholder="請備註您的特殊需求"
                    defaultValue={''}
                  />
                </div>
              </div>
              {/*  */}
            </div>
          </div>
          {/* 付款資料及發票 */}
          <div>
            <div
              className={`${styles['carttitle']} ${styles['carttopstyle1']}`}
            >
              <div>付款資料</div>
            </div>
            <div className={styles['cartbottomstyle']}>
              <div className={styles['writebill']}>
                <div>
                  <div>付款方式</div>
                  <div>
                    <select name="" id="">
                      <option selected="">請選擇付款方式</option>
                      <option>貨到付款</option>
                      <option>Line Pay</option>
                    </select>
                  </div>
                </div>
                <div>
                  <div>發票類型</div>
                  <div>
                    <select name="" id="">
                      <option selected="">請選擇發票形式</option>
                      <option>紙本發票</option>
                      <option>手機載具</option>
                    </select>
                  </div>
                </div>
                <div>
                  <input
                    defaultValue=""
                    placeholder="請輸入手機條碼（/ABC1234）"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 訂單資訊 */}
        <div className={styles['writemessageright']}>
          <div className={`${styles['carttitle']} ${styles['carttopstyle1']}`}>
            <div>訂單資訊</div>
          </div>
          <div className={styles['cartbottomstyle']}>
            <div>
              <div>小計：</div>
              <div>$270</div>
            </div>
            <div>
              <div>運費：</div>
              <div>$80</div>
            </div>
            <div>
              <div>優惠：</div>
              <div>$0</div>
            </div>
            <div>
              <div>合計：</div>
              <div>$350</div>
            </div>
            <div className={styles['cartbutton']}>
              <button className={styles['buttonstyle']}>
                <FontAwesomeIcon
                  icon={faAnglesLeft}
                  className={styles['iconstyle1']}
                />
                回上一步
              </button>
              <button className={styles['buttonstyle']}>
                提交訂單
                <FontAwesomeIcon
                  icon={faClipboardCheck}
                  className={styles['iconstyle2']}
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 下花邊 */}
      <section className={styles['wall']}>
        <img src="/shopping-cart/wall.png" alt="" />
      </section>
      <Footer />
    </>
  )
}
