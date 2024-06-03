import React, { useState, useEffect } from 'react'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import Table from 'react-bootstrap/Table'
import { loadOrderHistory } from '@/services/order_history'
import { loadOrderDetails } from '@/services/order_detail'
import { loadProducts } from '@/services/testproduct'
import styles from '@/styles/user/user-order-history.module.css'
import { HiOutlineClipboardList } from 'react-icons/hi'
import banner from '@/styles/banner/banner.module.css'
import Link from 'next/link'
import { jwtDecode } from 'jwt-decode'

export default function UserOrderHistory() {
  const [orderHistory, setOrderHistory] = useState([])
  const [orderDetails, setOrderDetails] = useState([])
  const [products, setProducts] = useState([])
  const [expandedRows, setExpandedRows] = useState([])
  const [userID, setUserID] = useState(null)

  useEffect(() => {
    const userId = localStorage.getItem('userKey') // 从localStorage获取userKey（值是token）
    const user = jwtDecode(userId) // 解析token
    const userIdFromToken = user.user_id // 获取里面的user_id
    setUserID(userIdFromToken) // 将user_id存储在userID状态中

    const getOrderHistory = async () => {
      try {
        if (userIdFromToken !== null) {
          // 确保userID已经被设置
          const data = await loadOrderHistory()
          if (Array.isArray(data.order_history)) {
            // 过滤出当前用户的订单记录
            const filteredOrders = data.order_history.filter(
              (order) => order.user_id === userIdFromToken
            )
            setOrderHistory(filteredOrders)
          } else {
            console.warn('資料結構不符', data)
          }
        }
      } catch (error) {
        console.error('获取订单记录失败', error)
      }
    }

    const getProducts = async () => {
      try {
        const data = await loadProducts()
        if (Array.isArray(data.product)) {
          setProducts(data.product)
        } else {
          console.error('資料結構不符', data)
        }
        console.log(data)
      } catch (error) {
        console.error('获取产品数据失败', error)
      }
    }

    getOrderHistory() // 在userID变化时重新获取订单记录
    getProducts() // 获取产品数据
  }, [])

  const getOrderDetail = async (order_id) => {
    const data = await loadOrderDetails(order_id)
    // 確認資料結構是否與原始專案相符，並設置到狀態中
    if (Array.isArray(data.order_detail)) {
      setOrderDetails((prevDetails) => ({
        ...prevDetails,
        [order_id]: data.order_detail,
      }))
    } else {
      console.warn('資料結構不符', data)
    }
    console.log(data)
  }

  const handleIconClick = async (order_id) => {
    const isRowExpanded = expandedRows.includes(order_id)
    if (isRowExpanded) {
      setExpandedRows(expandedRows.filter((id) => id !== order_id))
    } else {
      setExpandedRows([...expandedRows, order_id])
      await getOrderDetail(order_id) // 加载订单详情数据
    }
  }

  if (orderHistory.length === 0) {
    return (
      <>
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
                    <Link href="/user/user-myUserInfo">
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
                    <Link href="/user/user-adopt-history">
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
        <div className={styles['table-container']}>
          <h3 style={{ height: '120px', display: 'flex', alignItems: 'center' }}>－尚無訂單歷史記錄－</h3>
        </div>
        <Footer />
      </>
    )
  } 
  

  const columnNames = {
    order_id: '訂單編號',
    name: '收件人',
    phone: '電話',
    order_date: '下單時間',
    order_remark: '備註',
    delivery_method: '送貨方式',
    payment_method: '付款方式',
    recipient_address_detail: '寄送地址',
    status: '訂單狀態',
    Invoice_no: '手機條碼',
  }

  const tableHeaders = Object.keys(orderHistory[0])
  const filteredTableHeaders = tableHeaders.filter(
    (header) => header !== 'user_id'
  )

  return (
    <>
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
      <div className={styles['table-container']}>
        <Table
          striped
          bordered
          hover
          responsive
          className={styles['table-content']}
        >
          <thead>
            <tr className={styles['tr-header']}>
              <th>#</th>
              {filteredTableHeaders.map((header, index) => (
                <th key={index} className={styles[`th-${header}`]}>
                  {columnNames[header]}
                </th>
              ))}
              <th className={styles['th-detail']}>訂單詳情</th>
            </tr>
          </thead>
          <tbody>
            {orderHistory.map((order, rowIndex) => (
              <React.Fragment key={order.order_id}>
                <tr key={order.order_id}>
                  <td>{rowIndex + 1}</td>
                  {filteredTableHeaders.map((header, colIndex) => {
                    //跳過order_detail_id
                    if (header === 'order_detail_id') {
                      return null
                    }
                    return <td key={colIndex}>{order[header]}</td>
                  })}
                  <td>
                    {' '}
                    {/* 新增訂單詳情欄 */}
                    <HiOutlineClipboardList
                      className={styles['order-detail']}
                      onClick={() => handleIconClick(order.order_id)}
                    />
                  </td>
                </tr>
                {expandedRows.includes(order.order_id) && (
                  <tr>
                    <td colSpan={filteredTableHeaders.length + 2}>
                      {orderDetails[order.order_id] &&
                        orderDetails[order.order_id].map(
                          (order_detail, index) => {
                            const product = products.find(
                              (p) => p.product_id === order_detail.product_id
                            )
                            const productName = product
                              ? product.name
                              : '未知產品'
                            const productPic = product
                              ? product.pic1
                              : '未知產品'
                            return (
                              <div
                                key={`order_detail_${index}`}
                                className={styles['click-style']}
                              >
                                <div className={styles['click-product-style']}>
                                  <div>
                                    <img src={`/img/product/${productPic}`} />{' '}
                                  </div>
                                  <div>
                                    <div>{productName}</div>
                                  </div>
                                </div>
                                <div className={styles['click-price-style']}>
                                  <div>
                                    <strong>單價：</strong>
                                    {order_detail.unit_price}
                                  </div>
                                  <div>
                                    <strong>購買數量：</strong>
                                    {order_detail.amount}
                                  </div>
                                  <div>
                                    <strong>小計：</strong>
                                    {order_detail.totail_price}
                                  </div>
                                </div>
                                <hr />
                              </div>
                            )
                          }
                        )}
                      <p className={styles['total-price']}>
                        <strong>總金額：</strong>
                        {orderDetails[order.order_id] &&
                          orderDetails[order.order_id].reduce(
                            (acc, curr) => acc + curr.totail_price,
                            0
                          )}
                      </p>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </Table>
      </div>
      <Footer />
    </>
  )
}
