import express from 'express'
const router = express.Router()

// 檢查空物件, 轉換req.params為數字
import { getIdParam } from '#db-helpers/db-tool.js'

// 使用sql查詢的方式
import db from '#configs/mysql.js'

/* GET home page. */
// router.get('/', function (req, res, next) {
//   res.render('index', { title: 'my-products' })
// })

// GET - 得到所有會員資料
router.get('/', async function (req, res) {
  const [rows] = await db.query(
    'SELECT * FROM `pet_info` WHERE `adopted` IS NOT NULL AND `adopted` = 1 ;'
  )
  const pets_info = rows
  // 處理如果沒找到資料

  // 標準回傳JSON
  return res.json({ status: 'success', data: { pets_info } })
})

// GET - 得到單筆資料(注意，有動態參數時要寫在GET區段最後面)
router.get('/:id', async function (req, res) {
  // 轉為數字
  const id = getIdParam(req)

  const [rows] = await db.query('SELECT * FROM `pet_info` WHERE pet_id=?', [id])
  const pet_info = rows[0]

  return res.json({ status: 'success', data: { pet_info } })
})

export default router
