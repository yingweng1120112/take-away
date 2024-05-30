import React, { useState, useEffect } from 'react'
import styles from './marquee-pets.module.css'
import { loadPetInfos } from '@/services/pets'
import Link from 'next/link'

export default function MarqueePets() {
  const [pets, setPets] = useState([])
  const [nextPagePets, setNextPagePets] = useState([])
  const [pageCount, setPageCount] = useState(1)
  // 分頁用
  const [page, setPage] = useState(1)
  const [perpage, setPerpage] = useState(3)

  // 加入參詢條件params物件
  const getPet = async (params, setPetsFunction) => {
    const data = await loadPetInfos(params)
    console.log('從 loadPetInfos 獲取的資料:', data)

    if (data.pageCount && typeof data.pageCount === 'number') {
      setPageCount(data.pageCount)
    }

    if (Array.isArray(data.pet_info)) {
      console.log('設pets 狀態: ', data.pet_info)
      setPetsFunction(data.pet_info)
    } else {
      console.log('數據結構不符合預期:', data.pet_info)
    }
  }

  // 樣式3: didMount + didUpdate
  useEffect(() => {
    const params = {
      page,
      perpage,
    }

    getPet(params, setPets)
  }, [page, perpage])

  useEffect(() => {
    if (page < pageCount) {
      const nextPage = page + 1
      const params = {
        page: nextPage,
        perpage,
      }

      getPet(params, setNextPagePets)
    }
  }, [page, perpage, pageCount])

  useEffect(() => {
    console.log('當前的 pets 狀態:', pets) // 確認 pets 狀態更新
    console.log('現在的頁數: ', page)
    console.log('當前的 nextPagePets 狀態:', nextPagePets) // 確認 nextPagePets 狀態更新
  }, [pets, nextPagePets])

  return (
    <>
      <section className={styles['enable-animation']}>
        <h1>浪浪領養</h1>
        <div
          className={`${styles['marquee']} ${styles['marquee--hover-pause']}`}
        >
          <ul className={styles['marquee__content']}>
            {pets.map((v, i) => {
              return (
                <li key={i} className={styles['pet-card']}>
                  <img src={`/img/pet-info/${v.phone1}.jpg`} alt="" />
                  <div className={styles['card-desc']}>
                    <p>{v.name}</p>
                    <span>今年約莫 {v.age} 歲</span>
                    <div>
                      <span>{v.weight} KG</span>
                      {v.gender === '男生' ? (
                        <img
                          src="/img/pets/icon_boy.png"
                          alt=""
                          draggable="false"
                        />
                      ) : (
                        <img
                          src="/img/pets/icon_girl.png"
                          alt=""
                          draggable="false"
                        />
                      )}
                    </div>
                    <button className={styles['cta']}>
                      <span className={styles['hover-underline-animation']}>
                        {' '}
                        前往頁面{' '}
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
                  </div>
                </li>
              )
            })}
          </ul>

          <ul className={styles['marquee__content']}>
            {nextPagePets.map((v, i) => {
              return (
                <li key={i} className={styles['pet-card']}>
                  <img src={`/img/pet-info/${v.phone1}.jpg`} alt="" />
                  <div className={styles['card-desc']}>
                    <p>{v.name}</p>
                    <span>今年約莫 {v.age} 歲</span>
                    <div>
                      <span>{v.weight} KG</span>
                      {v.gender === '男生' ? (
                        <img
                          src="/img/pets/icon_boy.png"
                          alt=""
                          draggable="false"
                        />
                      ) : (
                        <img
                          src="/img/pets/icon_girl.png"
                          alt=""
                          draggable="false"
                        />
                      )}
                    </div>
                    <button className={styles['cta']}>
                      <span className={styles['hover-underline-animation']}>
                        {' '}
                        前往頁面{' '}
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
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </section>
    </>
  )
}
