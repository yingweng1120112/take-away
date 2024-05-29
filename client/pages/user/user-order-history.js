import React, { useState, useEffect } from 'react'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import Table from 'react-bootstrap/Table'
import { loadOrderHistory } from '@/services/order_history'
import { loadOrderDetail } from '@/services/order_detail'
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
            console.error('資料結構不符', data)
          }
        }
      } catch (error) {
        console.error('获取订单记录失败', error)
      }
    }

    getOrderHistory() // 在userID变化时重新获取订单记录
  }, [])

  const loadOrderDetail = async (orderId) => {
    try {
      const data = await fetchOrderDetail(orderId) // 使用orderId加载订单详情
      return data // 返回订单详情数据
    } catch (error) {
      console.error('获取订单详情失败', error)
      throw error // 抛出错误以便上层调用处理
    }
  }
  const getOrderDetail = async (orderId) => {
    try {
      const orderDetailData = await loadOrderDetail(orderId) // 加载订单详情数据
      setOrderDetails({ ...orderDetails, [orderId]: orderDetailData }) // 存储订单详情数据
    } catch (error) {
      console.error('加载订单详情失败', error)
    }
  }
  const handleIconClick = async (orderId) => {
    const isRowExpanded = expandedRows.includes(orderId)
    if (isRowExpanded) {
      setExpandedRows(expandedRows.filter((id) => id !== orderId))
    } else {
      setExpandedRows([...expandedRows, orderId])
      await getOrderDetail(orderId) // 加载订单详情数据
    }
  }

  if (orderHistory.length === 0) {
    return (
      <>
        <Header />
        <p>尚無訂單歷史記錄</p>
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
            <p className={banner['menu-a']}>ORDER</p>
            <p className={banner['menu-b']}>訂單紀錄</p>
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
                  <Link href="/user/">
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
        <Table
          striped
          bordered
          hover
          responsive
          className={styles['table-content']}
        >
          <thead>
            <tr>
              <th>#</th>
              {filteredTableHeaders.map((header, index) => (
                <th key={index}>{columnNames[header]}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {orderHistory.map((order, rowIndex) => (
              <tr key={order.order_id}>
                <td>{rowIndex + 1}</td>
                {filteredTableHeaders.map((header, colIndex) => {
                  // 如果当前列是'order_detail_id'，则跳过
                  if (header === 'order_detail_id') {
                    return null
                  }
                  // 根据列名渲染相应的数据
                  return <td key={colIndex}>{order[header]}</td>
                })}
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <Footer />
    </>
  )
}

// {expandedRows.includes(order.order_id) && (
//   <tr key={`expanded_${order.order_id}`}>
//     <td colSpan={tableHeaders.length}>
//       {orderDetails[order.order_id] &&
//         orderDetails[order.order_id].map(
//           (orderDetail, index) => (
//             <div key={`orderDetail_${index}`}>
//               <p>
//                 <strong>商品：</strong>
//                 {orderDetail.product_id}
//               </p>
//               <p>
//                 <strong>購買數量：</strong>
//                 {orderDetail.amount}
//               </p>
//               <p>
//                 <strong>單價：</strong>
//                 {orderDetail.unit_price}
//               </p>
//               <p>
//                 <strong>小計：</strong>
//                 {orderDetail.total_price}
//               </p>
//               {/* 其他订单详情信息 */}
//               <br />
//             </div>
//           )
//         )}
//     </td>
//   </tr>
// )}
