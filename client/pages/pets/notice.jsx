import React from 'react'
import styles from '@/styles/notice.module.css'

export default function Notice() {
  return (
    <>
      <div className={styles['commendbody']}>
        <section className={`${styles['title']} ${styles['section']}`}>
          <h1>寵物認養流程</h1>
          <h2>認養須知</h2>
          <hr />
          <h1 className={styles['title-secondary']}>Adopt, Don't Shop!</h1>
          <img src="../img/notice/notice_sleeping_cat.png" alt="" />
        </section>

        <section className={`${styles['age']} ${styles['section']}`}>
          <img src="../img/notice/notice_gaming_cat.png" alt="" />
          <h2>
            年滿18歲 <br className={styles['br-mobile']} />
            即攜帶身分證
          </h2>
        </section>

        <section className={`${styles['choose']} ${styles['section']}`}>
          <div>
            <h2>
              挑選適合本身
              <br className={styles['br-mobile']} />
              飼養之收容動物
            </h2>
            <ul>
              <li>
                認養人選定動物後，由所方人員與認養人進行訪談評估並解說認養流程，確認後再予以辦理認養手續
              </li>
              <li>如欲認養動物已達公告日期或幼齡者可先行認養</li>
              <li>
                如欲認養動物未達公告日期，則先行至動物之家現場登記預約認養，否則視同預約放棄
              </li>
            </ul>
          </div>
          <img src="../img/notice/notice_jumpimg_cat.png" alt="" />
        </section>

        <section className={`${styles['docs']} ${styles['section']}`}>
          <img src="../img/notice/notice_computer_cat.png" alt="" />
          <h2>
            填寫
            <br className={styles['br-mobile']} />
            認養申請書
            <br className={styles['br-block']} />
            繳交
            <br className={styles['br-mobile']} />
            身分證明文件
          </h2>
        </section>

        <section className={`${styles['fix']} ${styles['section']}`}>
          <div>
            <h2>免費犬貓絕育</h2>
            <ul>
              <li>
                如認養時因年幼或其他因素，未能絕育者，先行認養，等犬七合一預防注射完成免疫後，健康飼養良好後，再帶至動物之家安排絕育手術
              </li>
              <li>
                如認養時可絕育者，先行預約，由動物之家安排，時間絕育後再進行認養
              </li>
            </ul>
          </div>
          <img src="../img/notice/notice_eating_cat.png" alt="" />
        </section>

        <section className={`${styles['free']} ${styles['section']}`}>
          <img src="../img/notice/notice_sofa_shark.png" alt="" />
          <h2>
            絕育費用：
            <br className={styles['br-mobile']} />
            免費 0 元 !
          </h2>
        </section>

        <img src="../img/paws.png" className={styles['paws1']} alt="" />
        <img src="../img/paws.png" className={styles['paws2']} alt="" />

        <div className={styles['card']}>
          <div className={styles['card-img']}>
            <img src="/img/pet-info/10008/10008-1.jpg" alt="" />
          </div>
          <div className={styles['pet-name']}>
            <span>卍煞氣A歐歐乂</span>
            <p>歐告</p>
            <div className={styles['pet-desc']}>
              <span>今年約莫3歲</span>
              <img src="/img/icon_boy.png" alt="" />
            </div>
          </div>
          <button className={styles['cta']}>
            <span className={styles['hover-underline-animation']}>
              來看看我
            </span>
            <svg
              id="arrow-horizontal"
              xmlns="http://www.w3.org/2000/svg"
              width={30}
              height={10}
              viewBox="0 0 46 16"
            >
              <path
                id="Path_10"
                data-name="Path 10"
                d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                transform="translate(30)"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  )
}
