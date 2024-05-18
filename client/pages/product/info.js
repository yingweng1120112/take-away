import React from 'react'
import styles from '@/styles/product/information.module.css'
import ProductCarousel from './product_carousel'
import Quantity from './quantity'
// 產品資訊
export default function Info() {
  return (
    <>
      <section className={styles.section}>
        <div className={styles.content}>
          {/* 產品輪播 */}
          <ProductCarousel />
          {/* 產品標題區 */}
          <div className={styles['product-info']}>
            <div className={styles['product-title']}>
              <h1>Maolex 毛力士 - 狗狗常溫主食餐包地中海燉羊肉佐鮮魚</h1>
              <h2>售價 : $109</h2>
            </div>
            <Quantity />
          </div>
          <div className={styles['footprint-banner']}>
            <img src="\img\information\footprint-banner.svg" alt="" />
          </div>
          {/* 產品內容區 */}
          <div className={styles['product-description-title']}>
            <img src="\img\information\product-description-title.svg" alt="" />
            <p className={styles.p}>
              動物醫院合作營養顧問監製，符合並超越NRC&amp;AAFCO標準，
              不再煩惱鮮食營養不均的問題！黃金營養比例人用等級高品質新鮮食材，滿滿肉塊+鮮美湯汁+剛剛好的蔬食
              獨家奢華添加來自日本北海道稀少珍貴的“野生鮭魚鼻軟骨萃取”，為寶貝補充人用同款的頂級保健品『蛋白聚醣』，從日常保養牠的關節與皮毛！
              動物醫院合作營養顧問監製，符合並超越NRC&amp;AAFCO標準，不再煩惱鮮食營養不均的問題！
              ✓ 黃金營養比例 ✓ 人用等級高品質新鮮食材 ✓
              滿滿肉塊+鮮美湯汁+剛剛好的蔬食
              獨家奢華添加來自日本北海道稀少珍貴的“野生鮭魚鼻軟骨萃取”，為寶貝補充人用同款的頂級保健品『蛋白聚醣』，從日常保養牠的關節與皮毛！
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
