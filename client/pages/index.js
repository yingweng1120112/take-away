import React from 'react'
import styles from '@/styles/product/pet-mall.module.css'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
// banner輪播元件
import Swiper from '@/components/swiper/indexSwiper'
// 推薦浪浪輪播元件
import MarqueePets from '@/components/marquee-pets/marquee-pets'
// 產品輪播元件
import ProductCarousel from '@/components/shopping-cart/carousel'
import Link from 'next/link'

export default function PetMall() {
  return (
    <>
    <Header />
      {/* banner區域 */}
      <div className={styles['inswipper']}><Swiper /></div>
      <div
        className="container m-0 d-flex justify-content-center"
        id="custom-cards"
      ></div>
      {/* 服務項目標題 */}
      <div className={styles.classificationimg}>
        <img className={styles.classification} src="/img/pet_mall/service-items.png" alt="" />
      </div>
      {/* 領養特區卡片 */}
      <section id='feed-card' className={styles['feed-card']}>
        <div className={styles.content}>
          <div className={styles['mall-card']}>
            <div className={styles['mallcard-left']}>
              <div className={styles['mallcard-text']}>
                <h2 className={styles['mallcard-title']}>領養特區</h2>
                <p className={styles['mallcard-info']}>
                我們相信每個生命都值得被珍惜，因此提供一個可靠、安全的環境，讓愛心人士能夠領養到健康、友善的寵物。我們的動物均經過嚴格的健康檢查和疫苗接種，確保牠們能夠健康地融入新家庭。通過領養，我們不僅給予動物第二次生命的機會，也倡導尊重生命、愛護動物的理念。加入我們，一起為動物創造美好的未來，讓更多的毛小孩找到愛的歸宿。
                </p>
              </div>
              <Link href="http://localhost:3000/pets">
              <button className={styles.cta} >
                <span className={styles['hover-underline-animation']}> 前往觀看 </span>
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
              </Link>
            </div>
            <div className={styles['mallcard-right']}>
              <img src="\img\pet_mall\beef-card.jpg" alt="" />
            </div>
          </div>
        </div>
        <img className={styles['dog-palm']} src="\img\pet_mall\dog-palm.svg" alt="" />
        <img  className={styles['dog-palm2']} src="\img\pet_mall\dog-palm.svg" alt="" />
        <img  className={styles['dog-palm3']} src="\img\pet_mall\dog-palm.svg" alt="" />
        <img  className={styles['dog-palm5']} src="\img\pet_mall\dog-palm2.svg" alt="" />
        <img  className={styles['dog-palm6']} src="\img\pet_mall\dog-palm2.svg" alt="" />
      </section>
      {/* 寵物商城卡片 */}
      <section id='can-card' className={styles['can-card']}>
        <div className={styles.content}>
          <div className={styles['mall-card']}>
            <div className={styles['mallcard-left']}>
              <div className={styles['mallcard-text']}>
                <h2 className={styles['mallcard-title']}>寵物商城</h2>
                <p className={styles['mallcard-info']}>
                寵物商城是您一站式購買寵物用品的理想平台。我們提供各類高品質的寵物產品，包括食品、玩具、健康保健品、清潔護理用品等，滿足您愛寵的多樣需求。我們致力於提供便捷的購物體驗和優質的客戶服務，確保每一位客戶和他們的寵物都能享受最好的產品和服務。讓我們成為您和愛寵的最佳夥伴。
                </p>
              </div>
              <Link href="http://localhost:3000/product/menu">
              <button className={styles.cta}>
                <span className={styles['hover-underline-animation']}> 前往購物 </span>
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
              </Link>
            </div>
            <div className={styles['mallcard-right']}>
              <img src="\img\pet_mall\can-card.jpg" alt="" />
            </div>
          </div>
        </div>
      </section>
      {/* 寵物用品卡片 */}
      <section id='necessities-card' className={styles['necessities-card']}>
        <div className={styles.content}>
          <div className={styles['mall-card']}>
            <div className={styles['mallcard-left']}>
              <div className={styles['mallcard-text']}>
                <h2 className={styles['mallcard-title']}>領養流程</h2>
                <p className={styles['mallcard-info']}>
                領養過程中，記得給予寵物充分的愛和關懷，並且給予牠們足夠的時間適應新環境。領養不僅是給予無家可歸的動物一個溫暖的家，也是一個對待生命的承諾，希望您能夠與您的新寵物創造美好的回憶並建立深厚的情感連結。
                </p>
              </div>
              <Link href="http://localhost:3000/pets/notice">
              <button className={styles.cta}>
                <span className={styles['hover-underline-animation']}> 前往了解 </span>
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
              </Link>
            </div>
            <div className={styles['mallcard-right']}>
              <img src="\img\pet_mall\necessities-card.jpg" alt="" />
            </div>
          </div>
        </div>
      </section>
      {/* 推薦浪浪標題 */}
      <div className={styles.classificationimg}>
        <img className={styles.classification} src="/img/pet_mall/recommended-pets.png" alt="" />
      </div>
      {/*  推薦浪浪輪播 */}
      <MarqueePets />
      {/* section第4區 */}
      <section id='section4' className={styles.section4}>
        <img src="\img\pet_mall\section4-bg1.jpg" alt="" />
        <div className={styles['section4-content']}>
          <div className={styles['section4-img-text']}>
            <div className={styles['section4-text-left']}>
              <h1 className={styles['section4-text1']}>與寵物同行</h1>
              <h1 className={styles['section4-text2']}>開啟快樂旅程</h1>
            </div>
            <div className={styles['section4-text-right']}>
              <div className={styles['right-decorative-text']}>
                <h1 className={styles['section4-text3']}>Life</h1>
                <h1 className={styles['section4-text4']}>starts with raising pets</h1>
              </div>
              <div className={styles['section4-card']}>
                {/* 寵物保健 */}
                <div className={styles['mall-card2']}>
                  <div className={styles['mallcard-top']}>
                    <img src="\img\pet_mall\health-care-card.jpg" alt="" />
                  </div>
                  <div className={styles['mallcard-button']}>
                    <div className={styles['mallcard-text']}>
                      <h2 className={styles['mallcard-title']}>追蹤日誌</h2>
                      <p className={styles['mallcard-info']}>
                      追蹤日誌是一個讓寵物領養後的主人分享與毛孩生活趣事的天地。在這裡，您可以記錄您和您的寵物之間的點滴，分享有趣的瞬間、溫馨的時刻，以及您的成長與體會。您可以寫下每天的日常，包括寵物的喜好、行為、健康狀況等，並且與其他寵物愛好者互動交流。
                      </p>
                    </div>
                    <Link href="http://localhost:3000/petDiary">
                    <button className={styles.cta}>
                      <span className={styles['hover-underline-animation']}>
                        {' '}
                        前往日誌{' '}
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
                    </Link>
                  </div>
                </div>
                {/* 寵物零食 */}
                <div className={styles['mall-card2']}>
                  <div className={styles['mallcard-top']}>
                    <img src="\img\pet_mall\snack-card.jpg" alt="" />
                  </div>
                  <div className={styles['mallcard-button']}>
                    <div className={styles['mallcard-text']}>
                      <h2 className={styles['mallcard-title']}>心理測驗</h2>
                      <p className={styles['mallcard-info']}>
                      透過心理測驗來推薦適合領養的貓狗是一個貼心且有意義的方式。這項測驗將根據您的生活方式、家庭環境以及對寵物的期望，評估您與潛在貓狗之間的契合度。我們將問及您對於寵物的時間投入、活動水平、性格偏好等方面的問題，以確保您能夠找到一隻與您個性相符的貓狗。
                      </p>
                    </div>
                    <Link href="http://localhost:3000/pets/psycological-test/page1">
                    <button className={styles.cta}>
                      <span className={styles['hover-underline-animation']}>
                        {' '}
                        前往測驗{' '}
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
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img className={styles['section4-bg2']} src="\img\pet_mall\section4-bg2.svg" alt="" />
        <img className={styles['dog-palm4']} src="\img\pet_mall\dog-palm.svg" alt="" />
        <img
          className={styles['dog-footprints']}
          src="../images/dog-footprints.svg"
          alt=""
        />
      </section>
      {/* 產品推薦輪播 */}
      <div className="commend">
        <h3 className="commendtitle">產品推薦</h3>
        <ProductCarousel />
      </div>
      <Footer />
      <style global jsx>
        {`
          .container {
            height: 50%;
            width: 100%;
          }
          .commend {
            background-image: url(/shopping-cart/commendbg.png);
            background-size: contain;
            margin: 0;
            margin-top: 100px;
            height: 37rem;
          }
          .commendtitle {
            padding-top: 35px;
            text-align: center;
            letter-spacing: 10px;
            color: var(--deep-gray);
            font-weight: 600;
          }

          @media screen and (max-width: 414px) {
            .commend {
              height: 25rem;
            }
          }
        `}
      </style>
    </>
  )
}
