import express from 'express'
const router = express.Router()
import { getIdParam } from '#db-helpers/db-tool.js'
import db from '#configs/mysql.js'

// GET - 获取所有订单历史数据
router.get('/', async function (req, res) {
  try {
    const [rows] = await db.query('SELECT * FROM order_history')
    const order_history = rows
    return res.json({ status: 'success', data: { order_history } })
  } catch (error) {
    return res.status(500).json({
      status: 'error',
      message: '无法获取订单历史数据',
      error: error.message,
    })
  }
})

// GET - 获取单笔订单历史数据
router.get('/:id', async function (req, res) {
  try {
    const id = getIdParam(req)
    const [rows] = await db.query(
      'SELECT * FROM order_history WHERE order_id=?',
      [id]
    )
    const order_history = rows[0]
    return res.json({ status: 'success', data: { order_history } })
  } catch (error) {
    return res.status(500).json({
      status: 'error',
      message: '无法获取单笔订单历史数据',
      error: error.message,
    })
  }
})

// POST - 新增订单
router.post('/', async function (req, res) {
  try {
    const {
      user_id,
      name,
      phone,
      order_date,
      order_remark,
      delivery_method,
      payment_method,
      recipient_address_detail,
      status,
      Invoice_no,
    } = req.body

    const resultHistory = await db.query(
      'INSERT INTO order_history (user_id, name, phone, order_date, order_remark, delivery_method, payment_method, recipient_address_detail, status, Invoice_no) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
      [
        user_id,
        name,
        phone,
        order_date,
        order_remark,
        delivery_method,
        payment_method,
        recipient_address_detail,
        status,
        Invoice_no,
      ]
    )
    const order_id = resultHistory.insertId

    res.json({ status: 'success', message: '订单新增成功', order_id })
  } catch (error) {
    res
      .status(500)
      .json({ status: 'error', message: '订单新增失败', error: error.message })
  }
})

// POST - 新增订单详情
router.post('/order_detail', async function (req, res) {
  try {
    const { order_id, order_details } = req.body

    for (const orderDetail of order_details) {
      const { product_id, amount, unit_price, total_price } = orderDetail
      await db.query(
        'INSERT INTO order_detail (order_id, product_id, amount, unit_price, total_price) VALUES (?, ?, ?, ?, ?)',
        [order_id, product_id, amount, unit_price, total_price]
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
