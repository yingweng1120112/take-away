import { useState, useEffect } from 'react'
import { loadPetInfos } from '@/services/pets'
import Link from 'next/link'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import banner from '@/styles/banner/banner.module.css'
import styles from '@/styles/pets/petList.module.css'
import { FaHeart } from 'react-icons/fa6'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

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
    <Header />

    <div
        className={`${banner['banner']} ${banner['banner-life-1']} ${styles['banner-life-1']}`} style={{ backgroundImage: 'url(../../img/pets/petlist-navbar.png)' }}
      ></div>
      <div className={banner['banner-select']}>
        <div
          className={`${banner['banner']} ${banner['banner-life-2']} ${styles['banner-life-2']}`}  style={{ backgroundImage: 'url(../../img/pets/petlist-navbar2.png)' }}
        >
          <div className={banner['left']}>
            <p className={banner['menu-a']}>PETS</p>
            <p className={banner['menu-b']}>汪汪喵喵</p>
          </div>
          <div className={banner['middle']}>
            <div
              className={`accordion ${banner['accordion']}`}
              id="accordionExample"
            >
              <button
                className={`accordion-button ${banner['accordion-button']}`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                <span className={banner['middle-page-title']}>收容資訊</span>
                <span>選擇寵物</span>
              </button>
            </div>
          </div>
        </div>

        <div
          id="collapseOne"
          class="accordion-collapse collapse show"
          data-bs-parent="#accordionExample"
        >
          <div className={`accordion-body ${banner['accordion-body']}`}>
            <div className={banner['select']}>
              <div className={banner['select-left']}>
                <div className={banner['select-item-a']}>
                  <p className={banner['select-title']}>選擇年齡</p>
                  <div className={banner['select-item']}>
                    <label className={banner['cl-checkbox']}>
                      <input type="checkbox" />
                      <span>幼年 0 ~ 1歲</span>
                    </label>
                    <label className={banner['cl-checkbox']}>
                      <input type="checkbox" />
                      <span>青年 2 ~ 3歲</span>
                    </label>
                    <label className={banner['cl-checkbox']}>
                      <input type="checkbox" />
                      <span>中年 4 ~ 7歲</span>
                    </label>
                    <label className={banner['cl-checkbox']}>
                      <input type="checkbox" />
                      <span>老年 8歲以上</span>
                    </label>
                  </div>
                </div>
                <div className={banner['select-item-a']}>
                  <p className={banner['select-title']}>寵物體型</p>
                  <div className={banner['select-item']}>
                    <label className={banner['cl-checkbox']}>
                      <input type="checkbox" />
                      <span>大型 20kg以上</span>
                    </label>
                    <label className={banner['cl-checkbox']}>
                      <input type="checkbox" />
                      <span>中型 8 ~ 20kg</span>
                    </label>
                    <label className={banner['cl-checkbox']}>
                      <input type="checkbox" />
                      <span>小型 8kg以下</span>
                    </label>
                  </div>
                </div>
                <div className={banner['select-item-a']}>
                  <p className={banner['select-title']}>選擇物種</p>
                  <div className={banner['select-item']}>
                    <label className={banner['cl-checkbox']}>
                      <input type="checkbox" />
                      <span>狗狗寶貝</span>
                    </label>
                    <label className={banner['cl-checkbox']}>
                      <input type="checkbox" />
                      <span>貓貓寶貝</span>
                    </label>
                  </div>
                </div>
              </div>
              <div className={banner['select-right']}>
                <div className={banner['select-item-a']}>
                  <p className={banner['select-title']}>選擇地區</p>
                  <div className={banner['select-item']}>
                    <label className={banner['cl-checkbox']}>
                      <input type="checkbox" />
                      <span>北部</span>
                    </label>
                    <label className={banner['cl-checkbox']}>
                      <input type="checkbox" />
                      <span>中部</span>
                    </label>
                    <label className={banner['cl-checkbox']}>
                      <input type="checkbox" />
                      <span>南部</span>
                    </label>
                  </div>
                </div>
                <div className={banner['select-item-a']}>
                  <p className={banner['select-title']}>測驗類別</p>
                  <div className={banner['select-item']}>
                    <label className={banner['cl-checkbox']}>
                      <input type="checkbox" />
                      <span>敏感型</span>
                    </label>
                    <label className={banner['cl-checkbox']}>
                      <input type="checkbox" />
                      <span>樂天型</span>
                    </label>
                    <label className={banner['cl-checkbox']}>
                      <input type="checkbox" />
                      <span>獨立型</span>
                    </label>
                    <label className={banner['cl-checkbox']}>
                      <input type="checkbox" />
                      <span>自信型</span>
                    </label>
                    <label className={banner['cl-checkbox']}>
                      <input type="checkbox" />
                      <span>適應型</span>
                    </label>
                  </div>
                </div>
                <div className={banner['select-item-b']}>
                  <p className={banner['select-title']}>姓別</p>
                  <div className={banner['select-item']}>
                    <label className={banner['cl-checkbox']}>
                      <input type="checkbox" />
                      <span>男生</span>
                    </label>
                    <label className={banner['cl-checkbox']}>
                      <input type="checkbox" />
                      <span>女生</span>
                    </label>
                  </div>
                  <p className={banner['select-title']}> 毛孩搜尋 </p>
                  <div className={`mb-3 ${banner['shop-select-out']}`}>
                    <input
                      type="text"
                      className={`form-control ${banner['shop-select']}`}
                      id="exampleFormControlInput1"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

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
        {/* TODO: 分頁 */}

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
    <Footer />
    </>
  )
}
