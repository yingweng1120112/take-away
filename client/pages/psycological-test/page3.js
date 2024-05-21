import React from 'react'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import styles from '@/styles/psycological-test/psycological-test_p3.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faDownload,
  faPen,
  faRightToBracket,
} from '@fortawesome/free-solid-svg-icons'

export default function Page3() {
  return (
    <>
      <>
        <Header />
        <div className={styles['bgcolor']}>
          <section
            className={`${styles['testresult']} ${styles['sectionstyle']}`}
          >
            <div className={styles['testtitle']}>
              <div>測</div>
              <div>驗</div>
              <div>結</div>
              <div>果</div>
            </div>
            <div>
              <div className={styles['result-left']}>
                <img src="/psycological-test/test-type1.jpg" alt="" />
              </div>
              <div className={styles['result-right']}>
                <div>您的最佳旅伴是…</div>
                <div>「樂天型」浪浪</div>
                <div>
                  樂天型的浪浪精力充沛，他們愛所有人、愛玩耍。不過這種性格的浪浪往往太過熱情，一些大型浪浪若沒有從小訓練很可能「沒禮貌」地跳上人家的身上表示歡迎。所以適當地教導他們冷靜、禮貌與服從你的命令很重要！
                </div>
                <div className={styles['graph']}>
                  <div className={styles['progress']}>
                    <div className={styles['barOverflow']}>
                      <div className={styles['bar']} />
                    </div>
                    <div className={styles['text']}>
                      <div>依賴性</div>
                      <span>10</span>
                    </div>
                  </div>
                  <div className={styles['progress']}>
                    <div className={styles['barOverflow']}>
                      <div className={styles['bar']} />
                    </div>
                    <div className={styles['text']}>
                      <div>焦慮性</div>
                      <span>30</span>
                    </div>
                  </div>
                  <div className={styles['progress']}>
                    <div className={styles['barOverflow']}>
                      <div className={styles['bar']} />
                    </div>
                    <div className={styles['text']}>
                      <div>主動性</div>
                      <span>70</span>
                    </div>
                  </div>
                  <div className={styles['progress']}>
                    <div className={styles['barOverflow']}>
                      <div className={styles['bar']} />
                    </div>
                    <div className={styles['text']}>
                      <div>穩定性</div>
                      <span>100</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles['button']}>
              <button>
                再測一次
                <FontAwesomeIcon icon={faPen} className={styles['iconstyle']} />
              </button>
              <button>
                保存結果
                <FontAwesomeIcon
                  icon={faDownload}
                  className={styles['iconstyle']}
                />
              </button>
              <button>
                前往專區
                <FontAwesomeIcon
                  icon={faRightToBracket}
                  className={styles['iconstyle']}
                />
              </button>
            </div>
          </section>
        </div>
        <Footer />
      </>
    </>
  )
}
