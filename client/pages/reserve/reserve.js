import React from 'react'
import styles from '@/styles/reserve/reserve.module.css'
// import Header from '../components/layout/header'
import { IoRemoveOutline } from "react-icons/io5";
export default function Reserve() {
  return (
    <>
    {/* <Header /> */}
      <section className={styles['reserve']}>
        <div className={styles['container']}>
          <img src={`/img/print.png`}
            alt=""
            className={styles['foot']}
          />
          <img
            src={`/img/print.png`}
            className={styles['print']}
          />
          <div className={styles['reserve-title']}>
            <h1 className={styles['reserve-title-h1']}>緣分</h1>
            <p className={styles['lap-top']}>
              _____________________________________________
            </p>
            <p className={styles['phone']}><IoRemoveOutline /><IoRemoveOutline /><IoRemoveOutline /><IoRemoveOutline /><IoRemoveOutline /><IoRemoveOutline /><IoRemoveOutline /><IoRemoveOutline /><IoRemoveOutline /><IoRemoveOutline /><IoRemoveOutline /><IoRemoveOutline /><IoRemoveOutline /></p>
          </div>
          <h5 className={styles['reserve-inner']}>
            這些孩子在等待著一些機會，
            <br />
            屬於牠們的機會可能比您想像中的少，
            <br />
            所以也期待您撥空來現場看看他們!
          </h5>
          <div className={styles['reserve-img']}>
            <img src={`/img/pet-info/10008/10008-5.jpg`} alt="" />
            <div className={styles['img-title']}>
              <h1 className={styles['img-h1']}>期待與您相見♡</h1>
              <p className={styles['img-p']}>
                _______________________________________
              </p>
            </div>
          </div>
          <div className={styles['reserve-form']}>
            <form
              className={styles['input-group']}
              name="email"
              type="text"
              id="email"
              placeholder="浪浪名稱"
            >
              <div className={styles['text-group']}>
                <h4 className={styles['input-h4']}>浪浪名稱</h4>
                <div className={styles['form-input']}>
                  <input
                    className={styles['input']}
                    placeholder=""
                    required=""
                    type="text"
                  />
                  <span className={styles['input-border']} />
                </div>
              </div>
              <div className={styles['text-group']}>
                <h4 className={styles['input-h4']}>預約人</h4>
                <div className={styles['form-input']}>
                  <input
                    className={styles['input']}
                    placeholder=""
                    required=""
                    type="text"
                  />
                  <span className={styles['input-border']} />
                </div>
              </div>
              <div className={styles['text-group']}>
                <h4 className={styles['input-h4']}>預約時間</h4>
                <div className={styles['form-input']}>
                  <input
                    className={styles['input']}
                    placeholder=""
                    required=""
                    type="date"
                  />
                  <span className={styles['input-border']} />
                </div>
              </div>
              <button className={styles['button']}>送出</button>
            </form>
          </div>
          <div className={styles['play']}>
            <h5 className={styles['play-title']}>他們也一定很期待能和你一同交流、認識與玩耍</h5>
          </div>
        </div>
      </section>
    </>
  )
}
