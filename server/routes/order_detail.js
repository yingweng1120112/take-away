import express from 'express'
const router = express.Router()
// 檢查空物件, 轉換req.params為數字
import { getIdParam } from '#db-helpers/db-tool.js'

// 使用sql查詢的方式
import db from '#configs/mysql.js'

// router.get('/', function (req, res, next) {
//   res.render('index', { title: 'Express' })
// })
// GET - 得到所有會員資料
router.get('/', async function (req, res) {
  const [rows] = await db.query('SELECT * FROM order_detail')
  const order_detail = rows
  // 處理如果沒找到資料

  // 標準回傳JSON
  return res.json({ status: 'success', data: { order_detail } })
})

// GET - 得到單筆資料(注意，有動態參數時要寫在GET區段最後面)
router.get('/:id', async function (req, res) {
  // 轉為數字
  const id = getIdParam(req)

  const [rows] = await db.query(
    'SELECT * FROM order_history WHERE order_detail_id=?',
    [id]
  )
  const order_detail = rows[0]
  return res.json({ status: 'success', data: { order_detail } })
})

router.post('/', async function (req, res) {
  try {
    // 從請求中取得 POST 資料
    const postData = req.body

    // 在資料庫中插入新的訂單資料
    const result = await db.query('INSERT INTO order_history SET ?', postData)

    // 回應成功訊息
    res.json({
      status: 'success',
      message: '訂單新增成功',
      insertedId: result.insertId,
    })
  } catch (error) {
    // 如果發生錯誤，回應錯誤訊息
    res
      .status(500)
      .json({ status: 'error', message: '訂單新增失敗', error: error.message })
  }
})

export default router
