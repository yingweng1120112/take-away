import React from 'react'
import banner from '@/styles/banner/banner.module.css'
// 請複製貼上出去
export default function InformationBanner() {
  return (
    //要修改banner圖片，請直接更改下面連結
    <div
      className={banner['banner']}
      style={{
        backgroundImage: 'url(/img/information/information_banner.jpg)',
      }}
    >
      <div className={banner['left']}>
        <p className={banner['menu-a']}>SHOP</p>
        <p className={banner['menu-b']}>購物時間</p>
      </div>
      <div className={banner['middle']}>
        <div className={`${banner['accordion']}`}>
          <div className={`accordion-button ${banner['accordion-button']}`}>
            {/* span為pc版文字，p為phone版文字 */}
            <span className={banner['middle-page-title']}>商品資訊</span>
            <span>Product information</span>
          </div>
        </div>
      </div>
    </div>
  )
}
