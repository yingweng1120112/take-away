import React from 'react'
import styles from '@/styles/petDiary/petDiarySearch.module.css'
import banner from '@/styles/banner/banner.module.css'
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
            <p className={banner['menu-a']}>LIFE</p>
            <p className={banner['menu-b']}>生活紀錄</p>
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
                <span className={banner['middle-page-title']}>日誌列表</span>
                <span>選擇日誌分類</span>
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
                  <p className={banner['select-title']}>選擇年齡</p>
                  <div className={banner['select-item']}>
                    <label className={banner['cl-checkbox']}>
                      <input type="checkbox" />
                      <span>幼年 0~1</span>
                    </label>
                    <label className={banner['cl-checkbox']}>
                      <input type="checkbox" />
                      <span>青年 2~3</span>
                    </label>
                    <label className={banner['cl-checkbox']}>
                      <input type="checkbox" />
                      <span>中年 4~7</span>
                    </label>
                    <label className={banner['cl-checkbox']}>
                      <input type="checkbox" />
                      <span>老年 8以上</span>
                    </label>
                  </div>
                </div>
                <div className={banner['select-item-a']}>
                  <p className={banner['select-title']}>寵物體型</p>
                  <div className={banner['select-item']}>
                    <label className={banner['cl-checkbox']}>
                      <input type="checkbox" />
                      <span>大型20kg以上</span>
                    </label>
                    <label className={banner['cl-checkbox']}>
                      <input type="checkbox" />
                      <span>中型8-20kg</span>
                    </label>
                    <label className={banner['cl-checkbox']}>
                      <input type="checkbox" />
                      <span>小型8kg以下</span>
                    </label>
                  </div>
                </div>
              </div>
              <div className={banner['select-right']}>
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
                <div className={banner['select-item-b']}>
                  <p className={banner['select-title']}>姓別</p>
                  <div className={banner['select-item']}>
                    <label className={banner['cl-checkbox']}>
                      <input type="checkbox" />
                      <span>男生</span>
                    </label>
                    <label className={banner['cl-checkbox']}>
                      <input type="checkbox" />
                      <span>女生</span>
                    </label>
                  </div>
                  <p className={banner['select-title']}> 毛孩搜尋 </p>
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
      {/* banner end */}
    </>
  )
}
