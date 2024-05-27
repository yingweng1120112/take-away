import React, { useState, useEffect } from 'react'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import Table from 'react-bootstrap/Table'
import { loadOrderHistory } from '@/services/order_history'
import styles from '@/styles/user/user-order-history.module.css'
import { HiOutlineClipboardList } from 'react-icons/hi'

export default function UserOrderHistory() {
  const [orderHistory, setOrderHistory] = useState([])
  const [expandedRows, setExpandedRows] = useState([])

  const getOrderHistory = async () => {
    const data = await loadOrderHistory()
    if (Array.isArray(data.order_history)) {
      setOrderHistory(data.order_history)
    } else {
      console.error('資料結構不符', data)
    }
    console.log(data)
  }

  useEffect(() => {
    getOrderHistory()
  }, [])

  const handleIconClick = (orderId) => {
    const isRowExpanded = expandedRows.includes(orderId)
    if (isRowExpanded) {
      setExpandedRows(expandedRows.filter((id) => id !== orderId))
    } else {
      setExpandedRows([...expandedRows, orderId])
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
    order_detail_id: '訂單詳情',
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

  return (
    <>
      <Header />
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
              {tableHeaders.map((header, index) => (
                <th key={index}>{columnNames[header]}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {orderHistory.map((order, rowIndex) => (
              <React.Fragment key={order.order_id}>
                <tr>
                  <td>{rowIndex + 1}</td>
                  {tableHeaders.map((header, colIndex) => (
                    <React.Fragment key={colIndex}>
                      {header !== 'order_detail_id' ? (
                        <td>{order[header]}</td>
                      ) : (
                        <td style={{ display: 'none' }}>{order[header]}</td>
                      )}
                      {header === 'order_detail_id' && (
                        <td>
                          <HiOutlineClipboardList
                            className={styles['order-detail']}
                            onClick={() => handleIconClick(order.order_id)}
                          />
                        </td>
                      )}
                    </React.Fragment>
                  ))}
                </tr>
                {expandedRows.includes(order.order_id) && (
                  <tr>
                    <td colSpan={tableHeaders.length + 1}>
                      <div>
                        <p>
                          <strong>姓名：</strong>
                          {order.name}
                        </p>
                        <p>
                          <strong>電話：</strong>
                          {order.phone}
                        </p>
                        <p>
                          <strong>地址：</strong>
                          {order.recipient_address_detail}
                        </p>
                        {/* 添加更多詳細信息根據需要 */}
                      </div>
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
