import React from 'react'
import styles from '@/styles/banner.module.css'

export default function Banner() {
  return (
    //  若要更換圖片，請在外面加上一個div 並放置style
    //   background-image: url(/img/banner-life-1.jpg);
    //   background-size:cover;
    //   background-position: center;
    <div className={`${styles['banner']}`}>
      <div className={styles['left']}>
        <p className={styles['menu-a']}>LIFE</p>
        <p className={styles['menu-b']}>生活紀錄</p>
      </div>
      <div className={styles['middle']}>
        <div className={`${styles['accordion']}`}>
          <div className={`accordion-button ${styles['accordion-button']}`}>
            <span className={styles['middle-page-title']}>日誌列表</span>
            <span>選擇日誌分類</span>
          </div>
        </div>
      </div>
    </div>
  )
}
