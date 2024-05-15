import express from 'express'
const router = express.Router()

// 使用sql查詢的方式
import db from '#configs/mysql.js'

// GET - 得到所有資料
router.get('/testproduct', async function (req, res) {
  // 查詢所有商品資料
  const [rows] = await db.query(`SELECT * FROM product`)
  const products = rows

  // 標準回傳 JSON
  return res.json({
    status: 'success',
    data: {
      products, // 所有商品資料陣列
    },
  })
})

export default router
