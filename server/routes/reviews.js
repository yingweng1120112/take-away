import express from 'express'
const router = express.Router()
// 檢查空物件, 轉換req.params為數字
import { getIdParam } from '#db-helpers/db-tool.js'

// 資料庫使用
import db from '#configs/mysql.js'

// GET - 得到所有reviews資料表資料
router.get('/', async function (req, res) {
  // 直接下sql篩選出有領養狀態state
  const [rows] = await db.query('SELECT * FROM reviews')
  const reviews = rows
  // 處理如果沒找到資料

  // 標準回傳JSON
  return res.json({ status: 'success', data: { reviews } })
})

// POST - 新增評論
router.post('/', async (req, res) => {
  try {
    const { product_id, user_id, content, score } = req.body
    const time = new Date() // 獲取當前時間

    // 確保必要的欄位存在
    if (!product_id || !user_id || !content || score === undefined) {
      return res
        .status(400)
        .json({ status: 'error', message: '缺少必要的欄位' })
    }

    // 新增評論到資料庫
    const [result] = await db.query(
      'INSERT INTO reviews (product_id, user_id, content, time, score) VALUES (?, ?, ?, ?, ?)',
      [product_id, user_id, content, time, score]
    )

    // 獲取新插入評論的ID
    const newReviewId = result.insertId

    // 獲取新插入的評論
    const [newReviewRows] = await db.query(
      'SELECT * FROM reviews WHERE reviews_id = ?',
      [newReviewId]
    )
    const newReview = newReviewRows[0]

    return res.status(201).json({ status: 'success', data: newReview })
  } catch (error) {
    console.error(error)
    return res.status(500).json({ status: 'error', message: '新增評論失敗' })
  }
})

export default router
