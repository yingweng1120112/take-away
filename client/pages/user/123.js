import { useState, useEffect, Fragment } from 'react'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import Table from 'react-bootstrap/Table'
import Accordion from 'react-bootstrap/Accordion'
import { loadOrderHistory } from '@/services/order_history'
import styles from '@/styles/user/user-order-history.module.css'

export default function UserOrderHistory() {
  const [orderHistory, setOrderHistory] = useState([])

  const getOrderHistory = async () => {
    const data = await loadOrderHistory()
    // 確認資料結構是否與原始專案相符，並設置到狀態中
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

  // 確認是否有訂單歷史資料
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

  //獲取表頭
  const tableHeaders = Object.keys(orderHistory[0])

  return (
    <>
      <Header />
      <div className={styles['table-container']}>
        <Table striped bordered hover responsive className={styles['table-content']}>
          <thead>
            <tr>
              <th>#</th>
              {tableHeaders.map((header, index) => (
                <th key={index}>{columnNames[header]}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <Accordion defaultActiveKey="0">
              {orderHistory.map((order, rowIndex) => (
                <Fragment key={order.order_id}>
                  <Accordion.Item eventKey={String(rowIndex)}>
                    <Accordion.Header as="tr">
                      <td>{rowIndex + 1}</td>
                      {tableHeaders.map((header, colIndex) => (
                        <td key={colIndex}>{order[header]}</td>
                      ))}
                    </Accordion.Header>
                    <Accordion.Body as="tr">
                      <td colSpan={tableHeaders.length + 1}>
                        {/* 在這裡添加您想要顯示的詳細信息 */}
                        <p><strong>姓名：</strong>{order.name}</p>
                        <p><strong>電話：</strong>{order.phone}</p>
                        {/* 添加更多詳細信息根據需要 */}
                      </td>
                    </Accordion.Body>
                  </Accordion.Item>
                </Fragment>
              ))}
            </Accordion>
          </tbody>
        </Table>
      </div>
      <Footer />
    </>
  )
}
