import React from 'react'
import styles from '@/styles/faq/index_service.module.css'
import { FaPaw } from 'react-icons/fa'

export default function Indexservice() {
  return (
    <>
      <div className={styles['serv_container']}>
        <div className={styles['serv_banner']}>
          <img
            className={styles['serv_btn']}
            src="../img/faq/serviceButton.png"
            alt=""
          />
        </div>
        <div className={styles['serv_img_box']}>
          <img
            className={styles['serv_img1']}
            src="../img/faq/servicepaw1.png"
            alt=""
          />
          <img
            className={styles['serv_img2']}
            src="../img/faq/servicepaw2.png"
            alt=""
          />
          <img
            className={styles['serv_img3']}
            src="../img/faq/servicepaw3.png"
            alt=""
          />
          <img
            className={styles['serv_img4']}
            src="../img/faq/servicepaw4.png"
            alt=""
          />
          <img
            className={styles['serv_img5']}
            src="../img/faq/servicepaw3.png"
            alt=""
          />
        </div>
        <div className={styles['serv_boxa']}>
          <div className={styles['serv_boxb']}></div>
          <div className={styles['serv_card']}>
            <div className={styles['card']}>
              <img
                src="../img/faq/serviceCard1.jpg"
                className={styles['card_top']}
                alt="..."
              />
              <a href="#" className={styles['card_bottom']}>
                <h3 className={styles['card_title']}>汪汪領養特區</h3>
                <FaPaw className={styles['card_icons']} />
              </a>
            </div>
            <div className={styles['card']}>
              <img
                src="../img/faq/serviceCard2.jpg"
                className={styles['card_top']}
                alt="..."
              />
              <a href="#" className={styles['card_bottom']}>
                <h3 className={styles['card_title']}>喵喵領養特區</h3>
                <FaPaw className={styles['card_icons']} />
              </a>
            </div>
            <div className={styles['card']}>
              <img
                src="../img/faq/serviceCard3.jpg"
                className={styles['card_top']}
                alt="..."
              />
              <a href="#" className={styles['card_bottom']}>
                <h3 className={styles['card_title']}>寵物商城</h3>
                <FaPaw className={styles['card_icons']} />
              </a>
            </div>
            <div className={styles['card']}>
              <img
                src="../img/faq/serviceCard4.jpg"
                className={styles['card_top']}
                alt="..."
              />
              <a href="#" className={styles['card_bottom']}>
                <h3 className={styles['card_title']}>領養流程</h3>
                <FaPaw className={styles['card_icons']} />
              </a>
            </div>
            <div className={styles['card']}>
              <img
                src="../img/faq/serviceCard5.jpg"
                className={styles['card_top']}
                alt="..."
              />
              <a href="#" className={styles['card_bottom']}>
                <h3 className={styles['card_title']}>心理測驗</h3>
                <FaPaw className={styles['card_icons']} />
              </a>
            </div>
            <div className={styles['card']}>
              <img
                src="../img/faq/serviceCard6.jpg"
                className={styles['card_top']}
                alt="..."
              />
              <a href="#" className={styles['card_bottom']}>
                <h3 className={styles['card_title']}>追蹤日誌</h3>
                <FaPaw className={styles['card_icons']} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
