import express from 'express'

const router = express.Router()

// 檢查空物件, 轉換req.params為數字

// 使用sql查詢的方式
import db from '#configs/mysql.js'
// GET - 得到單筆blog的資料
router.get('/', async function (req, res) {
  // 轉為數字
  const [rows] = await db.query(`SELECT * FROM mypet`)

  const myPet_info = rows

  return res.json({
    status: 'success',
    data: {
      myPet_info,
    },
  })
})
export default router
