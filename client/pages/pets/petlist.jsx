import { useState, useEffect } from 'react'
import { loadPetInfos } from '@/services/pets'
import Link from 'next/link'
import styles from '@/styles/pets/petList.module.css'
import { FaHeart } from 'react-icons/fa6'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import DefaultLayout from '@/components/layout/default-layout'

export default function PetList() {
  const [pets, setPets] = useState([])

  const getPet = async () => {
    const data = await loadPetInfos()
    console.log('從 loadPetInfos 獲取的數據:', data)
    // 確認資料結構是否與原始專案相符，並設置到狀態中

    if (Array.isArray(data)) {
      console.log('設pets 狀態: ', data)
      setPets(data)
    } else {
      console.log('數據結構不符合預期:', data)
    }
    console.log(data)
  }

  useEffect(() => {
    getPet()
  }, [])

  useEffect(() => {
    console.log('當前的 pets 狀態:', pets) // 確認 pets 狀態更新
  }, [pets])

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
          {pets.map((v, i) => {
            return (
            <Link href={`/pets/${v.pet_id}`}>
              <div className={styles['card']}>
                <div className={styles['card-img']}>
                  <p className={styles['state']} key={v.pet_id}>
                    {v.state}
                  </p>
                  <img
                    key={v.pet_id}
                    src={`/img/pet-info/${v.phone1}.jpg`}
                    alt=""
                  />
                  <FaHeart className={styles['favorite']} />
                </div>
                <div className={styles['pet-name']}>
                  <span key={v.pet_id}>{v.tag}</span>
                  <p key={v.pet_id}>{v.name}</p>
                  <div className={styles['pet-desc']}>
                    <span key={v.pet_id}>今年約莫 {v.age}歲</span>
                    <img src="/img/pets/icon_boy.png" alt="" />
                  </div>
                </div>
              </div>
            </Link>
            )
          })}
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
                <img src="/img/user/10001.jpg" alt="" />
              </li>
              <li>
                <img src="/img/user/10001.jpg" alt="" />
              </li>
              <li>
                <img src="/img/user/10001.jpg" alt="" />
              </li>
              <li>
                <img src="/img/user/10001.jpg" alt="" />
              </li>
              <li>
                <img src="/img/user/10001.jpg" alt="" />
              </li>
              <li>
                <img src="/img/user/10001.jpg" alt="" />
              </li>
            </ul>

            <ul aria-hidden="true" className={styles['marquee__content']}>
              <li>
                <img src="/img/user/10001.jpg" alt="" />
              </li>
              <li>
                <img src="/img/user/10001.jpg" alt="" />
              </li>
              <li>
                <img src="/img/user/10001.jpg" alt="" />
              </li>
              <li>
                <img src="/img/user/10001.jpg" alt="" />
              </li>
              <li>
                <img src="/img/user/10001.jpg" alt="" />
              </li>
              <li>
                <img src="/img/user/10001.jpg" alt="" />
              </li>
            </ul>
          </div>
        </section>
      </div>
    </>
  )
}
