import React from 'react'
import styles from '@/styles/reserve.module.css'

export default function Reserve() {
  return (
    <>
      <section className={styles['reserve']}>
        <div className={styles['container']}>
          <img src={`/img/foot.png`}
            alt=""
            className={styles['foot']}
          />
          <img
            src={`/img/print.png`}
            className={styles['print']}
          />
          <div className={styles['reserve-title']}>
            <h1>緣分</h1>
            <p className={styles['lap-top']}>
              _____________________________________________
            </p>
            <p className={styles['phone']}>______________________________</p>
          </div>
          <h5 className={styles['reserve-inner']}>
            這些孩子在等待著一些機會，
            <br />
            屬於牠們的機會可能比您想像中的少，
            <br />
            所以也期待您撥空來現場看看他們!
          </h5>
          <div className={styles['reserve-img']}>
            <img src={`/img/Image.jpg`} alt="" />
            <div className={styles['img-title']}>
              <h1 className={styles['img-h1']}>期待與您相見♡</h1>
              <p className={styles['img-p']}>
                ___________________________________
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
                <h4>浪浪名稱</h4>
                <div className={styles['form-input']}>
                  <input
                    className={styles['input']}
                    placeholder=""
                    required=""
                    type="text"
                  />
                  <span className={styles['input-border']} />
                </div>
                <hr />
              </div>
              <div className={styles['text-group']}>
                <h4>預約人</h4>
                <div className={styles['form-input']}>
                  <input
                    className={styles['input']}
                    placeholder=""
                    required=""
                    type="text"
                  />
                  <span className={styles['input-border']} />
                </div>
                <hr />
              </div>
              <div className={styles['text-group']}>
                <h4>預約時間</h4>
                <div className={styles['form-input']}>
                  <input
                    className={styles['input']}
                    placeholder=""
                    required=""
                    type="date"
                  />
                  <span className={styles['input-border']} />
                </div>
                <hr />
              </div>
              <button>BUTTON</button>
            </form>
          </div>
          <div className={styles['play']}>
            <h5>他們也一定很期待能和你一同交流、認識與玩耍</h5>
          </div>
        </div>
      </section>
    </>
  )
}
