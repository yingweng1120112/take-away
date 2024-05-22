import express from 'express'
const router = express.Router()
// 檢查空物件, 轉換req.params為數字
import { getIdParam } from '#db-helpers/db-tool.js'

// 使用sql查詢的方式
import db from '#configs/mysql.js'

// router.get('/', function (req, res, next) {
//   res.render('index', { title: 'Express' })
// })
// GET - 得到所有pet_info資料表資料
router.get('/', async function (req, res) {
  // 分頁用
  const page = Number(req.query.page) || 1
  const perpage = Number(req.query.perpage) || 9 // 預設每頁10筆資料
  const offset = (page - 1) * perpage
  const limit = perpage

  // 直接下sql篩選出有領養狀態state
  const [rows] = await db.query(
    `SELECT * FROM pet_info WHERE state IS NOT NULL AND state != "" LIMIT ${limit} OFFSET ${offset};`
  )
  const pet_info = rows

  // 計算資料筆數
  const [rows2] = await db.query(
    `SELECT COUNT(*) AS count FROM pet_info WHERE state IS NOT NULL AND state != ""`
  )
  const { count } = rows2[0]

  // 計算目前總共幾頁
  const pageCount = Math.ceil(count / perpage)

  // 處理如果沒找到資料

  // 標準回傳JSON
  return res.json({
    status: 'success',
    data: {
      total: count, // 代表目前查詢得到的所有筆數
      pageCount, // 代表目前的總共多少頁
      page, // 目前第幾頁
      perpage, // 目前每頁幾筆資料
      pet_info,
    },
  })
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
