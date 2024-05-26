import express from 'express'
const router = express.Router()
// 檢查空物件, 轉換req.params為數字
import { getIdParam } from '#db-helpers/db-tool.js'

// 使用sql查詢的方式
import db from '#configs/mysql.js'

// GET - 得到所有會員資料
router.get('/', async function (req, res) {
  const [rows] = await db.query('SELECT * FROM user')
  const user_info = rows
  return res.json({ status: 'success', data: { user_info } })
})

// GET - 得到單筆資料
router.get('/:id', async function (req, res) {
  const id = getIdParam(req)
  const [rows] = await db.query('SELECT * FROM user WHERE user_id=?', [id])
  const user_info = rows
  return res.json({ status: 'success', data: { user_info } })
})

router.post('/', async function (req, res) {
  try {
    // 從請求中取得 POST 資料
    const postData = req.body

    // 在資料庫中插入新的會員資料
    const result = await db.query('INSERT INTO user SET ?', postData)

    // 回應成功訊息
    res.json({
      status: 'success',
      message: '會員新增成功',
      insertedId: result.insertId,
    })
  } catch (error) {
    // 如果發生錯誤，回應錯誤訊息
    res
      .status(500)
      .json({ status: 'error', message: '會員新增失敗', error: error.message })
  }
})

export default router
