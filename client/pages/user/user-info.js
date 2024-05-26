import { useState, useEffect } from 'react'
import Link from 'next/link'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import styles from '@/styles/user/user-info.module.css'
import banner from '@/styles/banner/banner.module.css'
import { loadUserInfo } from '@/services/user-info'

export default function UserInfo() {
  // 最後得到的資料
  const [UserInfo, setUserInfo] = useState([])
  const [pageCount, setPageCount] = useState(1)
  // 分頁用
  const [page, setPage] = useState(1)
  const [perpage, setPerpage] = useState(9)


  // 加入參詢條件params物件
  const getUserInfo = async (params) => {

    setUserInfo([]) // 清空之前的資料

    const data = await loadUserInfo(params)
    console.log('從 loadUserInfo 獲取的資料:', data)

    // 確定資料是陣列資料類型才設定到狀態中(最基本的保護)
    if (Array.isArray(data.user_info)) {
      console.log('設UserInfo 狀態: ', data.user_info)
      setUserInfo(data.user_info)
    } else {
      console.log('數據結構不符合預期:', data.user_info)
    }
    console.log(data.user_info)
  }


  // 按下搜尋按鈕
  const handleSearch = () => {
    // 每次搜尋條件後，因為頁數和筆數可能不同，所以要導向第1頁
    setPage(1)

    const params = {
      page: 1, // 每次搜尋條件後，因為頁數和筆數可能不同，所以要導向第1頁
      perpage,
      name_like: nameLike,
    }
    getUserInfo(params)
  }

  // 樣式3: didMount + didUpdate
  useEffect(() => {
    const params = {
      page,
      perpage,
    }

    getUserInfo(params)
  }, [page, perpage])

  useEffect(() => {
    console.log('當前的 UserInfo 狀態:', UserInfo) // 確認 UserInfo 狀態更新
    console.log('現在的頁數: ', page)
  }, [UserInfo])

  const handlePageClick = (targetPage) => {
    if (targetPage >= 1 && targetPage <= pageCount) {
      setPage(targetPage)
      scrollTo(0, 0)
      console.log(`切換到第 ${targetPage} 頁`)
    }
  }

  return (
    <section>
      <Header />
      {/* banner start*/}
      <div
        className={`${banner['banner']} ${banner['banner-life-1']} ${styles['banner-life-1']}`}
      ></div>
      <div className={banner['banner-select']}>
        <div
          className={`${banner['banner']} ${banner['banner-life-2']} ${styles['banner-life-2']}`}
        >
          <div className={banner['left']}>
            <p className={banner['menu-a']}>PROP</p>
            <p className={banner['menu-b']}>個人資料</p>
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
                <span className={banner['middle-page-title']}>會員中心</span>
                <span>功能選單</span>
              </button>
            </div>
          </div>
        </div>

        <div
          id="collapseOne"
          className="accordion-collapse collapse show"
          data-bs-parent="#accordionExample"
        >
          <div className={`accordion-body ${banner['accordion-body']}`}>
            <div className={`banner['select']`}>
              <div className="w-100 d-flex flex-row align-items-start">
                <div className={`banner['select-item-a'] w-100`}>
                  <Link href="/user/user-info">
                    <p className={`link ${banner['select-title']}`}>個人資料</p>
                  </Link>
                </div>
                <div className={`banner['select-item-a'] w-100`}>
                  <Link href="/user/shopping-cart/step1">
                    <p className={`link ${banner['select-title']}`}>購物車</p>
                  </Link>
                </div>
                <div className={`banner['select-item-a'] w-100`}>
                  <Link href="/user/user-order-history">
                    <p className={`link ${banner['select-title']}`}>訂單紀錄</p>
                  </Link>
                </div>
                <div className={`banner['select-item-a'] w-100`}>
                  <Link href="/user/">
                    <p className={`link ${banner['select-title']}`}>浪浪收藏</p>
                  </Link>
                </div>
                <div className={`banner['select-item-a'] w-100`}>
                  <Link href="/user/user-myUserInfo">
                    <p className={`link ${banner['select-title']}`}>我的寵物</p>
                  </Link>
                </div>
                <div className={`banner['select-item-a'] w-100`}>
                  <Link href="/user/user-reserve">
                    <p className={`link ${banner['select-title']}`}>預約紀錄</p>
                  </Link>
                </div>
                <div className={`banner['select-item-a'] w-100`}>
                  <Link href="/user/user-adopt-history">
                    <p className={`link ${banner['select-title']}`}>
                      線上認養紀錄
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* banner end */}
      <img className={styles['bgfeet1']} src={`/img/user/loading.png`} alt="" />
      <img className={styles['bgfeet2']} src={`/img/user/loading.png`} alt="" />
      <div className={styles['container']}>
        <div className={styles['book']}>
          <div className={styles['bookInfo']}>
            <div className={styles['rope']} />

            {UserInfo.map((v, i) => {
              return (
                <div className={styles['bookContainer']}>
                  <h2>個人資料</h2>
                  <div className={styles['user']}>
                    <div className={styles['stickers']}>
                      <img
                        key={v.user_id}
                        src={`/img/user/${v.pic}.jpg`}
                        alt=""
                      />
                    </div>
                    <h5>姓名：</h5>
                    <span key={v.user_id}>{v.name}</span>
                  </div>
                  <div className={styles['bookItem']}>
                    <img src={`/img/user/user-dog.jpg`} alt="" />
                    <h5>id</h5>
                    <span key={v.user_id}>{v.user_id}</span>
                    <hr />
                  </div>
                  <div className={styles['bookItem']}>
                    <img src={`/img/user/user-dog.jpg`} alt="" />
                    <h5>Email：</h5>
                    <span key={v.user_id}>{v.email}</span>
                    <hr />
                  </div>
                  <div className={styles['bookItem']}>
                    <img src={`/img/user/user-dog.jpg`} alt="" />
                    <h5>帳號：</h5>
                    <span key={v.user_id}>{v.phone}</span>
                  </div>
                  <div className={styles['bookItem']}>
                    <img src={`/img/user/user-dog.jpg`} alt="" />
                    <h5>地址：</h5>
                    <span key={v.user_id}>{v.address_detail}</span>
                  </div>
                  <div className={styles['btnItem']}>
                    <Link href="/user/user-edit">
                      <button className={styles['btnConfirm']}>修改資料</button>
                    </Link>
                    <button className={styles['btnConfirm']}>登出</button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <Footer />
      <style jsx>
        {`
          .link {
            cursor: pointer;
          }
        `}
      </style>
    </section>
  )
}
