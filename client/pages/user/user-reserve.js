import React, { useState, useEffect } from 'react'
import 'react-datepicker/dist/react-datepicker.css'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import styles from '@/styles/user/user-order-history.module.css'
import stylespet from '@/styles/pets/petList.module.css'
import banner from '@/styles/banner/banner.module.css'
import Link from 'next/link'
import Table from 'react-bootstrap/Table'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { loadPetInfos } from '@/services/reserve_system'
import Select from 'react-select'
import Swal from 'sweetalert2'
// import withReactContent from 'sweetalert2-react-content'
import { GiCancel } from 'react-icons/gi'
import { jwtDecode } from 'jwt-decode'

export default function UserReserve() {
  const [startDate, setStartDate] = useState(null)
  const [reserve, setReserve] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  // 分頁用
  const [pageCount, setPageCount] = useState(1)
  const [page, setPage] = useState(1)
  const [perpage, setPerpage] = useState(10)
  // 排序
  const [orderby, setOrderby] = useState({
    sort: 'reservation_id',
    order: 'desc',
  })
  // 查詢條件用
  const [nameLike, setNameLike] = useState('')

  const options = [
    { value: 'reservation_id,desc', label: '編號排序(由大至小)' },
    { value: 'reservation_id,asc', label: '編號排序(由小至大)' },
    { value: 'time,desc', label: '時間排序(最新預約)' },
    { value: 'time,asc', label: '時間排序(較舊預約)' },
  ]

  const petNameMapping = {
    10001: '露露',
    10002: '馬克斯',
    10003: '寶貝',
    10004: '花花',
    10008: '小雪',
    10009: '皮皮',
    10011: '招財',
    10012: '嘟嘟',
    10025: '露露',
    10026: '馬克斯',
    10027: '寶貝',
    10028: '花花',
    10032: '小雪',
    10033: '皮皮',
    10035: '招財',
    10036: '嘟嘟',
    10049: '露露',
    10050: '馬克斯',
    10051: '寶貝',
    10052: '花花',
    10056: '小雪',
    10057: '皮皮',
    10059: '招財',
    10060: '嘟嘟',
  }

  const userName = {
    10001: '盧先生',
    10002: '白賢祐',
    10003: '洪海仁',
    10004: '洪秀哲',
    10005: '千多慧',
    10006: '洪凡資',
    10007: '全峰藹',
    10008: '白斗關',
    10009: '尹殷盛',
    10010: '羅彩妍',
    10011: '金陽基',
  }

  const getReserve = async (params) => {
    setIsLoading(true)
    try {
      const data = await loadPetInfos(params)
      console.log('Received data:', data)
      setIsLoading(false)
      if (!data || !data.reserve_system) {
        console.error('Data or reserve_system is undefined.')
        return
      }
  
      const userId = localStorage.getItem('userKey')
      const user = jwtDecode(userId)
      const userID = user.user_id
  
      let reserveData = data.reserve_system.filter(item => item.user_id === userID)
      setReserve(reserveData)
      setPageCount(data.pageCount)
    } catch (error) {
      console.error('Error fetching data:', error)
      setIsLoading(false)
    }
  }
  

  const handlePageClick = (targetPage) => {
    if (targetPage >= 1 && targetPage <= pageCount) {
      setPage(targetPage)
      console.log(`切換到第 ${targetPage} 頁`)
    }
  }

  const removeItem = async (reservation_id) => {
    try {
      const response = await fetch(
        `http://localhost:3005/api/reserve_system/${reservation_id}`,
        {
          method: 'DELETE',
        }
      )

      const result = await response.json()
      if (result.status === 'success') {
        const nextItems = reserve.filter(
          (item) => item.reservation_id !== reservation_id
        )
        setReserve(nextItems)
      } else {
        Swal.fire({
          title: '錯誤',
          text: result.message,
          icon: 'error',
        })
      }
    } catch (error) {
      Swal.fire({
        title: '錯誤',
        text: '刪除失敗，請稍後再試',
        icon: 'error',
      })
    }
  }

  const notifyAndRemove = (petName = '', reservation_id = 0) => {
    Swal.fire({
      title: '確定要取消預約嗎?',
      text: '你將無法回復這個操作!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: '取消',
      confirmButtonText: '確定刪除',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: '已刪除!',
          text: `${petName} 已從預約紀錄中刪除`,
          icon: 'success',
        })
        // 刪除資料庫中的預約紀錄
        removeItem(reservation_id)
      }
    })
  }

  // 按下搜尋按鈕
  const handleSearch = () => {
    // 每次搜尋條件後，因為頁數和筆數可能不同，所以要導向第1頁
    const petId = Object.keys(petNameMapping).find(
      (key) => petNameMapping[key] === nameLike
    )

    const params = {
      page: 1, // 每次搜尋條件後，因為頁數和筆數可能不同，所以要導向第1頁
      perpage,
      sort: orderby.sort,
      order: orderby.order,
      pet_id: petId || '', // 如果找不到對應的寵物ID，則為空字符串
    }
    getReserve(params)
  }

  // 樣式3: didMount + didUpdate
  useEffect(() => {
    const params = {
      page,
      perpage,
      sort: orderby.sort,
      order: orderby.order,
    }
    getReserve(params)
  }, [page, perpage, orderby])

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
                  <Link href="#">
                    <p className={`link ${banner['select-title']}`}>浪浪收藏</p>
                  </Link>
                </div>
                <div className={`banner['select-item-a'] w-100`}>
                  <Link href="#">
                    <p className={`link ${banner['select-title']}`}>我的寵物</p>
                  </Link>
                </div>
                <div className={`banner['select-item-a'] w-100`}>
                  <Link href="/user/user-reserve">
                    <p className={`link ${banner['select-title']}`}>預約紀錄</p>
                  </Link>
                </div>
                <div className={`banner['select-item-a'] w-100`}>
                  <Link href="/user/user-adopt">
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
      <main className={`container ${stylespet['order-history-container']}`}>
        {/* <h1>預約紀錄</h1>
        <div className={`d-flex justify-content-between align-items-center ${stylespet['order-history-title']}`}>
          <div className={`d-flex align-items-center ${stylespet['order-history-left']}`}>
            <Select
              options={options}
              value={options.find(
                (option) => option.value === `${orderby.sort},${orderby.order}`
              )}
              onChange={(selectedOption) => {
                const [sort, order] = selectedOption.value.split(',')
                setOrderby({ sort, order })
              }}
              isSearchable={false}
              placeholder="排序方式"
            />
            <input
              type="text"
              placeholder="請輸入寵物名稱"
              value={nameLike}
              onChange={(e) => setNameLike(e.target.value)}
              className={`form-control ${stylespet['search-input']}`}
            />
            <button onClick={handleSearch} className="btn btn-primary">
              搜尋
            </button>
          </div>
        </div> */}
        {isLoading ? (
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        ) : (
          <>
            <div className={`${styles.container}`}>
              <div className={`${styles.book}`}>
            <div className={`${styles.bookContainer}`}>
              <div className={`${styles['rope']}`}></div>

                <div className={`${styles['title']}`}>
                  <div className={`${styles['name-input']}`}>
                    <div className={`${styles['group']}`}>
                      <input
                        value={nameLike}
                        type="text"
                        className={`${styles['input']}`}
                        onChange={(e) => {
                          setNameLike(e.target.value)
                        }}
                      />
                      <span className={`${styles['highlight']}`}></span>
                      <span className={`${styles['bar']}`}></span>
                      <label className={`${styles['label']}`}>浪浪名稱</label>
                    </div>

                    <button
                      onClick={handleSearch}
                      className={`${styles['namebutton']}`}
                    >
                      搜尋
                    </button>
                  </div>
                  <h2 className={`${styles['name']}`}>預約紀錄</h2>

                  <div className={`${styles['adopt-label']}`}>
                    <Select
                      className={`${styles['select']}`}
                      value={options.find(
                        (option) =>
                          option.value === `${orderby.sort},${orderby.order}`
                      )}
                      onChange={(selectedOption) => {
                        const selectedValue = selectedOption.value
                        setOrderby({
                          sort: selectedValue.split(',')[0],
                          order: selectedValue.split(',')[1],
                        })
                      }}
                      options={options}
                    />
                  </div>
                </div>
                <Table className={`${styles['table']}`} striped bordered hover>
                  <thead>
                    <tr>
                      <th>預約編號</th>
                      <th>寵物名稱</th>
                      <th>主人名稱</th>
                      <th scope="col" className={`${styles['phone-time']}`}>
                        預約時間
                      </th>
                      <th
                        scope="col"
                        className={`${styles['phone-censole']}`}
                      ></th>
                    </tr>
                  </thead>
                  <tbody>
                    {reserve.length > 0 ? (
                      reserve.map((item) => (
                        <tr key={item.reservation_id}>
                          <td>{item.reservation_id}</td>
                          <td>{petNameMapping[item.pet_id]}</td>
                          <td>{userName[item.user_id]}</td>
                          <td className={`${styles['td']}`}>{item.time}</td>
                          <td className={styles['phone-btn']}>
                            <a
                              className={styles['td-btn']}
                              onClick={() =>
                                notifyAndRemove(
                                  petNameMapping[item.pet_id] || item.pet_id,
                                  item.reservation_id
                                )
                              }
                            >
                              <GiCancel style={{ color: 'red' }} />
                            </a>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="5" className="text-center">
                          查無資料
                        </td>
                      </tr>
                    )}
                  </tbody>
                </Table>
                <div className="d-flex justify-content-center">
                <section className={`${stylespet['wp-pagenavi']} ${stylespet['wp']}`}>
              {page > 1 && (
                <span>
                  <a
                    className={`${stylespet['page']} ${stylespet['previouspostslink']}`}
                  >
                    <IoIosArrowBack
                      onClick={() => {
                        const perPage = page - 1 <= pageCount ? page - 1 : pageCount
                      setPage(perPage)
                      }}
                    />
                  </a>
                </span>
              )}
                {page - 1 >= 1 && (
                  <span>
                    <a
                      className={stylespet['page']}
                      onClick={() => handlePageClick(page - 1)}
                    >
                      {page - 1}
                    </a>
                  </span>
                )}
                <span
                  className={stylespet['current']}
                  onClick={() => window.scrollTo(0, 0)}
                >
                  {page}
                </span>
                {page + 1 <= pageCount && (
                  <span>
                    <a
                      className={stylespet['page']}
                      onClick={() => handlePageClick(page + 1)}
                    >
                      {page + 1}
                    </a>
                  </span>
                )}
                {page < pageCount && (
                <span>
                  <a
                    className={`${stylespet['page']} ${stylespet['nextpostslink']}`}
                    onClick={() => {
                      const nextPage =
                        page + 1 <= pageCount ? page + 1 : pageCount
                      setPage(nextPage)
                    }}
                  >
                    <IoIosArrowForward />
                  </a>
                </span>
                )}
              </section>
            </div>
                </div>
              </div>
            </div>
          </>
        )}
      </main>
      <Footer />
    </section>
  )
}
