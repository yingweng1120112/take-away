import express from 'express'

const router = express.Router()

// 檢查空物件, 轉換req.params為數字
import { getIdParam } from '#db-helpers/db-tool.js'

// 使用sql查詢的方式
import db from '#configs/mysql.js'
// GET - 得到單筆blog的資料
router.get('/:id', async function (req, res) {
  // 轉為數字
  const id = getIdParam(req)
  const [rows] = await db.query(`SELECT * FROM blog WHERE blog_id=?`, [id])

  const blog_info = rows

  return res.json({
    status: 'success',
    data: {
      blog_info,
    },
  })
})
export default router
