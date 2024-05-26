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
  //   name_like='', //類型string, 用於 `name LIKE %name_like%`
  //   type='', //類型string, 用於 `type IN ()`注意type要轉換成'寵物飼料', '寵物罐頭', '寵物用品', '保健食品', '寵物零食'
  //   species='', //類型string, 用於 `species IN ('狗', '貓')`
  //   price_gte=0,// 類型number·用於`price >= price_gte`
  //   price_lte=2000,// 類型number·用於`price <= price_lte`
  //   page = 1, // 類型number·用於`OFFSET = (Number(page)-1 * Number(perpage))`
  //   perpage = 12, //類型number·用於`LIMET perpage`
  //   sort='price', //類型string, 用途ORDER BY
  //   order='ace', //類型string, 用途ORDER BY
  // } = req.query
  const conditions = []

  // 查詢名稱中有關鍵字的
  const name_like = req.query.name_like || ''
  conditions[0] = name_like ? `name LIKE '%${name_like}%'` : ''

  //產品種類
  const type = req.query.type ? req.query.type.split(',') : []
  conditions[1] =
    type.length > 0 ? `type IN (${type.map((v) => `'${v}'`).join(',')})` : ''
  //動物種類
  const species = req.query.species ? req.query.species.split(',') : []
  conditions[2] =
    species.length > 0
      ? `species IN (${species.map((v) => `'${v}'`).join(',')})`
      : ''

  //價格大於等於．0的情況會是空字串
  const price_gte = Number(req.query.price_gte) || 0
  conditions[3] = price_gte ? `price >= ${price_gte}` : ''
  //價格小於等於．2000是指價格最大值
  const price_lte = Number(req.query.price_lte) || 2000
  conditions[4] = price_lte ? `price <= ${price_lte}` : ''

  //最後組合where從句
  //1.過濾空白的查詢從句
  const cvs = conditions.filter((v) => v)
  //2.使用AND組合有的從句
  const where =
    cvs.length > 0 ? 'WHERE' + cvs.map((v) => `( ${v} )`).join(` AND `) : ''

  console.log(where)

  // 排序
  const sort = req.query.sort || 'product_id'
  const order = req.query.order || 'asc'
  const orderby = `ORDER BY ${sort} ${order}`

  //分頁用
  const page = Number(req.query.page) || 1
  const perpage = Number(req.query.perpage) || 12 //預設每頁12筆資料
  const offset = (page - 1) * perpage
  const limit = perpage

  //查詢本頁商品資料
  const [rows] = await db.query(
    `SELECT * FROM product ${where} ${orderby} LIMIT ${limit} OFFSET ${offset}`
  )
  const products = rows

  //計算目前WHERE過濾條件下的總資料筆數
  const [rows2] = await db.query(
    `SELECT COUNT(*) AS count FROM product ${where}`
  )
  const { count } = rows2[0]

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

  // 获取商品数据
  const [productRows] = await db.query(
    'SELECT * FROM product WHERE product_id = ?',
    [id]
  )
  const product = productRows[0]

  // 获取评论数据
  const [reviewRows] = await db.query(
    'SELECT * FROM reviews WHERE product_id = ?',
    [id]
  )
  const reviews = reviewRows

  // 获取用户数据
  const userIds = reviews.map((review) => review.user_id)
  const [userRows] = await db.query('SELECT * FROM user WHERE user_id IN (?)', [
    userIds,
  ])
  const users = userRows.reduce((acc, user) => {
    acc[user.user_id] = user
    return acc
  }, {})

  // 将用户名称、电话、电子邮件、图片和地址详情加入到评论中
  const populatedReviews = reviews.map((review) => ({
    ...review,
    user_name: users[review.user_id].name,
    user_phone: users[review.user_id].phone,
    user_email: users[review.user_id].email,
    user_pic: users[review.user_id].pic,
    user_address_detail: users[review.user_id].address_detail,
  }))

  const numberOfReviews = populatedReviews.length

  return res.json({
    status: 'success',
    data: { product, reviews: populatedReviews },
    reviewTotal: numberOfReviews,
  })
})

export default router
