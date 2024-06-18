import React from 'react'
import styles from '@/styles/location/location.module.css'
import banner from '@/styles/location/banner.module.css'
import { GoChevronRight } from "react-icons/go";

import { faHandPointer } from '@fortawesome/free-solid-svg-icons'
import Header from '../../components/layout/header'
import Footer from '@/components/layout/footer'
export default function Location() {
  return (
    <>
      <Header />
      <div
        className={banner['banner']}
        style={{ backgroundImage: 'url(/img/location/location.jpg)' }}
      >
        <div className={banner['left']}>
          <p className={banner['menu-a']}>About Us</p>
          <p className={banner['menu-b']}>關於我們</p>
        </div>
        <div className={banner['middle']}>
          <div className={`${banner['accordion']}`}>
            <div className={`accordion-button ${banner['accordion-button']}`}>
              {/* span為pc版文字，p為phone版文字 */}
              <span className={banner['middle-page-title']}>關於我們</span>
              <span>about us</span>
            </div>
          </div>
        </div>
      </div>
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
                我們的流浪之家致力於提供基本生活支援，一個團隊聚集，心懷同一願景：建立一個流浪之家，幫助無家可歸者。
                <br />
                群策群力下，他們籌措資金、尋找場地，終於在短短幾個月內建成了一座避風港。
                <br />
                流浪之家不僅提供臨時住所和食物，更提供工作培訓和心理支持，讓無家可歸者重拾自信、尋找生活方向。
                <br />
                流浪之家成為了社區的中心，促進著社會共融和理解。
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
                為了提供流浪者一個安全、溫暖和支持性的環境，幫助他們重建生活。
                <br />
                我們的使命是確保每個人都受到尊重、關愛和支持，並提供他們所需的基本生活必需品、心理健康支持、就業援助和社區聯繫服務，以幫助他們可重新融入社會。
                <br />
                我们致力於打造一個包容、溫馨的環境，讓流浪者感受到他們的價值和重要性，幫助他們重建自己的生活，並實現他們的夢想和目標。
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
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7345.618434845458!2d120.19920548696741!3d22.994042025303322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e77bed08fea73%3A0xad019f26d842dd8c!2z56S-5ZyY5rOV5Lq65Y-w5Y2X5biC5rWB5rWq5YuV54mp5oSb6K235Y2U5pyD!5e0!3m2!1szh-TW!2stw!4v1717470941475!5m2!1szh-TW!2stw"  width={800}
              height={400}
              style={{ border: 0, borderRadius: '5%' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="TAKE_AWAY"/>
          </div>
          <div className={styles['address-right']}>
            <h1 style={{ fontWeight: 'bolder' }}>聯繫我們</h1>
            <div className={styles['tainan']}>
              <h2>臺南總部 </h2>
              <h4>台南市東區裕農路375號</h4>
              <p>TEL:(06)236-1111</p>
              <p>FAX:(06)236-1111</p>
              <br style={{display:'none' }}/>
              <div className={styles['socail']}>
                <a  href="https://zh-tw.facebook.com/">
                  <img src={`/img/location/facebook.png`} alt=""/>
                </a>
                <a href="https://www.instagram.com/">
                  <img src={`/img/location/ig.png`} alt="" />
                </a>
                <a href="https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fmail.google.com%2Fmail%2F%3Fhl%3Dzh-TW&emr=1&hl=zh-TW&ifkv=AS5LTAT7iCtkk_01_1GKGhgosD28tSC2AjFgDXTbtZ72B_U9rpgiPFde5QQCWoR06ChD12IogQuKpw&ltmpl=default&ltmplcache=2&osid=1&passive=true&rm=false&scc=1&service=mail&ss=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S-1791277697%3A1717470844394857&ddm=0">
                  <img src={`/img/location/gmail.png`} alt="" />
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
                <h4 className={styles['place-title']}>臺北分布</h4>
              <div className={styles['single-blog-content']}>
                <p>臺北市信義區信義路63號</p>
                <p>TEL:(02)581-1111</p>
                <p>FAX:(02)581-1111</p>
              </div>
            </div>
            <div className={styles['single-blog-area']}>
              <div className={styles['single-blog-thumbnail']}>
                <img src={`/img/location/location2.jpg`} alt="" />
              </div>
                <h4 className={styles['place-title']}>新北分布</h4>
              <div className={styles['single-blog-content']}>
                <p>新北市板橋區忠孝路忠義巷9弄63號</p>
                <p>TEL:(03)236-3333</p>
                <p>FAX:(03)236-3333</p>
              </div>
            </div>
            <div className={styles['single-blog-area']}>
              <div className={styles['single-blog-thumbnail']}>
                <img src={`/img/location/location3.jpg`} alt="" />
              </div>
                <h4 className={styles['place-title']}>臺中分布</h4>
              <div className={styles['single-blog-content']}>
                <p>臺中市北區中清路一段79號</p>
                <p>TEL:(05)236-3333</p>
                <p>FAX:(05)236-3333</p>
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
                <img src={`/img/location/location4.jpg`} alt="" />
              </div>
              <div className={styles['single-blog-content']}>
                <h4>高雄分布</h4>
                <p>高雄市苓雅區光明街79號</p>
                <p>TEL:(07)236-3333</p>
                <p>FAX:(07)236-3333</p>
              </div>
            </div>
            <div className={styles['single-blog-area']}>
              <div className={styles['single-blog-thumbnail']}>
                <img src={`/img/location/location5.jpg`} alt="" />
              </div>
              <div className={styles['single-blog-content']}>
                <h4>台東分布</h4>
                <p>台東縣善化市光復路230號</p>
                <p>TEL:(09)236-3333</p>
                <p>FAX:(09)236-3333</p>
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
              <a href="http://localhost:3000/pets">領養專區</a>
              <a className={styles['icon']}>
              <GoChevronRight />
              </a>
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
