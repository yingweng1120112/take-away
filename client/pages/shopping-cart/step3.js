import React from 'react'
import styles from '@/styles/shopping-cart/shoppingcar-step3.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStore, faRectangleList } from '@fortawesome/free-solid-svg-icons'

export default function Step1() {
  return (
    <>
      <header />
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

      {/* 購物車 */}
      <div className={styles['shoppingcar']}>
        <div className={styles['shoppingcarleft']}>
          <div className={`${styles['carttitle']} ${styles['carttopstyle']}`}>
            <div>
              <i
                className={`${styles['fa-solid']} ${styles['fa-file-circle-check']}`}
              />
              訂單編號：01234567890123
            </div>
          </div>
          <div className={styles['cartdetail']}>
            <div className={styles['cartdetailleft']}>
              <div>商品資料</div>
            </div>
            <div className={styles['cartdetailright']}>
              <div>優惠</div>
              <div>單件價格</div>
              <div>數量</div>
              <div>小計</div>
            </div>
          </div>
          <div>
            <div className={styles['cartitem']}>
              <div className={styles['cartitemleft']}>
                <div className={styles['itemlist']}>
                  <div className={styles['cartimg']}>
                    <img src="/shopping-cart/car-item1.png" alt="" />
                  </div>
                  <div>牛肉風味棒 耐嚼型潔牙棒85克 [牛肉風味]</div>
                </div>
              </div>
              <div className={styles['cartitemright']}>
                <div>0</div>
                <div>$45</div>
                <div className={styles['itemamount']}>2</div>
                <div>$90</div>
              </div>
            </div>
            <div className={styles['cartitem']}>
              <div className={styles['cartitemleft']}>
                <div className={styles['itemlist']}>
                  <div className={styles['cartimg']}>
                    <img src="/shopping-cart/car-item1.png" alt="" />
                  </div>
                  <div>牛肉風味棒 耐嚼型潔牙棒85克 [牛肉風味]</div>
                </div>
              </div>
              <div className={styles['cartitemright']}>
                <div>0</div>
                <div>$45</div>
                <div className={styles['itemamount']}>2</div>
                <div>$90</div>
              </div>
            </div>
            <div className={styles['cartitem']}>
              <div className={styles['cartitemleft']}>
                <div className={styles['itemlist']}>
                  <div className={styles['cartimg']}>
                    <img src="/shopping-cart/car-item1.png" alt="" />
                  </div>
                  <div>牛肉風味棒 耐嚼型潔牙棒85克 [牛肉風味]</div>
                </div>
              </div>
              <div className={styles['cartitemright']}>
                <div>0</div>
                <div>$45</div>
                <div className={styles['itemamount']}>2</div>
                <div>$90</div>
              </div>
            </div>
            <div className={styles['cartitem']}>
              <div className={styles['cartitemleft']}>
                <div className={styles['itemlist']}>
                  <div className={styles['cartimg']}>
                    <img src="/shopping-cart/car-item1.png" alt="" />
                  </div>
                  <div>牛肉風味棒 耐嚼型潔牙棒85克 [牛肉風味]</div>
                </div>
              </div>
              <div className={styles['cartitemright']}>
                <div>0</div>
                <div>$45</div>
                <div className={styles['itemamount']}>2</div>
                <div>$90</div>
              </div>
            </div>
            <div className={styles['cartitem']}>
              <div className={styles['cartitemleft']}>
                <div className={styles['itemlist']}>
                  <div className={styles['cartimg']}>
                    <img src="/shopping-cart/car-item1.png" alt="" />
                  </div>
                  <div>牛肉風味棒 耐嚼型潔牙棒85克 [牛肉風味]</div>
                </div>
              </div>
              <div className={styles['cartitemright']}>
                <div>0</div>
                <div>$45</div>
                <div className={styles['itemamount']}>2</div>
                <div>$90</div>
              </div>
            </div>
            {/* 重複這個區塊 */}
          </div>
        </div>
        {/* 訂單金額 */}
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
                icon={faStore}
                className={styles['iconstyle1']}
              />
              回到商城首頁
            </button>
            <button className={styles['buttonstyle']}>
              查看訂單紀錄
              <FontAwesomeIcon
                icon={faRectangleList}
                className={styles['iconstyle2']}
              />
            </button>
          </div>
        </div>
      </div>

      {/* 下花邊 */}
      <section className={styles['wall']}>
        <img src="/shopping-cart/wall.png" alt="" />
      </section>
      <footer></footer>
    </>
  )
}
