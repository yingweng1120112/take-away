import express from 'express'
const router = express.Router()

// 檢查空物件, 轉換req.params為數字
import { getIdParam } from '#db-helpers/db-tool.js'

// 使用sql查詢的方式
import db from '#configs/mysql.js'

// GET - 得到所有會員資料
router.get('/', async function (req, res) {
  // 獲取query查詢字串參數值
  // const {
  //   name_like='', // 類型string, 用於 `name LIKE '%name_like%'`
  //   type='', // 類型string, 用於`type IN (brands)` 注意type要轉換為'狗狗', '貓貓'
  //   gender='', // 類型string, 用於`gender IN (sex)` 注意gender要轉換為'男生', '女生'
  //   age_gte=0, // 類型number, 用於 `age >= age_gte`
  //   age_lte=30, // 類型number, 用於 `age <= age_lte`
  //   weight_gte=0, // 類型number, 用於 `weight >= height_gte`
  //   weight_lte=50, // 類型number, 用於 `weight <= height_lte`
  //   page = 1, // 類型number，用於 `OFFSET = (Number(page)-1) * Number(perpage)`
  //   perpage = 10, // 類型number，用於 `LIMIT perpage`
  // } = req.query
  const conditions = []
  // 名稱
  // 關鍵字`so`(查詢字串qs: name_like=so)
  const name_like = req.query.name_like || ''
  conditions[0] = name_like ? `name LIKE '%${name_like}%'` : ''
  // 物種
  // (查詢字串會是 '狗狗,貓貓' 逗點分隔字串)
  // 要轉換為 `type IN ('Apple','Google')`
  const type = req.query.type ? req.query.type.split(',') : []
  conditions[1] =
    type.length > 0 ? `type IN (${type.map((v) => `'${v}'`).join(',')})` : ''
  // 年齡
  // 大於等於，0的情況會是空字串
  const age_gte = Number(req.query.age_gte) || 0
  // console.log(Number(req.query.age_gte))
  conditions[2] = age_gte ? `age >= ${age_gte}` : ''

  // 年齡
  // 小於等於，30指的是價格最大值
  const age_lte = Number(req.query.age_lte) || 30
  conditions[3] = age_lte ? `age <= ${age_lte}` : ''
  // 重量
  // 大於等於，0的情況會是空字串
  const weight_gte = Number(req.query.weight_gte) || 0
  conditions[4] = weight_gte ? `weight >= ${weight_gte}` : ''

  // 重量
  // 小於等於，30指的是價格最大值
  const weight_lte = Number(req.query.weight_lte) || 50
  conditions[5] = weight_lte ? `weight <= ${weight_lte}` : ''

  // 組合where從句
  // 1. 過濾空白的查詢從句
  // console.log(conditions)
  const cvs = conditions.filter((v) => v)
  // console.log(cvs)
  // 2. 使用AND組合有的從句
  const where =
    cvs.length > 0 ? 'WHERE ' + cvs.map((v) => `( ${v} )`).join(` AND `) : ''

  // 觀察where
  // console.log(where)
  // 分頁用
  const page = Number(req.query.page) || 1
  const perpage = Number(req.query.perpage) || 12 // 預設每頁12筆資料
  const offset = (page - 1) * perpage
  const limit = perpage

  const adopted = `AND adopted IS NOT NULL AND adopted = 1`
  const [rows] = await db.query(
    `SELECT * FROM pet_info ${where} ${adopted} LIMIT ${limit} OFFSET ${offset}`
  )
  const pets_info = rows

  const [rows2] = await db.query(
    `SELECT COUNT(*) AS count FROM pet_info ${where} ${adopted}`
  )
  const { count } = rows2[0]

  const pageCount = Math.ceil(count / perpage)
  // 標準回傳JSON
  return res.json({
    status: 'success',
    data: {
      total: count, // 代表目前查詢得到的所有筆數
      pageCount, // 代表目前的總共多少頁
      page, // 目前第幾頁
      perpage, // 目前每頁幾筆資料
      pets_info,
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
