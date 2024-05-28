import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { loadPetInfo } from '@/services/petDiary'
import { loadBlogInfo } from '@/services/blog'
import React from 'react'
import CarouselPetInfo from '@/components/swiper/test'
import CarouselPetLife from '@/components/swiper/test2'
import UpLoad from '@/components/petDiary/upload3'
import styles from '@/styles/petDiary/petDiary.module.css'
import banner from '@/styles/banner/banner.module.css'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
// 資料夾的中的`[pid].js`檔案代表這路由中，除了根路由與靜態路由之外的所有路由，例如 `/product/123` 就是這個檔案
// 資料來源:
// https://my-json-server.typicode.com/eyesofkids/json-fake-data/products/${pid}

export default function PetDiary() {
  // 第1步. 宣告能得到動態路由pid的路由器
  // router.query(物件)，其中包含了pid屬性值
  // router.isReady(布林)，如果是true代表頁面已完成水合作用，可以得到pid
  const router = useRouter()
  const [petInfo, setPetInfo] = useState({})
  const [blogInfo, setBlogInfo] = useState([])

  // 宣告一個指示是不是正在載入資料的狀態
  // 因為一開始一定是要載入資料，所以預設值為true

  const getPetInfo = async (pid) => {
    const data = await loadPetInfo(pid)
    console.log('getPetinfo1:data:')
    console.log(data)

    // 設定到狀態中 ===> 進入update階段，觸發重新渲染(re-render) ===> 顯示資料
    // 確定資料是物件資料類型才設定到狀態中(最基本的保護)

    if (typeof data === 'object' && data !== null && !Array.isArray(data)) {
      setPetInfo(data)
    }
    console.log('getPetinfo2:data:')
    console.log(petInfo)
  }

  const getBlogInfo = async (pid) => {
    const data = await loadBlogInfo(pid)
    console.log('getBloginfo1:data:')
    console.log(data)

    // 設定到狀態中 ===> 進入update階段，觸發重新渲染(re-render) ===> 顯示資料
    // 確定資料是物件資料類型才設定到狀態中(最基本的保護)
    if (Array.isArray(data)) {
      setBlogInfo(data)
    }
    console.log('getPetinfo2:data:')
    console.log(blogInfo)
  }
  // 樣式3: didMount+didUpdate
  // 第2步: 在useEffect中監聽router.isReady為true時，才能得到網址上的pid，之後向伺服器要資料
  useEffect(() => {
    console.log('useeffect router.query:')
    console.log(router.query)
    if (router.isReady) {
      const { pid } = router.query
      getPetInfo(pid)
      getBlogInfo(pid)
    }
    // eslint-disable-next-line
  }, [router.isReady])

  return (
    <>
      <Header />
      <div
        className={banner['banner']}
        style={{ backgroundImage: 'url(/img/petDiary/bannerBlog.jpg)' }}
      >
        <div className={banner['left']}>
          <p className={banner['menu-a']}>LIFE</p>
          <p className={banner['menu-b']}>生活紀錄</p>
        </div>
        <div className={banner['middle']}>
          <div className={`${banner['accordion']}`}>
            <div className={`accordion-button ${banner['accordion-button']}`}>
              {/* span為pc版文字，p為phone版文字 */}
              <span className={banner['middle-page-title']}>日誌列表</span>
              <span>選擇日誌分類</span>
              <p className={banner['middle-page-title']}>選項</p>
            </div>
          </div>
        </div>
      </div>

      {/* container */}
      <div className={styles['container']}>
        <div className={styles['pet-info']}>
          <div className={styles['swiper-container']}>
            <CarouselPetInfo {...petInfo} />
          </div>
          <div className={styles['info-line']}>
            <span className={styles['info-title']}>寵物資訊 </span>
            <h4>寵物名稱 : {petInfo.name}</h4>
            <h4>品種 : {petInfo.breeds}</h4>
            <h4>年紀 : {petInfo.age}</h4>
            <h4>性別 : {petInfo.gender}</h4>
            <h5 style={{ width: '90%' }}>
              我的故事 :<br />
              {petInfo.story}
            </h5>
          </div>
        </div>
        <img className={styles['cat-icon']} src="/img/petDiary/catIcon.svg" alt="" />
        {/* 上傳 */}
        <div className={styles['post']}>
          <img
            src={`/img/diarySearch/${petInfo.adopt1}`}
            alt=""
            className={styles['head-img']}
          />
          <div className={styles['post-right']} style={{ width: '100%' }}>
            <UpLoad />
          </div>
        </div>
        {/* 貼文 */}
        {blogInfo.map((v, i) => {
          return (
            <div className={styles['post']} key={v.blog_id}>
              <img
                src={`/img/diarySearch/${petInfo.adopt1}`}
                alt=""
                className={styles['head-img']}
              />
              <div className={styles['post-right']}>
                <p className={styles['content-word']}>{v.content}</p>
                <CarouselPetLife pic={v.pic} />
                <div className={styles['post-time']}>
                  <p className={styles['content-time']}> {v.time}</p>
                  <img src="/img/petDiary/Edit_1.svg" alt="" />
                </div>
              </div>
            </div>
          )
        })}

        <div className={styles['wp-pagenavi']}>
          <a className={styles['first']} href="#" aria-label="First Page">
            «
          </a>
          <a className={styles['previouspostslink']}>&lt;</a>
          <a className={`${styles['page']} smaller`}> 1 </a>
          <a className={`${styles['page']} smaller`}>2</a>
          <span aria-current="page" className={styles['current']}>
            3
          </span>
          <a className={`${styles['page']} smaller`}>4</a>
          <a className={`${styles['page']} smaller`}>5</a>
          <a
            className={styles['nextpostslink']}
            rel="next"
            aria-label="次のページ"
            href="#"
          >
            &gt;
          </a>
          <a className={'last'} href="#" aria-label="Last Page">
            »
          </a>
        </div>
      </div>
      <Footer />
    </>
  )
}
