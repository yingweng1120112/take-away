import React from 'react'
import banner from '@/styles/banner/banner.module.css'
// 請複製貼上出去
export default function Banner() {
  return (
    //要修改banner圖片，請直接更改下面連結
    <div
      className={banner['banner']}
      style={{ backgroundImage: 'url(/img/banner-blog.jpg)' }}
    >
      <div className={banner['left']}>
        <p className={banner['menu-a']}>LIFE</p>
        <p className={banner['menu-b']}>生活紀錄</p>
      </div>
      <div className={banner['middle']}>
        <div className={`${banner['accordion']}`}>
          <div className={`accordion-button ${banner['accordion-button']}`}>
            {/* span為pc版文字，p為phone版文字 */}
            <span className={banner['middle-page-title']}>日誌列表</span>
            <span>選擇日誌分類</span>
            <p className={banner['middle-page-title']}>選項</p>
          </div>
        </div>
      </div>
    </div>
  )
}
