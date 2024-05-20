import express from 'express'
const router = express.Router()

// 檢查空物件, 轉換req.params為數字
import { getIdParam } from '#db-helpers/db-tool.js'

// 資料庫使用
import sequelize from '#configs/db.js'
const { Product } = sequelize.models

import db from '#configs/mysql.js'

/* GET home page. */
// router.get('/', function (req, res, next) {
//   res.render('index', { title: 'Products' })
// })

// GET - 得到所有商品資料
router.get('/', async function (req, res) {
  // const products = await Product.findAll({ logging: console.log })

  const [rows] = await db.query('SELECT * FROM product')
  const products = rows

  // 處理如果沒找到資料

  // 標準回傳JSON
  return res.json({ status: 'success', data: { products } })
})

// GET - 得到單筆資料(注意，有動態參數時要寫在GET區段最後面)
router.get('/:id', async function (req, res) {
  // 轉為數字
  const id = getIdParam(req)

  const user = await Product.findByPk(id, {
    raw: true, // 只需要資料表中資料
  })

  return res.json({ status: 'success', data: { user } })
})
export default router
