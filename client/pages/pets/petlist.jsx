import React from 'react'
import styles from '@/styles/pets/petList.module.css'
import { FaHeart } from 'react-icons/fa6'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

export default function PetList() {
  return (
    <>
      <div className={styles['commendbody']}>
        <section className={styles['title']}>
          <h1>
            不只是給他們一個家
            <br className={styles['br-block']} />
            或許可以陪伴他們一起長大
          </h1>
        </section>

        <section className={styles['pet-card']}>
          <div className={styles['card']}>
            <div className={styles['card-img']}>
              <p className={styles['state']}>歡迎帶我回家</p>
              <img src="/img/pet-info/10008/10008-1.jpg" alt="" />
              <FaHeart className={styles['favorite']} />
            </div>
            <div className={styles['pet-name']}>
              <span>卍煞氣A歐歐乂</span>
              <p>歐告</p>
              <div className={styles['pet-desc']}>
                <span>今年約莫3歲</span>
                <img src="/img/pets/icon_boy.png" alt="" />
              </div>
            </div>
          </div>
          <div className={styles['card']}>
            <div className={styles['card-img']}>
              <p className={styles['state']}>歡迎帶我回家</p>
              <img src="/img/pet-info/10008/10008-1.jpg" alt="" />
              <FaHeart className={styles['favorite']} />
            </div>
            <div className={styles['pet-name']}>
              <span>卍煞氣A歐歐乂</span>
              <p>歐告</p>
              <div className={styles['pet-desc']}>
                <span>今年約莫3歲</span>
                <img src="/img/pets/icon_boy.png" alt="" />
              </div>
            </div>
          </div>
          <div className={styles['card']}>
            <div className={styles['card-img']}>
              <p className={styles['state']}>歡迎帶我回家</p>
              <img src="/img/pet-info/10008/10008-1.jpg" alt="" />
              <FaHeart className={styles['favorite']} />
            </div>
            <div className={styles['pet-name']}>
              <span>卍煞氣A歐歐乂</span>
              <p>歐告</p>
              <div className={styles['pet-desc']}>
                <span>今年約莫3歲</span>
                <img src="/img/pets/icon_boy.png" alt="" />
              </div>
            </div>
          </div>
          <div className={styles['card']}>
            <div className={styles['card-img']}>
              <p className={styles['state']}>歡迎帶我回家</p>
              <img src="/img/pet-info/10008/10008-1.jpg" alt="" />
              <FaHeart className={styles['favorite']} />
            </div>
            <div className={styles['pet-name']}>
              <span>卍煞氣A歐歐乂</span>
              <p>歐告</p>
              <div className={styles['pet-desc']}>
                <span>今年約莫3歲</span>
                <img src="/img/pets/icon_boy.png" alt="" />
              </div>
            </div>
          </div>
          <div className={styles['card']}>
            <div className={styles['card-img']}>
              <p className={styles['state']}>歡迎帶我回家</p>
              <img src="/img/pet-info/10008/10008-1.jpg" alt="" />
              <FaHeart className={styles['favorite']} />
            </div>
            <div className={styles['pet-name']}>
              <span>卍煞氣A歐歐乂</span>
              <p>歐告</p>
              <div className={styles['pet-desc']}>
                <span>今年約莫3歲</span>
                <img src="/img/pets/icon_boy.png" alt="" />
              </div>
            </div>
          </div>
          <div className={styles['card']}>
            <div className={styles['card-img']}>
              <p className={styles['state']}>歡迎帶我回家</p>
              <img src="/img/pet-info/10008/10008-1.jpg" alt="" />
              <FaHeart className={styles['favorite']} />
            </div>
            <div className={styles['pet-name']}>
              <span>卍煞氣A歐歐乂</span>
              <p>歐告</p>
              <div className={styles['pet-desc']}>
                <span>今年約莫3歲</span>
                <img src="/img/pets/icon_boy.png" alt="" />
              </div>
            </div>
          </div>
          <div className={styles['card']}>
            <div className={styles['card-img']}>
              <p className={styles['state']}>歡迎帶我回家</p>
              <img src="/img/pet-info/10008/10008-1.jpg" alt="" />
              <FaHeart className={styles['favorite']} />
            </div>
            <div className={styles['pet-name']}>
              <span>卍煞氣A歐歐乂</span>
              <p>歐告</p>
              <div className={styles['pet-desc']}>
                <span>今年約莫3歲</span>
                <img src="/img/pets/icon_boy.png" alt="" />
              </div>
            </div>
          </div>
          <div className={styles['card']}>
            <div className={styles['card-img']}>
              <p className={styles['state']}>歡迎帶我回家</p>
              <img src="/img/pet-info/10008/10008-1.jpg" alt="" />
              <FaHeart className={styles['favorite']} />
            </div>
            <div className={styles['pet-name']}>
              <span>卍煞氣A歐歐乂</span>
              <p>歐告</p>
              <div className={styles['pet-desc']}>
                <span>今年約莫3歲</span>
                <img src="/img/pets/icon_boy.png" alt="" />
              </div>
            </div>
          </div>
          <div className={styles['card']}>
            <div className={styles['card-img']}>
              <p className={styles['state']}>歡迎帶我回家</p>
              <img src="/img/pet-info/10008/10008-1.jpg" alt="" />
              <FaHeart className={styles['favorite']} />
            </div>
            <div className={styles['pet-name']}>
              <span>卍煞氣A歐歐乂</span>
              <p>歐告</p>
              <div className={styles['pet-desc']}>
                <span>今年約莫3歲</span>
                <img src="/img/pets/icon_boy.png" alt="" />
              </div>
            </div>
          </div>
        </section>

        {/* TODO: load商品 */}
        <section className={styles['wp-pagenavi']}>
          <span>
            <a
              className={`${styles['page']} ${styles['previouspostslink']}`}
              href="#"
            >
              <IoIosArrowBack />
            </a>
          </span>
          <span>
            <a className={styles['page']} href="#">
              1
            </a>
          </span>
          <span>
            <a className={styles['page']} href="#">
              2
            </a>
          </span>
          <span className={styles['current']}>3</span>
          <span>
            <a className={styles['page']} href="#">
              4
            </a>
          </span>
          <span>
            <a className={styles['page']} href="#">
              5
            </a>
          </span>
          <span>
            <a
              className={`${styles['page']} ${styles['nextpostslink']}`}
              href="#"
            >
              <IoIosArrowForward />
            </a>
          </span>
        </section>

        <section className={styles['ending']}>
          <h1>
            聽說好像很好玩
            <br />
            一起看看那些
            <br className={styles['br-none']} />
            回家的朋友們都在幹嘛
          </h1>
          <button className={styles.cta}>
            <span className={styles['hover-underline-animation']}>
              {' '}
              來去看看{' '}
            </span>
            <svg
              id="arrow-horizontal"
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="10"
              viewBox="0 0 46 16"
            >
              <path
                id="Path_10"
                data-name="Path 10"
                d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                transform="translate(30)"
              ></path>
            </svg>
          </button>
        </section>

        <section className={styles['marquee_shop']}>
          <div
            className={`${styles.marquee} ${styles['marquee--hover-pause']} ${styles['enable-animation']}`}
          >
            <ul className={styles['marquee__content']}>
              <li>
                <img src="/img/user/Kim_Soo_Hyun.jpg" alt="" />
              </li>
              <li>
                <img src="/img/user/Kim_Soo_Hyun.jpg" alt="" />
              </li>
              <li>
                <img src="/img/user/Kim_Soo_Hyun.jpg" alt="" />
              </li>
              <li>
                <img src="/img/user/Kim_Soo_Hyun.jpg" alt="" />
              </li>
              <li>
                <img src="/img/user/Kim_Soo_Hyun.jpg" alt="" />
              </li>
              <li>
                <img src="/img/user/Kim_Soo_Hyun.jpg" alt="" />
              </li>
            </ul>

            <ul aria-hidden="true" className={styles['marquee__content']}>
              <li>
                <img src="/img/user/Kim_Soo_Hyun.jpg" alt="" />
              </li>
              <li>
                <img src="/img/user/Kim_Soo_Hyun.jpg" alt="" />
              </li>
              <li>
                <img src="/img/user/Kim_Soo_Hyun.jpg" alt="" />
              </li>
              <li>
                <img src="/img/user/Kim_Soo_Hyun.jpg" alt="" />
              </li>
              <li>
                <img src="/img/user/Kim_Soo_Hyun.jpg" alt="" />
              </li>
              <li>
                <img src="/img/user/Kim_Soo_Hyun.jpg" alt="" />
              </li>
            </ul>
          </div>
        </section>
      </div>
    </>
  )
}
