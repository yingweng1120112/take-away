import React from 'react'
import styles from '@/styles/location.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHandPointer} from '@fortawesome/free-solid-svg-icons'
export default function Location() {
  return (
    <>
      <section className={styles['location']}>
        <div className={styles['container']}>
          <img src={`/img/foot.png`} alt="" className={styles['foot']} />
          <img src={`/img/foot.png`} alt="" className={styles['foot']} />
          <div className={styles['space-left']}>
            <img
              src={`/img/location/petlogo.png`}
              alt=""
              className={styles['place-img']}
            />
          </div>
          <div className={styles['space-right']}>
            <div className={styles['space']}>
              <h1>關於我們</h1>
              <p>
                我們的流浪之家致力於提供基本生活支援，一個團隊聚集，心懷同一願景：建立一個流浪之家，幫助無家可歸者。群策群力下，他們籌措資金、尋找場地，終於在短短幾個月內建成了一座避風港。流浪之家不僅提供臨時住所和食物，更提供工作培訓和心理支持，讓無家可歸者重拾自信、尋找生活方向。開幕後，社區響應熱烈，紛紛前來支持。流浪之家成為了社區的中心，促進著社會共融和理解。
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className={styles['save']}>
        <div className={styles['container']}>
          <img src={`/img/foot.png`} alt="" className={styles['foot']} />
          <img src={`/img/foot.png`} alt="" className={styles['foot']} />
          <div className={styles['space-right']}>
            <div className={styles['start']}>
              <h1>成立宗旨</h1>
              <p>
                為了提供流浪者一個安全、溫暖和支持性的環境，幫助他們重建生活。我們的使命是確保每個人都受到尊重、關愛和支持，並提供他們所需的基本生活必需品、心理健康支持、就業援助和社區聯繫服務，以幫助他們可重新融入社會。我们致力於打造一個包容、溫馨的環境，讓流浪者感受到他們的價值和重要性，幫助他們重建自己的生活，並實現他們的夢想和目標。
              </p>
            </div>
          </div>
          <div className={styles['space-left-two']}>
            <img
              src={`/img/location/saveimg.jpg`}
              alt=""
              className={styles['place-img']}
            />
          </div>
        </div>
      </section>
      <section className={styles['address']}>
        <div className={styles['container']}>
          <img src={`/img/print.png`} alt="" className={styles['print']} />
          <img src={`/img/foot.png`} alt="" className={styles['foot']} />
          <div className={styles['address-left']}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.9585094222593!2d120.22379571188887!3d23.025295579085018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e771f2995cba5%3A0x3bfd449f1e46ffef!2z5Y2X6Ie656eR5oqA5aSn5a24!5e0!3m2!1szh-TW!2stw!4v1713363284909!5m2!1szh-TW!2stw"
              width={800}
              height={400}
              style={{ border: 0, borderRadius: '5%' }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google 地图"
            />
          </div>
          <div className={styles['address-right']}>
            <h1> 聯繫我們 </h1>
            <div className={styles['tainan']}>
              <h2>臺南總部 </h2>
              <h4>台南市東區裕農路375號</h4>
              <div className={styles['tainan-p']}>
                <p>TEL:(06)236-1111</p>
                <p>FAX:(06)236-1111</p>
              </div>
              <br />
              <div className={styles['socail']}>
                <a>
                  <img src={`/img/location/facebook.jpg`} alt="" />
                </a>
                <a>
                  <img src={`/img/location/ig.jpg`} alt="" />
                </a>
                <a>
                  <img src={`/img/location/gmail.jpg`} alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles['fond-us']}>
        <div className={styles['container']}>
          <img src={`/img/foot.png`} alt="" className={styles['foot']} />
          <img src={`/img/foot.png`} alt="" className={styles['foot']} />
          <img src={`/img/foot.png`} alt="" className={styles['foot']} />
          <div className={styles['find-us']}>
            <div className={styles['single-blog-area']}>
              <div className={styles['single-blog-thumbnail']}>
                <img src={`/img/location/location1.jpg`} alt="" />
              </div>
              <div className={styles['single-blog-content']}>
                <h4>臺中分布</h4>
                <br />
                <h5>臺中市北區中清路一段79號</h5>
                <br />
                <p>TEL:(05)236-3333</p>
                <p>FAX:(05)236-3333</p>
              </div>
            </div>
            <div className={styles['single-blog-area']}>
              <div className={styles['single-blog-thumbnail']}>
                <img src={`/img/location/location1.jpg`} alt="" />
              </div>
              <div className={styles['single-blog-content']}>
                <h4>高雄分布</h4>
                <br />
                <h5>高雄市苓雅區光明街79號</h5>
                <br />
                <p>TEL:(07)236-4444</p>
                <p>FAX:(07)236-4444</p>
              </div>
            </div>
            <div className={styles['single-blog-area']}>
              <div className={styles['single-blog-thumbnail']}>
                <img src={`/img/location/location2.jpg`} alt="" />
              </div>
              <div className={styles['single-blog-content']}>
                <h4>新北分布</h4>
                <br />
                <h5>新北市板橋區忠孝路63號</h5>
                <br />
                <p>TEL:(03)581-1111</p>
                <p>FAX:(03)581-1111</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles['fond-two']}>
        <div className={styles['container']}>
          <img src={`/img/foot.png`} alt="" className={styles['foot']} />
          <img src={`/img/foot.png`} alt="" className={styles['foot']} />
          <div className={styles['find-two']}>
            <div className={styles['single-blog-area']}>
              <div className={styles['single-blog-thumbnail']}>
                <img src={`/img/location/location2.jpg`} alt="" />
              </div>
              <div className={styles['single-blog-content']}>
                <h4>臺中分布</h4>
                <br />
                <h5>臺中市北區中清路一段79號</h5>
                <br />
                <p>TEL:(05)236-3333</p>
                <p>FAX:(05)236-3333</p>
              </div>
            </div>
            <div className={styles['single-blog-area']}>
              <div className={styles['single-blog-thumbnail']}>
                <img src={`/img/location/location2.jpg`} alt="" />
              </div>
              <div className={styles['single-blog-content']}>
                <h4>臺北分布</h4>
                <br />
                <h5>臺北市信義區信義路63號</h5>
                <br />
                <p>TEL:(02)581-1111</p>
                <p>FAX:(02)581-1111</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles['carousel']}>
        <div className={styles['swiper']}>
          <div className={styles['swiper-slide']}>
            <img src={`/img/location/adout.jpg`} alt="" />
            <div className={styles['adopt-title']}>
              <h1 className={styles['heart']}>心動了嗎?</h1>
              <h1 className={styles['ml3']}>快來袋走我們吧~</h1>
            </div>
            <button className={styles['btn']}>
              <a href="">領養專區</a>
              <a className={styles['icon']}>
              <FontAwesomeIcon icon={faHandPointer} />
              </a>
            </button>
          </div>
        </div>
      </section>
    </>
  )
}