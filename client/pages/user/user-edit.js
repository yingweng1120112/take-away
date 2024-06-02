import React, { useState, useEffect } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import styles from '@/styles/user/user-edit.module.css'
import banner from '@/styles/banner/banner.module.css'
import Link from 'next/link'
import { jwtDecode } from 'jwt-decode'
import { useRouter } from 'next/router'
import { ToastContainer, toast, Slide } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function UserEdit() {
  const [userEdit, setUserEdit] = useState(null) // 使用 useState 钩子来保存用户信息
  const [userData,setuserData] = useState('')
  // const [startDate, setStartDate] = useState(null)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [address_detail, setAddressDetail] = useState('')
  // const router = useRouter()

  const userId = localStorage.getItem('userKey') //抓取locasstorage裡面的userKey(值是token)
  const user = jwtDecode(userId) //解析token
  const userID = user.user_id //取得裡面的user_id

  // const date = (date) => {
  //   setStartDate(date)
  // }


  useEffect(() => {
    const fetchUserData = async () => {
      const userId = localStorage.getItem('userKey')
      if (userId) {
        const token = jwtDecode(userId)
        const userID = token.user_id
        try {
          const response = await fetch(
            `http://localhost:3005/api/users/${userID}`
          )
          const result = await response.json()
          if (response.status === 200) {
            setName(result.userData.name)
            setPhone(result.userData.phone)
            setEmail(result.userData.email)
            setAddressDetail(result.userData.address_detail)
            // setStartDate(new Date(result.userData.birthday))
          } else {
            console.error('Failed to fetch user data')
          }
        } catch (error) {
          console.error('Error fetching user data:', error)
        }
      }
    }
    fetchUserData()
  }, [])

    // 抓取user name的初始值
    useEffect(() => {
      if(userData.name){
        setName(userData.name)
      }
      
    }, [userData.name]);
  
    // 抓取user id的初始值
    useEffect(() => {
      if(userData.user_id){
        setUserId(userData.user_id)
      }
      
    }, [userData.user_id
    ]);
  
    // 抓取user email的初始值
    useEffect(() => {
      if(userData.email){
        setEmail(userData.email)
      }
      
    }, [userData.email]);
  
    // 抓取user phone的初始值
    useEffect(() => {
      if(userData.phone){
        setPhone(userData.phone)
      }
      
    }, [userData.phone]);
  
    // 抓取user addressDetail的初始值
    useEffect(() => {
      if(userData.address_detail){
        setAddressDetail(userData.address_detail)
      }
      
    }, [userData.address_detail]);
  

  const handleSubmit = async (event) => {
    event.preventDefault()
    const userId = localStorage.getItem('userKey')
    const token = jwtDecode(userId)
    const userID = token.user_id

    const updatedData = {
      name,
      phone,
      email,
      address_detail,
      // birthday: startDate.toISOString().split('T')[0], // 格式化日期
    }

    console.log(updatedData)

    try {
      const response = await fetch(
        `http://localhost:3005/api/users/${userID}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updatedData),
        }
      )

      const result = await response.json()

      if (response.status === 200) {
        // alert('資料修改成功')
        toast.success('資料修改成功', {
          position: 'top-center',
          autoClose: 600,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
          theme: 'dark',
          transition: Slide,
        })
      } else {
        // alert('資料修改失敗')
        toast.success('資料修改失敗', {
          position: 'top-center',
          autoClose: 600,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
          theme: 'dark',
          transition: Slide,
        })
      }
    } catch (error) {
      console.error('Error updating data:', error)
      // alert('伺服器錯誤')
      toast.success('伺服器錯誤', {
        position: 'top-center',
        autoClose: 600,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: 'dark',
        transition: Slide,
      })
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
            <div className={styles['bookContainer']}>
              <h2>編輯資料</h2>
              <div className={styles['rope']} />
              <div className={styles['bookItems']}>
                <form className={styles['items']} onSubmit={handleSubmit}>
                  <div className={styles['bookItem']}>
                    {/* <div className={styles['stickers']}>
                      <img src={`/img/user/cat_cookie1.jpg`} alt="Sticker" />
                    </div> */}
                    <img src={`/img/user/user-dog.png`} alt="" />
                    <div className={styles['group']}>
                      <input
                        className={styles['input']}
                        type="text"
                        required
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                      <span className={styles['highlight']} />
                      <span className={styles['bar']} />
                      <label className={styles['label']} htmlFor="name">
                        姓名：
                      </label>
                    </div>
                  </div>
                  <img
                    className={styles['bell']}
                    src={`/img/user/bell.png`}
                    alt=""
                  />
                  <div className={styles['bookItem']}>
                    <img src={`/img/user/user-dog.png`} alt="" />
                    <div className={styles['group']}>
                      <input
                        className={styles['input']}
                        type="text"
                        required
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <span className={styles['highlight']} />
                      <span className={styles['bar']} />
                      <label className={styles['label']} htmlFor="email">
                        Email
                      </label>
                    </div>
                  </div>
                  <div className={styles['bookItem']}>
                    <img src={`/img/user/user-dog.png`} alt="" />
                    <div className={styles['group']}>
                      <input
                        className={styles['input']}
                        type="text"
                        required
                        id="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                      <span className={styles['highlight']} />
                      <span className={styles['bar']} />
                      <label className={styles['label']} htmlFor="phone">
                        帳號：
                      </label>
                    </div>
                  </div>
                  <div className={styles['bookItem']}>
                    <img src={`/img/user/user-dog.png`} alt="" />
                    <div className={styles['group']}>
                      <input
                        className={styles['input']}
                        type="text"
                        required
                        id="address"
                        value={address_detail}
                        onChange={(e) => setAddressDetail(e.target.value)}
                      />
                      <span className={styles['highlight']} />
                      <span className={styles['bar']} />
                      <label className={styles['label']} htmlFor="address">
                        地址：
                      </label>
                    </div>
                  </div>
                  <div className={styles['btnItem']}>
                    <button type="submit" className={styles['btnConfirm']}>
                      確認修改
                    </button>
                    <Link href="/user/user-info">
                      <button type="button" className={styles['btnConfirm']}>
                        取消修改
                      </button>
                    </Link>
                  </div>
                </form>
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
