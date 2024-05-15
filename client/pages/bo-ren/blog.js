import React from 'react'
import CarouselPetInfo from '@/components/swiper/blog-pet-img-swiper'
import CarouselPetLife from '@/components/swiper/blog-pet-life-img-swiper'
import styles from '@/styles/blog.module.css'

export default function life() {
  return (
    <>
      <div className={styles['banner']}>
        <div className={styles['left']}>
          <p className={styles['menu-a']}>BLOG</p>
          <p className={styles['menu-b']}>經歷分享</p>
        </div>
        <div className={styles['middle']}>
          <div className={styles['middle-title']}>
            <span className={styles['middle-page-title']}>毛孩日誌</span>
            <span>pet Diary</span>
          </div>
        </div>
      </div>
      {/* container */}
      <div className={styles['container']}>
        <div className={styles['pet-info']}>
          <div className={styles['swiper-container']}>
            <CarouselPetInfo />
          </div>
          <div className={styles['info-line']}>
            <span className={styles['info-title']}>寵物資訊 </span>
            <h4>寵物名稱 : 斑斑</h4>
            <h4>品種 : 米克斯</h4>
            <h4>年紀 : 5歲</h4>
            <h4>性別 : 女生</h4>
            <h5 style={{ width: '90%' }}>
              我的故事 :<br />
              嗨！我是一隻五歲的虎斑貓，
              我是一個活潑親人的貓咪，喜歡和人互動，享受陽光浴和撒嬌時間。我的毛柔軟，身體溫暖，喜歡追逐玩具、午睡和抱抱。我對新朋友友善親近，願意與他們分享我的愛和快樂。
            </h5>
          </div>
        </div>
        <img
          className={styles['cat-icon']}
          src="./images/Frame 51.svg"
          alt=""
        />
        {/* 上傳 */}
        <div className={styles['post']}>
          <img src="/img/貓貓6 1.jpg" alt="" className={styles['head-img']} />
          <div className={styles['post-right']} style={{ width: '100%' }}>
            <textarea
              id="message"
              name="message"
              className={styles['content-word']}
              placeholder="輸入你想分享的趣事"
              defaultValue={''}
            />
            <div className={styles['post-upload']}>
              <form name="form1">
                <div className={styles['post-upload-btn-container']}>
                  <div>
                    <label className={styles['button']}>
                      <i className={styles['fa-solid fa-image']}>圖片上傳</i>
                    </label>
                    <input
                      id="file-upload"
                      type="file"
                      className={styles['input-pic']}
                      multiple=""
                    />
                  </div>
                  <input
                    type="submit"
                    acceptf="image/*"
                    className={
                      styles[`${styles['button']} ${styles['upload-btn-pc']}`]
                    }
                  />
                </div>
                <div className={styles['post-upload-pic']}>
                  <img id="show_image1" src="" className={styles['show-img']} />
                  <img id="show_image2" src="" className={styles['show-img']} />
                  <img id="show_image3" src="" className={styles['show-img']} />
                  <img id="show_image4" src="" className={styles['show-img']} />
                  <img id="show_image5" src="" className={styles['show-img']} />
                </div>
                <input
                  type="submit"
                  acceptf="image/*"
                  className={styles[`${styles['button']} ${styles['upload-btn-pc']}`]}
                />
              </form>
            </div>
          </div>
        </div>
        {/* 貼文 */}
        <div className={styles['post']}>
          <img src="/img/貓貓6 1.jpg" alt="" className={styles['head-img']} />
          <div className={styles['post-right']}>
            <p className={styles['content-word']}>
              今天抓到一隻老鼠，我感到充滿成就和驕傲！追逐過程中，充滿了興奮和挑戰，最終的成功讓我感到無比的興奮。這不僅是一次獲得美食的冒險，更是對我的獵食本能的展示。我看到它躲藏的小角落，發揮了我的靈敏和技巧，最終成功地捕獲了它。現在，我可以自豪地展示我的成就給我的主人，展現我作為家中捕鼠專家的地位！今天抓到一隻老鼠，我感到充滿成就和驕傲！追逐過程中，充滿了興奮和挑戰，最終的成功讓我感到無比的興奮。這不僅是一次獲得美食的冒險，更是對我的獵食本能的展示。我看到它躲藏的小角落，發揮了我的靈敏和技巧，最終成功地捕獲了它。現在，我可以自豪地展示我的成就給我的主人，展現我作為家中捕鼠專家的地位！
            </p>
            <div className={styles['post-time']}>
              <p className={styles['content-time']}>2024/02/14 9:53pm</p>
              <img src="/images/Edit_1.svg" alt="" />
            </div>
          </div>
        </div>
        <div className={styles['post']}>
          <img src="/img/貓貓6 1.jpg" alt="" className={styles['head-img']} />
          <div className={styles['post-right']}>
            <p className={styles['content-word']}>
              今天抓到一隻老鼠，我感到充滿成就和驕傲！追逐過程中，充滿了興奮和挑戰，最終的成功讓我感到無比的興奮。這不僅是一次獲得美食的冒險，更是對我的獵食本能的展示。
            </p>
            <div className={styles['post-swiper-container']}>
              <CarouselPetLife />
            </div>
            <div className={styles['post-time']}>
              <p className={styles['content-time']}>2024/02/14 9:53pm</p>
              <img src="/images/Edit_1.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
