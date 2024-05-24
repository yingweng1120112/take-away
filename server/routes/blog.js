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
router.get('/:id', async function (req, res) {
  // 轉為數字
  const id = getIdParam(req)

  const [rows] = await db.query(
    'SELECT * FROM `blog` WHERE pet_id=? ORDER BY `time` desc',
    [id]
  )
  const blog_info = rows.map((v) => ({
    ...v,
    pic: [v.pic1, v.pic2, v.pic3, v.pic4, v.pic5].filter(Boolean),
  }))

  return res.json({ status: 'success', data: { blog_info } })
})

export default router
