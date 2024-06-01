import express from 'express'
const router = express.Router()
import db from '#configs/mysql.js'
import { getIdParam } from '#db-helpers/db-tool.js'

// GET - 得到所有订单详情数据
router.get('/', async function (req, res) {
  const [rows] = await db.query('SELECT * FROM order_detail')
  const order_detail = rows
  return res.json({ status: 'success', data: { order_detail } })
})
// GET - 根據 order_id 得到相應的订单详情数据
router.get('/:order_id', async function (req, res) {
  const orderId = req.params.order_id
  const [rows] = await db.query(
    'SELECT * FROM order_detail WHERE order_id = ?',
    [orderId]
  )

  if (rows.length > 0) {
    // 如果找到相應的 order_detail 資料，返回成功的狀態和資料
    return res.json({ status: 'success', data: { order_detail: rows } })
  } else {
    // 如果未找到相應的 order_detail 資料，返回錯誤狀態和相應的錯誤消息
    return res
      .status(404)
      .json({ status: 'error', message: '未找到相應的订单详情数据' })
  }
})
// GET - 得到单笔订单详情数据
router.get('/:id', async function (req, res) {
  const id = getIdParam(req)
  const [rows] = await db.query(
    'SELECT * FROM order_detail WHERE order_detail_id=?',
    [id]
  )
  const order_detail = rows[0]
  return res.json({ status: 'success', data: { order_detail } })
})

// POST - 新增订单详情
router.post('/', async function (req, res) {
  try {
    const orderDetails = req.body // 直接读取请求体中的数据

    for (const orderDetail of orderDetails) {
      const { order_id, product_id, amount, unit_price, totail_price } =
        orderDetail
      await db.query(
        'INSERT INTO order_detail (order_id, product_id, amount, unit_price, totail_price) VALUES (?, ?, ?, ?, ?)',
        [order_id, product_id, amount, unit_price, totail_price]
      )
    }

    res.json({ status: 'success', message: '订单详情创建成功' })
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: '订单详情创建失败',
      error: error.message,
    })
  }
})

export default router
