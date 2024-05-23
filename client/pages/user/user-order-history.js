import { useState, useEffect } from 'react'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import Table from 'react-bootstrap/Table'
import { loadOrderHistory } from '@/services/order_history'

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
  //獲取表頭
  const tableHeaders = Object.keys(orderHistory[0])

  return (
    <>
      <Header />
      <Table responsive>
        <thead>
          <tr>
            <th>#</th>
            {tableHeaders.map((header, index)=>(
                <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
        {orderHistory.map((order, rowIndex)=>(
          <tr key={order.order_id}>
            <td>{rowIndex + 1}</td>
            {tableHeaders.map((header, colIndex) => (
              <td key={colIndex}>{order[header]}</td>
            ))}
          </tr>
        ))}
        </tbody>
      </Table>
      <Footer />
    </>
  )
}
