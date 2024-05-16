import React, { useRef, useEffect, useState } from 'react'
import styles from '@/styles/adopt.module.css'
import Carousel from '@/components/swiper/swiper'
import AdoptForm from './adout-form'
import Header from '../components/layout/header'


const parageStyles = {
  WebkitLineClamp: 1,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  display: '-webkit-box',
}
export default function Adopt() {
  const [open, setOpen] = useState(false)
  const [showButton, setShowButton] = useState(false)
  const ref = useRef(null)
  useEffect(() => {
    if (ref.current) {
      setShowButton(ref.current.scrollHeight !== ref.current.clientHeight)
    }
  }, [])
  return (
    <>
    <Header />
      <div className={styles['adout']}>
        <div className={styles['container']}>
          <img src={`/img/foot.png`} alt="" className={styles['foot']} />
          <img src={`/img/foot.png`} alt="" className={styles['foot']} />
          <div className={styles['popup-image']}>
            <a>
              <i
                className={`${styles['fa-regular']}
            ${styles['fa-circle-xmark']}`}
              />
            </a>
            <img src={`/img/pet-img.jpg`} alt="" />
            <img src={`/img/print.png`} alt="" className={styles['print']} />
            <img src={`/img/foot.png`} alt="" className={styles['foot']} />
            <img src={`/img/foot.png`} alt="" className={styles['myfoot']} />
            <img src={`/img/foot.png`} alt="" className={styles['feet']} />
          </div>
          <section className={styles['about-pet']}>
            <div className={styles['pet-title']}>
              <div className={styles['petswiper']}>
                <Carousel style={{ 'margin': '1rem', }} />
              </div>

              <div className={styles['pet-photo']}>
                <img src={`/img/pet-info/10008/10008-1p.jpg`} alt="" />
              </div>
              <div className={styles['pet-name']}>
                {/* TODO:姓名抓資料庫 */}
                <h3>認養滷蛋</h3>
                <h3>妹妹 • 5歲 • 射手座 • 鬆獅犬</h3>
              </div>
              <div className={styles['pet-img']}>
                <div className={styles['image']}>
                  <img src={`/img/pet-info/10008/10008-2p.jpg`} alt="" />
                </div>
                <div className={styles['image']}>
                  <img src={`/img/pet-info/10008/10008-3p.jpg`} alt="" />
                </div>
                <div className={styles['image']}>
                  <img src={`/img/pet-info/10008/10008-4p.jpg`} alt="" />
                </div>
              </div>
              <div className={styles['pet-namet']}>
                {/* TODO:姓名抓資料庫 */}
                <h3>認養滷蛋</h3>
                <h3>妹妹• 5歲 • 射手座 • 鬆獅犬</h3>
              </div>
              <div className={styles['extra']}>
                <div className={styles['pet-character']}>
                  <h3>性格特色</h3>
                  <h4 style={open ? null : parageStyles}>
                    1.很活潑好動，但只要讓她適當消耗精力，也能乖乖安靜待著
                    <br />
                    2.面對陌生人會先觀察，但一旦認定你就會開始黏人，看到熟人時也會非常興奮。
                    <br />
                    {/* TODO:姓名抓資料庫 */}
                    3.滷蛋願意跟隨人類、聽從指令。
                    <br />
                    4.對環境適應力快、勇於探索，但警戒性也很高。
                    <br />
                    <p className={styles['date-p']}>捐款須知</p>
                    ※本專案募資項目扣除Ludan（滷蛋）生活等相關費用，餘款將用於支付250隻等家狗狗每日的生活開銷※
                    <br />
                    ※您每一筆捐款將可以「列舉扣除額」方式申報扣抵所得稅※
                  </h4>
                  <br />
                  <button
                    onClick={() => {
                      setOpen(!open)
                    }}
                    className={styles['Read-More']}
                  >
                    {open ? 'Read Less...' : 'Read More...'}
                  </button>
                </div>
              </div>
            </div>
          </section>
          <section className={styles['form']}>
            <AdoptForm />
          </section>
        </div>
      </div>
      <footer>
        <div>
          <h1>footer</h1>
        </div>
      </footer>
    </>
  )
}
