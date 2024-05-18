import React from 'react'
import styles from '@/styles/product/pet-mall.module.css'

export default function PetMall() {
  return (
    <>
      {/* banner區域 */}
      <div className={`${styles.banner} ${styles.someClassName}`}>
        <div className={styles.content}>
          <div className={styles['banner-item']}>
            <div className={styles['banner-left']}>
              <h1 className={styles['mall-title']}>
                <span className={styles.yellow}>給</span>毛小
                <span className={styles['light-blue']}>孩</span>們，
              </h1>
              <h1 className={styles['mall-title']}>
                一些<span className={styles['light-blue']}>新</span>奇體
                <span className={styles.yellow}>驗</span>
              </h1>
              <p className={styles['mall-info']}>Various rich products</p>
              <div className={`dropdown ${styles.dropdown}`}>
                <button
                  className={`btn btn-secondary dropdown-toggle ${styles.btn} ${styles.active} ${styles['btn-secondary']} ${styles['dropdown-toggle']}`}
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  SHOP NOW
                </button>
                <ul className={`dropdown-menu ${styles['dropdown-menu']}`}>
                  <li>
                    <a className={`dropdown-item ${styles['dropdown-item']}`} href="#feed-card">
                      寵物飼料
                    </a>
                  </li>
                  <li>
                    <a className={`dropdown-item ${styles['dropdown-item']}`} href="#can-card">
                      寵物罐頭
                    </a>
                  </li>
                  <li>
                    <a className={`dropdown-item ${styles['dropdown-item']}`} href="#necessities-card">
                      寵物用品
                    </a>
                  </li>
                  <li>
                    <a className={`dropdown-item ${styles['dropdown-item']}`} href="#section4">
                      寵物保健
                    </a>
                  </li>
                  <li>
                    <a className={`dropdown-item ${styles['dropdown-item']}`} href="#section4">
                      寵物零食
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles['banner-right']}>
              <p className={styles['company-name']}>袋走萌寵商城</p>
              <p className={styles['company-name']}>Take away mall</p>
            </div>
          </div>
        </div>
      </div>
      {/* 商品分類標題 */}
      <div className={styles.classificationimg}>
        <img className={styles.classification} src="/img/pet_mall/title-bg.png" alt="" />
      </div>
      {/* 寵物飼料卡片 */}
      <section id='feed-card' className={styles['feed-card']}>
        <div className={styles.content}>
          <div className={styles['mall-card']}>
            <div className={styles['mallcard-left']}>
              <div className={styles['mallcard-text']}>
                <h2 className={styles['mallcard-title']}>寵物飼料</h2>
                <p className={styles['smallcard-info']}>
                  選擇高品質的寵物飼料能夠確保寵物獲得充足的營養，提高其健康和生活品質。良好的飼料含有均衡的營養成分，有助於維持寵物的健康體態和活力，預防健康問題的發生，讓我們的毛孩能夠快樂地陪伴我們更長的時間。
                </p>
              </div>
              <button className={styles.cta}>
                <span className={styles['hover-underline-animation']}> Shop now </span>
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
      {/* 寵物罐頭卡片 */}
      <section id='can-card' className={styles['can-card']}>
        <div className={styles.content}>
          <div className={styles['mall-card']}>
            <div className={styles['mallcard-left']}>
              <div className={styles['mallcard-text']}>
                <h2 className={styles['mallcard-title']}>寵物罐頭</h2>
                <p className={styles['mallcard-info']}>
                  寵物罐頭提供方便的餵食方式，兼具均衡營養和口感豐富的特點，滿足寵物對美味的需求，同時確保其營養均衡。選擇高品質的罐頭可確保寵物獲得優質的食物，有助於維持其健康和活力，也能有效改善寵物挑食的毛病。
                </p>
              </div>
              <button className={styles.cta}>
                <span className={styles['hover-underline-animation']}> Shop now </span>
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
                <h2 className={styles['mallcard-title']}>寵物用品</h2>
                <p className={styles['mallcard-info']}>
                  購買寵物用品可提供寵物所需的舒適和安全環境，包括舒適的床、適當的玩具和清潔用品。這不僅提高了寵物的生活品質，還有助於建立與主人之間的親密關係，讓我們的毛孩感受到無限的愛和關懷。
                </p>
              </div>
              <button className={styles.cta}>
                <span className={styles['hover-underline-animation']}> Shop now </span>
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
            <div className={styles['mallcard-right']}>
              <img src="\img\pet_mall\necessities-card.jpg" alt="" />
            </div>
          </div>
        </div>
      </section>
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
                      <h2 className={styles['mallcard-title']}>寵物保健</h2>
                      <p className={styles['mallcard-info']}>
                      選購寵物保健品是照顧寵物健康的重要一環。產品提供豐富營養和維生素，有助於維持寵物的免疫、消化系統和皮膚健康。定期給予寵物保健品以預防疾病，讓您的毛孩享受健康照顧。
                      </p>
                    </div>
                    <button className={styles.cta}>
                      <span className={styles['hover-underline-animation']}>
                        {' '}
                        Shop now{' '}
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
                {/* 寵物零食 */}
                <div className={styles['mall-card2']}>
                  <div className={styles['mallcard-top']}>
                    <img src="\img\pet_mall\snack-card.jpg" alt="" />
                  </div>
                  <div className={styles['mallcard-button']}>
                    <div className={styles['mallcard-text']}>
                      <h2 className={styles['mallcard-title']}>寵物零食</h2>
                      <p className={styles['mallcard-info']}>
                        購買寵物零食不僅是犒賞寵物的好方法，更是建立與寵物之間親密連結的途徑。定期給予零食可以訓練寵物的良好行為，增進其學習能力和服從度。選擇高品質的零食維持寵物健康。
                      </p>
                    </div>
                    <button className={styles.cta}>
                      <span className={styles['hover-underline-animation']}>
                        {' '}
                        Shop now{' '}
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
    </>
  )
}
