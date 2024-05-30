import React from 'react'
import styles from '@/styles/product/menu_banner2.module.css'
import banner from '@/styles/product/menu_banner.module.css'
import RangeSlider from './bannerPriceSlider2'

// 請複製貼上出去修改
// banner要滑動的範圍，請用一個div包住banner，並把範圍放進div內
// 要滑動需放兩張切割過後的圖片，分別為banner-life-1 高度為233 banner-life-1 高度為150，若圖片無法對齊，請把兩張圖片寬度改為1440
export default function Banner() {
  return (
    <>
      {/* banner start*/}
      <div
        className={`${banner['banner']} ${banner['banner-life-1']} ${styles['banner-life-1']}`}
      ></div>
      <div className={banner['banner-select']}>
        <div
          className={`${banner['banner']} ${banner['banner-life-2']} ${styles['banner-life-2']}`}
        >
          <div className={banner['left']}>
            <p className={banner['menu-a']}>MENU</p>
            <p className={banner['menu-b']}>商品一覽</p>
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
                <span className={banner['middle-page-title']}>寵物商品</span>
                <span>選擇商品</span>
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
            <div className={banner['select']}>
              <div className={banner['select-left']}>
                <div className={banner['select-item-a']}>
                  <p className={banner['select-title']}>商品總類</p>
                  <div className={banner['select-item']}>
                    <label className={banner['cl-checkbox']}>
                      <input type="checkbox" />
                      <span>寵物飼料</span>
                    </label>
                    <label className={banner['cl-checkbox']}>
                      <input type="checkbox" />
                      <span>寵物罐頭</span>
                    </label>
                    <label className={banner['cl-checkbox']}>
                      <input type="checkbox" />
                      <span>寵物用品</span>
                    </label>
                    <label className={banner['cl-checkbox']}>
                      <input type="checkbox" />
                      <span>寵物保健</span>
                    </label>
                    <label className={banner['cl-checkbox']}>
                      <input type="checkbox" />
                      <span>寵物零食</span>
                    </label>
                  </div>
                </div>
                <div className={banner['select-item-a']}>
                  <p className={banner['select-title']}>適用物種</p>
                  <div className={banner['select-item']}>
                    <label className={banner['cl-checkbox']}>
                      <input type="checkbox" />
                      <span>狗寶貝</span>
                    </label>
                    <label className={banner['cl-checkbox']}>
                      <input type="checkbox" />
                      <span>貓寶貝</span>
                    </label>
                  </div>
                </div>
              </div>
              <div className={banner['select-right']}>
                <div className={banner['select-item-a']}>
                  <p className={banner['select-title']}>排列方法</p>
                  <div className={banner['select-item']}>
                    <label className={banner['cl-checkbox']}>
                      <input type="checkbox" />
                      <span>價格由低至高</span>
                    </label>
                    <label className={banner['cl-checkbox']}>
                      <input type="checkbox" />
                      <span>價格由高至低</span>
                    </label>
                    <label className={banner['cl-checkbox']}>
                      <input type="checkbox" />
                      <span>評價最高</span>
                    </label>
                  </div>
                </div>
                <div className={banner['select-item-b']}>
                  <p className={banner['select-title']}>價格區間</p>
                  <RangeSlider />
                  <p className={banner['select-title']}> 商品搜尋 </p>
                  <div className={`mb-3 ${banner['shop-select-out']}`}>
                    <input
                      type="text"
                      className={`form-control ${banner['shop-select']}`}
                      id="exampleFormControlInput1"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
