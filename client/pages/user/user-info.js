import { useState, useEffect } from 'react'
import Link from 'next/link'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import styles from '@/styles/user/user-info.module.css'
import banner from '@/styles/banner/banner.module.css'
import { jwtDecode } from 'jwt-decode'
import { loadUserInfo } from '@/services/user-info'
import { loadUserInfoSpecific } from '@/services/user-info'
import { useAuth } from '@/hooks/use-auth'
import { ToastContainer, toast, Slide } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function UserInfo() {
  // 最后得到的资料
  const [userInfo, setUserInfo] = useState(null) // 使用 useState 钩子来保存用户信息
  const [userData, setuserData] = useState('')
  const [name, setName] = useState('')
  const [userid, setUserId] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [addressDetail, setAddressDetail] = useState('')

  const userId = localStorage.getItem('userKey') //抓取locasstorage裡面的userKey(值是token)
  const user = jwtDecode(userId) //解析token
  const userID = user.user_id //取得裡面的user_id
  console.log(userID)

  // 使用 useEffect 鉤子在加载時獲取使用者資料
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:3005/api/users/user-info/${userID}`
        )
        const result = await response.json()

        // console.log(result.userData);
        const userData = result.userData
        // console.log(123)
        // console.log(userData.name)
        setuserData({ ...userData })
        console.log(userData)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [])

  // 抓取user name的初始值
  useEffect(() => {
    if (userData.name) {
      setName(userData.name)
    }
  }, [userData.name])

  // 抓取user id的初始值
  useEffect(() => {
    if (userData.user_id) {
      setUserId(userData.user_id)
    }
  }, [userData.user_id])

  // 抓取user email的初始值
  useEffect(() => {
    if (userData.email) {
      setEmail(userData.email)
    }
  }, [userData.email])

  // 抓取user phone的初始值
  useEffect(() => {
    if (userData.phone) {
      setPhone(userData.phone)
    }
  }, [userData.phone])

  // 抓取user addressDetail的初始值
  useEffect(() => {
    if (userData.address_detail) {
      setAddressDetail(userData.address_detail)
    }
  }, [userData.address_detail])

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
              <div
                className={`w-100 d-flex flex-row align-items-start ${styles['select-phone']}`}
              >
                <div className={`banner['select-item-a'] w-100`}>
                  <Link href="/user/user-info">
                    <p
                      className={`link ${banner['select-title']} 
                    ${styles['select-title']}`}
                    >
                      個人資料
                    </p>
                  </Link>
                </div>
                <div className={`banner['select-item-a'] w-100`}>
                  <Link href="/user/shopping-cart/step1">
                    <p
                      className={`link ${banner['select-title']} 
                    ${styles['select-title']} `}
                    >
                      購物車
                    </p>
                  </Link>
                </div>
                <div className={`banner['select-item-a'] w-100`}>
                  <Link href="/user/user-order-history">
                    <p
                      className={`link ${banner['select-title']} 
                    ${styles['select-title']}`}
                    >
                      訂單紀錄
                    </p>
                  </Link>
                </div>
                <div className={`banner['select-item-a'] w-100`}>
                  <Link href="/user/user-favorite">
                    <p
                      className={`link ${banner['select-title']} 
                    ${styles['select-title']}`}
                    >
                      浪浪收藏
                    </p>
                  </Link>
                </div>
                <div className={`banner['select-item-a'] w-100`}>
                  <Link href="#">
                    <p
                      className={`link ${banner['select-title']} 
                    ${styles['select-title']}`}
                    >
                      我的寵物
                    </p>
                  </Link>
                </div>
                <div className={`banner['select-item-a'] w-100`}>
                  <Link href="/user/user-reserve">
                    <p
                      className={`link ${banner['select-title']} 
                    ${styles['select-title']}`}
                    >
                      預約紀錄
                    </p>
                  </Link>
                </div>
                <div className={`banner['select-item-a'] w-100`}>
                  <Link href="/user/user-adopt">
                    <p
                      className={`link ${banner['select-title']}
                    ${styles['select-title']}`}
                    >
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
            <div className={styles['bookContainer']}>
              <h2>個人資料</h2>
              <div className={styles['bookItem']}>
                <img src="\img\user\user-dog.png" alt="" />
                <h5 className={styles['input']}>id：</h5>
                <input type="text" value={userid} className={styles['input']} />
                <hr />
              </div>
              <div className={styles['bookItem']}>
                <img src="\img\user\user-dog.png" alt="" />
                <h5>姓名：</h5>
                <input type="text" value={name} className={styles['input']} />
                {/* <div className={styles['stickers']}>
                  <img src={`/img/user/${userInfo.pic}.jpg`} alt="" />
                </div> */}
                <hr />
              </div>
              <div className={styles['bookItem']}>
                <img src="\img\user\user-dog.png" alt="" />
                <h5>Email：</h5>
                <input type="text" value={email} className={styles['input']} />
                <hr />
              </div>
              <div className={styles['bookItem']}>
                <img src="\img\user\user-dog.png" alt="" />
                <h5>帳號：</h5>
                <input type="text" value={phone} className={styles['input']} />
              </div>
              <div className={styles['bookItem']}>
                <img src="\img\user\user-dog.png" alt="" />
                <h5>地址：</h5>
                <input
                  type="text"
                  value={addressDetail}
                  className={styles['input']}
                />
              </div>
              <div className={styles['btnItem']}>
                <Link href="/user/user-edit">
                  <button className={styles['btnConfirm']}>修改資料</button>
                </Link>
                {/* <button className={styles['btnConfirm']}>登出</button> */}
              </div>
            </div>
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
