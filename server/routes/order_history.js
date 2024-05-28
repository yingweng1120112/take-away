import express from 'express'
const router = express.Router()
// 检查空物件, 转换req.params为数字
import { getIdParam } from '#db-helpers/db-tool.js'

// 使用sql查询的方式
import db from '#configs/mysql.js'

// GET - 得到所有订单历史数据
router.get('/', async function (req, res) {
  const [rows] = await db.query('SELECT * FROM order_history')
  const order_history = rows
  // 处理如果没有找到数据

  // 返回 JSON 数据
  return res.json({ status: 'success', data: { order_history } })
})

// GET - 得到单笔订单历史数据
router.get('/:id', async function (req, res) {
  // 转为数字
  const id = getIdParam(req)

  const [rows] = await db.query(
    'SELECT * FROM order_history WHERE order_history_id=?',
    [id]
  )
  const order_history = rows[0]
  return res.json({ status: 'success', data: { order_history } })
})

// POST - 新增订单
router.post('/', async function (req, res) {
  try {
    // 从请求中获取 POST 数据
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
      order_details,
    } = req.body

    // 在数据库中插入新的订单数据
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
    const order_id = resultHistory.insertId // 获取插入的 order_id

    // 遍历订单详情数组，为每个订单详情插入记录，并将 order_id 作为外键关联
    for (const orderDetail of order_details) {
      const { product_id, amount, unit_price, total_price } = orderDetail
      await db.query(
        'INSERT INTO order_detail (order_id, product_id, amount, unit_price, total_price) VALUES (?, ?, ?, ?, ?)',
        [order_id, product_id, amount, unit_price, total_price]
      )
    }

    // 响应成功消息
    res.json({ status: 'success', message: '订单新增成功', order_id })
  } catch (error) {
    // 如果发生错误，响应错误消息
    res
      .status(500)
      .json({ status: 'error', message: '订单新增失败', error: error.message })
  }
})

// POST - 新增订单详情
router.post('/order_detail', async function (req, res) {
  try {
    const orderDetails = req.body

    // 遍历订单详情数组，为每个订单详情插入记录
    for (const orderDetail of orderDetails) {
      const { order_id, product_id, amount, unit_price, total_price } =
        orderDetail
      // 在数据库中插入新的 order_detail 记录
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
