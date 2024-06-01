import React, { useRef, useEffect, useState } from 'react'
import styles from '@/styles/adopt/adopt.module.css'
import Carousel from '@/components/swiper/swiper'
import AdoptForm from '../../components/adopt/adopt-form'
import Header from '@/components/layout/header'
import banner from '@/styles/adopt/banner.module.css'
import Footer from '@/components/layout/footer'
import { useRouter } from 'next/router'
import { loadPetInfo } from '@/services/pets'
import { adoptInfos } from '@/services/pets'

export default function Adopt() {
  const [open, setOpen] = useState(false)
  const [showButton, setShowButton] = useState(false)
  const router = useRouter()
  const ref = useRef(null)
  const parageStyles = {
    WebkitLineClamp: 1,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    display: '-webkit-box',
  }
  const [pet, setPet] = useState({
    pet_id: 10000,
    name: '',
    tag: '',
    age: 0,
    type: '',
    weight: 0,
    gender: '',
    breeds: '',
    color: '',
    adopted: 0,
    state: '',
    fixed: 0,
    microchip: 0,
    vaccine: 0,
    deworm: 0,
    personality_type: '',
    sign: '',
    blue: 0,
    favorite: 0,
    pee: 0,
    skin: 0,
    disability: 0,
    blind: 0,
    adopt1: '',
    adopt2: '',
    adopt3: '',
    adopt4: '',
    phone1: '',
    phone2: '',
    phone3: '',
    phone4: '',
    reserve1: '',
    story: '',
    habbit: '',
  })

  const [isLoading, setIsLoading] = useState(true)

  const getPet = async (pet_id) => {
    const data = await loadPetInfo(pet_id)
    console.log('info', data)

    if (typeof data === 'object' && data !== null && !Array.isArray(data)) {
      setPet(data)
      setTimeout(() => {
        setIsLoading(false)
      }, 1500)
    }
  }

  useEffect(() => {
    if (router.isReady) {
      const { pet_id } = router.query
      getPet(pet_id)
    }
  }, [router.isReady])
  useEffect(() => {
    if (ref.current) {
      setShowButton(ref.current.scrollHeight !== ref.current.clientHeight)
    }
  }, [])
  return (
    <>
      <Header />
      <div
        className={banner['banner']}
        style={{ backgroundImage: 'url(/img/adopt.jpg)' }}
      >
        <div className={banner['left']}>
          <p className={banner['menu-a']}>ADUS</p>
          <p className={banner['menu-b']}>領養我們</p>
        </div>
        <div className={banner['middle']}>
          <div className={`${banner['accordion']}`}>
            <div className={`accordion-button ${banner['accordion-button']}`}>
              {/* span為pc版文字，p為phone版文字 */}
              <span className={banner['middle-page-title']}>線上認養</span>
              <span>Online adoption</span>
            </div>
          </div>
        </div>
      </div>
      <section className={styles['adout']}>
      <img src={`/img/back1.png`} alt="" className={styles['back']} />
      <img src={`/img/back1.png`} alt="" className={styles['back3']} />
      <img src={`/img/back1.png`} alt="" className={styles['back5']} />
      <img src={`/img/back2.png`} alt="" className={styles['back2']} />
      <img src={`/img/back2.png`} alt="" className={styles['back4']} />
      <img src={`/img/back2.png`} alt="" className={styles['back6']} />
        <div className={styles['container']}>
      {/* <img src={`/img/print.png`} alt="" className={styles['print1']} />
      <img src={`/img/print.png`} alt="" className={styles['print2']} />
      <img src={`/img/print.png`} alt="" className={styles['print3']} />
      <img src={`/img/print.png`} alt="" className={styles['print4']} /> */}
      <img src={`/img/foot.png`} alt="" className={styles['feet']} />
      <img src={`/img/foot.png`} alt="" className={styles['feet1']} />
          <img src={`/img/foot.png`} alt="" className={styles['foot']} />
          <img src={`/img/foot.png`} alt="" className={styles['foot']} />
          <div className={styles['popup-image']}>
            <a>
              <i
                className={`${styles['fa-regular']}
            ${styles['fa-circle-xmark']}`}
              />
            </a>
            <img src={`/img/pet-img.jpg`} alt="" />
            <img src={`/img/print.png`} alt="" className={styles['print']} />
            <img src={`/img/foot.png`} alt="" className={styles['foot']} />
            <img src={`/img/foot.png`} alt="" className={styles['myfoot']} />
            <img src={`/img/foot.png`} alt="" className={styles['feet']} />
          </div>
          <section className={styles['about-pet']}>
            <div className={styles['pet-title']}>
              <div className={styles['petswiper']}>
                <Carousel
                  style={{ margin: '2rem', width: '100%' }}
                  adopt1={pet.adopt1}
                  adopt2={pet.adopt2}
                  adopt3={pet.adopt3}
                  adopt4={pet.adopt4}
                />
              </div>

              <div className={styles['pet-photo']}>
                <img src={`/img/pet-info/${pet.phone1}.jpg`} alt="" />
              </div>
              <div className={styles['pet-name']}>
                {/* TODO:姓名抓資料庫 */}
                <h3>認養{pet.name}</h3>
                <h3>{pet.gender} • {pet.age}歲 •{pet.sign} • {pet.breeds}</h3>
              </div>
              <div className={styles['pet-img']}>
                <div className={styles['image']}>
                  <img src={`/img/pet-info/${pet.phone2}.jpg`} alt="" />
                </div>
                <div className={styles['image']}>
                  <img src={`/img/pet-info/${pet.phone3}.jpg`} alt="" />
                </div>
                <div className={styles['image']}>
                  <img src={`/img/pet-info/${pet.phone4}.jpg`} alt="" />
                </div>
              </div>
              <div className={styles['pet-namet']}>
                {/* TODO:姓名抓資料庫 */}
                <h3>認養{pet.name}</h3>
                <h3>{pet.gender} • {pet.age}歲 •{pet.sign} • {pet.breeds}</h3>
              </div>
              <div className={styles['extra']}>
                <div className={styles['pet-character']}>
                  <h3>性格特色</h3>
                  <h4 style={open ? null : parageStyles}>
                    1.很活潑好動，但只要讓她適當消耗精力，也能乖乖安靜待著
                    <br />
                    2.面對陌生人會先觀察，但一旦認定你就會開始黏人，看到熟人時也會非常興奮。
                    <br />
                    {/* TODO:姓名抓資料庫 */}
                    3.{pet.name}願意跟隨人類、聽從指令。
                    <br />
                    4.對環境適應力快、勇於探索，但警戒性也很高。
                    <br />
                    <p className={styles['date-p']}>捐款須知</p>
                    ※本專案募資項目扣除{pet.name}生活等相關費用，餘款將用於支付250隻等家狗狗每日的生活開銷※
                    <br />
                    ※您每一筆捐款將可以「列舉扣除額」方式申報扣抵所得稅※
                  </h4>
                    <br />
                  <button
                    onClick={() => {
                      setOpen(!open)
                    }}
                    className={styles['Read-More']}
                  >
                    {open ? 'Read Less...' : 'Read More...'}
                  </button>
                </div>
              </div>
            </div>
          </section>
          
          <section className={styles['form']}>
            <AdoptForm name={pet.name} phone1={pet.phone1} pet_id={pet.pet_id}/>
      <img src={`/img/dogcat.webp`} alt="" className={styles['pet']} />
          </section>
        </div>
      </section>

      <Footer />
    </>
  )
}
