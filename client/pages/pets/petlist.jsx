import React from 'react'
import styles from '@/styles/petList.module.css'
import { FaHeart } from "react-icons/fa6";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


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
              <p className={`${styles['state']} ${styles['welcome']}`} />
              <img src="/img/location2.jpg" alt="" />
                <FaHeart  className={styles['favorite']} />
            </div>
            <div className={styles['pet-name']}>
              <span>卍煞氣A歐歐乂</span>
              <p>歐告</p>
              <div className={styles['pet-desc']}>
                <span>今年約莫3歲</span>
                <img src="/img/icon_boy.png" alt="" />
              </div>
            </div>
          </div>
          <div className={styles['card']}>
            <div className={styles['card-img']}>
              <p className={`${styles['state']} ${styles['welcome']}`} />
              <img src="/img/location2.jpg" alt="" />
                <FaHeart  className={styles['favorite']} />
            </div>
            <div className={styles['pet-name']}>
              <span>卍煞氣A歐歐乂</span>
              <p>歐告</p>
              <div className={styles['pet-desc']}>
                <span>今年約莫3歲</span>
                <img src="/img/icon_boy.png" alt="" />
              </div>
            </div>
          </div>
          <div className={styles['card']}>
            <div className={styles['card-img']}>
              <p className={`${styles['state']} ${styles['welcome']}`} />
              <img src="/img/location2.jpg" alt="" />
                <FaHeart  className={styles['favorite']} />
            </div>
            <div className={styles['pet-name']}>
              <span>卍煞氣A歐歐乂</span>
              <p>歐告</p>
              <div className={styles['pet-desc']}>
                <span>今年約莫3歲</span>
                <img src="/img/icon_boy.png" alt="" />
              </div>
            </div>
          </div>
          <div className={styles['card']}>
            <div className={styles['card-img']}>
              <p className={`${styles['state']} ${styles['welcome']}`} />
              <img src="/img/location2.jpg" alt="" />
                <FaHeart  className={styles['favorite']} />
            </div>
            <div className={styles['pet-name']}>
              <span>卍煞氣A歐歐乂</span>
              <p>歐告</p>
              <div className={styles['pet-desc']}>
                <span>今年約莫3歲</span>
                <img src="/img/icon_boy.png" alt="" />
              </div>
            </div>
          </div>
          <div className={styles['card']}>
            <div className={styles['card-img']}>
              <p className={`${styles['state']} ${styles['welcome']}`} />
              <img src="/img/location2.jpg" alt="" />
                <FaHeart  className={styles['favorite']} />
            </div>
            <div className={styles['pet-name']}>
              <span>卍煞氣A歐歐乂</span>
              <p>歐告</p>
              <div className={styles['pet-desc']}>
                <span>今年約莫3歲</span>
                <img src="/img/icon_boy.png" alt="" />
              </div>
            </div>
          </div>
          <div className={styles['card']}>
            <div className={styles['card-img']}>
              <p className={`${styles['state']} ${styles['welcome']}`} />
              <img src="/img/location2.jpg" alt="" />
                <FaHeart  className={styles['favorite']} />
            </div>
            <div className={styles['pet-name']}>
              <span>卍煞氣A歐歐乂</span>
              <p>歐告</p>
              <div className={styles['pet-desc']}>
                <span>今年約莫3歲</span>
                <img src="/img/icon_boy.png" alt="" />
              </div>
            </div>
          </div>
          <div className={styles['card']}>
            <div className={styles['card-img']}>
              <p className={`${styles['state']} ${styles['welcome']}`} />
              <img src="/img/location2.jpg" alt="" />
                <FaHeart  className={styles['favorite']} />
            </div>
            <div className={styles['pet-name']}>
              <span>卍煞氣A歐歐乂</span>
              <p>歐告</p>
              <div className={styles['pet-desc']}>
                <span>今年約莫3歲</span>
                <img src="/img/icon_boy.png" alt="" />
              </div>
            </div>
          </div>
          <div className={styles['card']}>
            <div className={styles['card-img']}>
              <p className={`${styles['state']} ${styles['welcome']}`} />
              <img src="/img/location2.jpg" alt="" />
                <FaHeart  className={styles['favorite']} />
            </div>
            <div className={styles['pet-name']}>
              <span>卍煞氣A歐歐乂</span>
              <p>歐告</p>
              <div className={styles['pet-desc']}>
                <span>今年約莫3歲</span>
                <img src="/img/icon_boy.png" alt="" />
              </div>
            </div>
          </div>
          <div className={styles['card']}>
            <div className={styles['card-img']}>
              <p className={`${styles['state']} ${styles['welcome']}`} />
              <img src="/img/location2.jpg" alt="" />
                <FaHeart  className={styles['favorite']} />
            </div>
            <div className={styles['pet-name']}>
              <span>卍煞氣A歐歐乂</span>
              <p>歐告</p>
              <div className={styles['pet-desc']}>
                <span>今年約莫3歲</span>
                <img src="/img/icon_boy.png" alt="" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
