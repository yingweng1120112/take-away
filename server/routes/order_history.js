import express from 'express'
const router = express.Router()
import db from '#configs/mysql.js'
import { getIdParam } from '#db-helpers/db-tool.js'

// GET - 得到所有订单历史数据
router.get('/', async function (req, res) {
  const [rows] = await db.query('SELECT * FROM order_history')
  const order_history = rows
  return res.json({ status: 'success', data: { order_history } })
})

// GET - 得到单笔订单历史数据
router.get('/:id', async function (req, res) {
  const id = getIdParam(req)
  const [rows] = await db.query(
    'SELECT * FROM order_history WHERE order_history_id=?',
    [id]
  )
  const product = rows[0]
  return res.json({ status: 'success', data: { product } })
})

// POST - 新增订单历史
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

    const [resultHistory] = await db.query(
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

    res.json({ status: 'success', message: '订单新增成功', order_id })
  } catch (error) {
    res
      .status(500)
      .json({ status: 'error', message: '订单新增失败', error: error.message })
  }
})

export default router
