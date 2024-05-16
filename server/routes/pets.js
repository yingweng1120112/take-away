import express from 'express'
const router = express.Router()

// 檢查空物件, 轉換req.params為數字
import { getIdParam } from '#db-helpers/db-tool.js'

// 資料庫使用
// import sequelize from '#configs/db.js'
// const { My_Product } = sequelize.models

// 使用sql查詢的方式
import db from '#configs/mysql.js'

// GET - 得到所有資料
// http://localhost:3005/api/my-products?page=1&perpage=100&sort=price&order=desc&name_like=o&price_lte=10000&price_gte=5000&brands=Apple,Google
router.get('/', async function (req, res) {
  // 獲取query查詢字串參數值
  // const {
  //   name_like='', // 類型string, 用於 `name LIKE '%name_like%'`
  //   brands='', // 類型string, 用於`brand IN (brands)` 注意brands要轉換為'Apple', 'Google'
  //   price_gte=0, // 類型number, 用於 `price >= price_gte`
  //   price_lte=15000, // 類型number, 用於 `price <= price_lte`
  //   page = 1, // 類型number，用於 `OFFSET = (Number(page)-1) * Number(perpage)`
  //   perpage = 10, // 類型number，用於 `LIMIT perpage`
  //   sort='id', // 類型string, 用於 ORDER BY
  //   order='asc',  // 類型string, 用於 ORDER BY
  // } = req.query

  // 記錄where查詢條件的陣列
  const conditions = []

  // 名稱
  // 關鍵字`so`(查詢字串qs: name_like=so)
  const name_like = req.query.name_like || ''
  conditions[0] = name_like ? `name LIKE '%${name_like}%'` : ''

  // 品牌
  // (查詢字串會是 'Apple,Google' 逗點分隔字串)
  // 要轉換為 `brand IN ('Apple','Google')`
  const brands = req.query.brands ? req.query.brands.split(',') : []
  conditions[1] =
    brands.length > 0
      ? `brand IN (${brands.map((v) => `'${v}'`).join(',')})`
      : ''

  // 價格
  // 大於等於，0的情況會是空字串
  const price_gte = Number(req.query.price_gte) || 0
  conditions[2] = price_gte ? `price >= ${price_gte}` : ''

  // 價格
  // 小於等於，15000指的是價格最大值
  const price_lte = Number(req.query.price_lte) || 15000
  conditions[3] = price_lte ? `price <= ${price_lte}` : ''

  // 組合where從句
  // 1. 過濾空白的查詢從句
  const cvs = conditions.filter((v) => v)
  // 2. 使用AND組合有的從句
  const where =
    cvs.length > 0 ? 'WHERE ' + cvs.map((v) => `( ${v} )`).join(` AND `) : ''

  // 觀察where
  console.log(where)

  // 排序
  const sort = req.query.sort || 'id'
  const order = req.query.order || 'asc'
  const orderby = `ORDER BY ${sort} ${order}`

  // 分頁用
  const page = Number(req.query.page) || 1
  const perpage = Number(req.query.perpage) || 10 // 預設每頁10筆資料
  const offset = (page - 1) * perpage
  const limit = perpage

  // 查詢本頁商品資料
  const [rows] = await db.query(
    `SELECT * FROM my_product ${where} ${orderby} LIMIT ${limit} OFFSET ${offset}`
  )
  const products = rows

  // 計算目前的where過濾條件下的總資料筆數
  const [rows2] = await db.query(
    `SELECT COUNT(*) AS count FROM my_product ${where}`
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
      products, // 目前這頁的資料陣列
    },
  })
})

// GET - 得到單筆資料(注意，有動態參數時要寫在GET區段最後面)
router.get('/:id', async function (req, res) {
  // 轉為數字
  const id = getIdParam(req)

  // const product = await My_Product.findByPk(id, {
  //   raw: true, // 只需要資料表中資料
  // })

  const [rows] = await db.query('SELECT * FROM my_product WHERE id = ?', [id])
  const product = rows[0]

  return res.json({ status: 'success', data: { product } })
})

export default router
