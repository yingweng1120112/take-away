import express from 'express'
const router = express.Router()

// 檢查空物件, 轉換req.params為數字
import { getIdParam } from '#db-helpers/db-tool.js'

//使用sql查詢的方式
import db from '#configs/mysql.js'

// GET - 得到所有商品資料
router.get('/', async function (req, res) {
  // 獲得query查詢字串參數值
  // const {
  //   page = 1, // 類型number·用於`OFFSET = (Number(page)-1 * Number(perpage))`
  //   perpage = 12, //類型number·用於`LIMET perpage`
  // } = req.query

  //分頁用
  const page = Number(req.query.page) || 1
  const perpage = Number(req.query.perpage) || 12 //預設每頁12筆資料
  const offset = (page - 1) * perpage
  const limit = perpage

  //查詢資料表用
  const [rows] = await db.query(
    `SELECT * FROM product LIMIT ${limit} OFFSET ${offset}`
  )
  const products = rows

  //計算資料筆數
  const [rows2] = await db.query(`SELECT COUNT(*) AS count FROM product`)
  const count = rows2[0]

  //計算目前總共幾頁
  const pageCount = Math.ceil(count / perpage)

  // 處理如果沒找到資料

  // 標準回傳JSON
  return res.json({
    status: 'success',
    data: {
      total: count, //代表目前查到的比數
      pageCount, //代表目前總共多少頁
      page, //代表目前第幾頁
      perpage, //代表目前每頁幾筆資料
      products,
    },
  })
})

// GET - 得到單筆資料(注意，有動態參數時要寫在GET區段最後面)
router.get('/:id', async function (req, res) {
  // 轉為數字
  const id = getIdParam(req)

  // const user = await Product.findByPk(id, {
  //   raw: true, // 只需要資料表中資料
  // })

  const [rows] = await db.query('SELECT * FROM product WHERE product_id = ?', [
    id,
  ])
  const product = rows[0]

  return res.json({ status: 'success', data: { product } })
})

export default router
