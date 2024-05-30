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
import withReactContent from 'sweetalert2-react-content'
import { GiCancel } from "react-icons/gi";

export default function UserReserve() {
  const [startDate, setStartDate] = useState(null)
  const [reserve, setReserve] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  // 分頁用
  const [pageCount, setPageCount] = useState(1)
  const [page, setPage] = useState(1)
  const [perpage, setPerpage] = useState(5)
  // 排序
  const [orderby, setOrderby] = useState({ sort: 'reservation_id', order: 'asc' })
  // 查詢條件用
  const [nameLike, setNameLike] = useState('')

  const options = [
    { value: 'reservation_id,asc', label: '編號排序(由小至大)' },
    { value: 'reservation_id,desc', label: '編號排序(由大至小)' },
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
    10002: '洪海仁',
    10003: '洪秀哲',
    10004: '千多慧',
    10005: '洪凡資',
    10006: '全峰藹',
    10007: '白斗關',
    10008: '尹殷盛',
    10009: '羅彩妍',
    10010: '金陽基',
  }
  const getReserve = async (params) => {
    setReserve([]) // 清空之前的資料
    const data = await loadPetInfos(params)
    console.log('從 loadPetInfos 獲取的資料:', data)

    // 設定到狀態中 ===> 進入update階段，觸發重新渲染(re-render) ===> 顯示資料
    if (data.pageCount && typeof data.pageCount === 'number') {
      setPageCount(data.pageCount)
    }
    if (Array.isArray(data.reserve_system)) {
      console.log('reserve 狀態: ', data.reserve_system)
      setReserve(data.reserve_system)
    } else {
      console.log('數據結構不符合預期:', data.reserve_system)
    }
  }

  const handlePageClick = (targetPage) => {
    if (targetPage >= 1 && targetPage <= pageCount) {
      setPage(targetPage)
      console.log(`切換到第 ${targetPage} 頁`)
    }
  }

  // 要改用sweetalert2-react-content來取代Swal
  const MySwal = withReactContent(Swal)

  const removeItem = async (reservation_id) => {
    try {
      const response = await fetch(`http://localhost:3005/api/reserve_system/${reservation_id}`, {
        method: 'DELETE',
      })

      const result = await response.json()
      if (result.status === 'success') {
        const nextItems = reserve.filter((item) => item.reservation_id !== reservation_id)
        setReserve(nextItems)
      } else {
        MySwal.fire({
          title: '錯誤',
          text: result.message,
          icon: 'error',
        })
      }
    } catch (error) {
      MySwal.fire({
        title: '錯誤',
        text: '刪除失敗，請稍後再試',
        icon: 'error',
      })
    }
  }

  const notifyAndRemove = (petName = '', reservation_id = 0) => {
    MySwal.fire({
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
        MySwal.fire({
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
      <div className={`${banner['banner']} ${banner['banner-life-1']} ${styles['banner-life-1']}`}></div>
      <div className={banner['banner-select']}>
        <div className={`${banner['banner']} ${banner['banner-life-2']} ${styles['banner-life-2']}`}>
          <div className={banner['left']}>
            <p className={banner['menu-a']}>PROP</p>
            <p className={banner['menu-b']}>個人資料</p>
          </div>
          <div className={banner['middle']}>
            <div className={`accordion ${banner['accordion']}`} id="accordionExample">
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

        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
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
                  <Link href="/user/user-mypet">
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
                    <p className={`link ${banner['select-title']}`}>線上認養紀錄</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* banner end */}
      <section className={`${styles.user} d-flex justify-content-center align-items-center`}>
        <img className={styles['bgfeet1']} src={`/img/user/loading.png`} alt="" />
        <img className={styles['bgfeet2']} src={`/img/user/loading.png`} alt="" />
        <div className={`${styles.container}`}>
          <div className={`${styles.book}`}>
            <div className={`${styles.bookContainer}`}>
              <img className={styles.feet} src={`/img/user/loadfeet.png`} alt="" />
              <div className={styles.rope}></div>
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

                  <button onClick={handleSearch} className={`${styles['namebutton']}`}>
                    搜尋
                  </button>
                </div>
                <h2 className={`${styles['name']}`}>線上認養紀錄</h2>

                <div className={`${styles['adopt-label']}`}>
                  <Select
                    className={`${styles['select']}`}
                    value={options.find(
                      (option) => option.value === `${orderby.sort},${orderby.order}`
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
                    <th scope="col" >預約編號</th>
                    <th scope="col">浪浪名稱</th>
                    <th scope="col">預約人</th>
                    <th scope="col" className={`${styles['phone-time']}`}>預約時間</th>
                    <th scope="col" className={`${styles['phone-censole']}`}></th>
                  </tr>
                </thead>
                <tbody>
                  {reserve.map((v, i) => {
                    return (
                      <tr key={v.reservation_id}>
                        <td scope="row" className={`${styles['td']}`}>{v.reservation_id}</td>
                        <td className={`${styles['td']}`}>{petNameMapping[v.pet_id] || v.pet_id}</td>
                        <td className={`${styles['td']} `}>
                          {userName[v.user_id] || v.user_id}
                        </td>
                        <td className={`${styles['td']}`}>{v.time}</td>
                        <td className={styles['phone-btn']}>
                          <a className={styles['td-btn']} onClick={() => notifyAndRemove(petNameMapping[v.pet_id] || v.pet_id, v.reservation_id)}><GiCancel style={{color:"red"}}/></a>
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </Table>
              {/* 換頁 */}
              <section className={stylespet['wp-pagenavi']}>
              {page > 1 && (
                <span>
                  <a className={`${stylespet['page']} ${stylespet['previouspostslink']}`}>
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
                    <a className={stylespet['page']} onClick={() => handlePageClick(page - 1)}>
                      {page - 1}
                    </a>
                  </span>
                )}
                <span className={stylespet['current']} onClick={() => window.scrollTo(0, 0)}>
                  {page}
                </span>
                {page + 1 <= pageCount && (
                  <span>
                    <a className={stylespet['page']} onClick={() => handlePageClick(page + 1)}>
                      {page + 1}
                    </a>
                  </span>
                )}
                {page < pageCount && (
                <span>
                  <a className={`${stylespet['page']} ${stylespet['nextpostslink']}`} onClick={() => {
                    const nextPage = page + 1 <= pageCount ? page + 1 : pageCount
                    setPage(nextPage)
                  }}>
                    <IoIosArrowForward />
                  </a>
                </span>
              )}
              </section>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <style jsx>{`
        .link {
          cursor: pointer;
        }
      `}</style>
    </section>
  )
}
