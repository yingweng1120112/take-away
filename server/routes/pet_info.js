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
  // // 獲取query查詢字串參數值
  // const {
  //   name='', // 類型string, 用於 `name LIKE '%name%'`  ==> 毛孩搜尋
  //   weight = 1, // 類型number   ==> 體重
  //   type = '', // 類型string, 用於`type IN (types)` 注意types要轉換為'Apple', 'Google'   ==> 物種
  //   personality_type = '', // 類型string   ==> 測驗類別
  //   gender = '', // 類型string   ==> 性別
  //   page = 1, // 類型number，用於 `OFFSET = (Number(page)-1) * Number(perpage)`
  //   perpage = 10, // 類型number，用於 `LIMIT perpage`
  //   sort='id', // 類型string, 用於 ORDER BY
  //   order='asc',  // 類型string, 用於 ORDER BY
  // } = req.query

  // 記錄where查詢條件的陣列
  const conditions = []

  // 名稱
  // 查詢名稱中有關鍵字`so` (查詢字串qs: name_like=so)
  // const name_like = req.query.name_like || ''
  // conditions[0] = name_like ? `name LIKE '%${name_like}%'` : ''
  // 名稱
  const name_like = req.query.name_like || ''
  conditions[0] = name_like ? `name LIKE '%${name_like}%'` : ''

  // 年齡
  // 大於等於，0的情況會是空字串
  const age_gte = Number(req.query.age_gte) || 0
  conditions[1] = age_gte ? `age >= ${age_gte}` : ''
  // 小於等於，10指的是年齡最大值
  const age_lte = Number(req.query.age_lte) || 20
  conditions[2] = age_lte ? `age <= ${age_lte}` : ''

  // 體型
  // 大於等於，0的情況會是空字串
  const weight_gte = Number(req.query.weight_gte) || 0
  conditions[3] = weight_gte ? `weight >= ${weight_gte}` : ''
  // 小於等於，20指的是體型最大值
  const weight_lte = Number(req.query.weight_lte) || 20
  conditions[4] = weight_lte ? `weight <= ${weight_lte}` : ''

  // 物種
  // (查詢字串會是 'Apple,Google' 逗點分隔字串)
  // 要轉換為 `type IN ('Apple','Google')`
  const type = req.query.type ? req.query.type.split(',') : []
  conditions[5] =
    type.length > 0 ? `type IN (${type.map((v) => `'${v}'`).join(',')})` : ''

  // 領養狀態
  // (查詢字串會是 '歡迎帶我回家, 先暫停認養哦' 逗點分隔字串)
  // 要轉換為 `state IN ('Apple','Google')`
  const state = req.query.state ? req.query.state.split(',') : []
  conditions[6] =
    state.length > 0 ? `state IN (${state.map((v) => `'${v}'`).join(',')})` : ''

  // 測驗類別
  // (查詢字串會是 '敏感型,樂天型' 逗點分隔字串)
  // 要轉換為 `personality_type IN ('敏感型','樂天型')`
  // const personality_type = req.query.personality_type ? req.query.personality_type.split(',') : []
  // conditions[1] =
  //   personality_type.length > 0 ? `personality_type IN (${personality_type.map((v) => `'${v}'`).join(',')})` : ''
  const personality_type = req.query.personality_type
    ? req.query.personality_type.split(',')
    : []
  conditions[7] =
    personality_type.length > 0
      ? `personality_type IN (${personality_type.map((v) => `'${v}'`).join(',')})`
      : ''

  // 性別
  // (查詢字串會是 '男生,女生' 逗點分隔字串)
  // 要轉換為 `gender IN ('男生','女生')`
  // const gender = req.query.gender ? req.query.gender.split(',') : []
  // conditions[1] =
  //   gender.length > 0 ? `gender IN (${gender.map((v) => `'${v}'`).join(',')})` : ''
  const gender = req.query.gender ? req.query.gender.split(',') : []
  conditions[8] =
    gender.length > 0
      ? `gender IN (${gender.map((v) => `'${v}'`).join(',')})`
      : ''

  // 固定條件 ===> 有領養狀態state
  conditions.push(`state IS NOT NULL AND state != ""`)

  // 組合where從句
  // 1. 過濾空白的查詢從句
  const cvs = conditions.filter((v) => v)
  // 2. 使用AND組合有的從句
  const where =
    cvs.length > 0 ? 'WHERE ' + cvs.map((v) => `( ${v} )`).join(` AND `) : ''
  //     const cvs = conditions.filter((v) => v);
  // const where = cvs.length > 0 ? 'WHERE ' + cvs.map((v) => `( ${v} )`).join(' AND ') : '';

  // 觀察where
  console.log('觀察where = ', where)

  // 分頁用
  const page = Number(req.query.page) || 1
  const perpage = Number(req.query.perpage) || 9 // 預設每頁10筆資料
  const offset = (page - 1) * perpage
  const limit = perpage

  // 查詢本頁商品資料
  // 直接下sql篩選出有領養狀態state
  const [rows] = await db.query(
    `SELECT * FROM pet_info ${where} LIMIT ${limit} OFFSET ${offset};`
  )
  const pet_info = rows

  // 計算資料筆數
  const [rows2] = await db.query(
    `SELECT COUNT(*) AS count FROM pet_info ${where}`
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
