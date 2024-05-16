import React from 'react'
import styles from '@/styles/psycological-test/psycological-test_p1.module.css'

export default function Page1() {
  return (
    <>
      <header />
      <section className={`${styles['sectionstyle']} ${styles['hearttest']}`}>
        <div className={styles['testtitle']}>
          <div>心</div>
          <div>理</div>
          <div>測</div>
          <div>驗</div>
        </div>
        <div className={styles['testcontent']}>
          <div>
            人們總是希望獲得魔法，庸庸碌碌，追求無法觸及的願望。但其實你也可以成為貓貓狗狗們的大魔法師，讓牠們的一生獲得如夢似幻的幸福咒語。動物陪伴可以為我們帶來無窮的喜悅和滿足感。而領養動物不僅是對它們生命的一種拯救，也是自我心靈的一種滋養，無論是渴望一隻忠誠的狗狗或一隻溫柔的貓咪。你具備何種特質呢？適合與哪些貓貓狗狗相伴呢？
          </div>
          <div>
            <input type="text" placeholder="請輸入名字" />
          </div>
          <div>
            <button>開始測驗</button>
          </div>
        </div>
      </section>
      <footer />
    </>
  )
}
