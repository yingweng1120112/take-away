import express from 'express'

const router = express.Router()

// 檢查空物件, 轉換req.params為數字
import { getIdParam } from '#db-helpers/db-tool.js'

// 使用sql查詢的方式
import db from '#configs/mysql.js'

// GET - 得到id寵物的所有blog資料
router.get('/:id/', async function (req, res) {
  // 轉為數字
  const id = getIdParam(req)
  const page = Number(req.query.page) || 1
  const perpage = Number(req.query.perpage) || 6 // 預設每頁6筆資料
  const offset = (page - 1) * perpage
  const limit = perpage
  const [rows] = await db.query(
    `SELECT * FROM blog WHERE pet_id=? ORDER BY time DESC LIMIT ${limit} OFFSET ${offset} `,
    [id]
  )
  const [rows2] = await db.query(
    `SELECT COUNT(*) AS count FROM blog WHERE pet_id=? `,
    [id]
  )
  const { count } = rows2[0]
  const pageCount = Math.ceil(count / perpage)
  const blog_info = rows.map((v) => ({
    ...v,
    pic: [v.pic1, v.pic2, v.pic3, v.pic4, v.pic5].filter(Boolean),
  }))

  return res.json({
    status: 'success',
    data: {
      total: count, // 代表目前查詢得到的所有筆數
      pageCount, // 代表目前的總共多少頁
      page, // 目前第幾頁
      perpage, // 目前每頁幾筆資料
      blog_info,
    },
  })
})

router.post('/:id', async function (req, res) {
  try {
    const id = getIdParam(req)

    const { content, pic1, pic2, pic3, pic4, pic5 } = req.body

    if (!id) {
      return res.status(500).json({ status: 'error', message: `找不到資料` })
    }

    const [result] = await db.query(
      'INSERT INTO `blog` ( `pet_id`,`content`,`pic1`, `pic2`, `pic3`, `pic4`, `pic5`,`time`) VALUES ( ?, ?, ?, ?, ?, ?, ?,NOW())',
      [id, content, pic1, pic2, pic3, pic4, pic5]
    )
    const insertedId = result.insertId

    return res.json({
      status: 'success',
      data: { id: insertedId },
    })
  } catch (error) {
    return res.status(500).json({ status: 'error1', message: error.message })
  }
})

router.put('/:id', async function (req, res) {
  try {
    const { content, pic1, pic2, pic3, pic4, pic5, blog_id } = req.body

    if (!blog_id) {
      return res.status(500).json({ status: 'error', message: `找不到資料` })
    }
    const [result] = await db.query(
      'UPDATE `blog` SET content=?,pic1=?, pic2=?, pic3=?, pic4=?, pic5=? WHERE `blog_id`=?',
      [content, pic1, pic2, pic3, pic4, pic5, blog_id]
    )
    if (result.affectedRows > 0) {
      res.status(200).json({ status: 'success', message: '資料更新成功' })
    } else {
      res.status(400).json({ status: 'error', message: '資料更新失敗' })
    }
  } catch (err) {
    console.error('Database error:', err)
    res.status(500).json({ status: 'error', message: '伺服器錯誤' })
  }
})

router.delete('/:id', async function (req, res) {
  try {
    const blog_id = getIdParam(req)
    // const { blog_id } = req.body
    const [result] = await db.query(`DELETE FROM blog WHERE blog_id = ?`, [
      blog_id,
    ])

    if (result.affectedRows > 0) {
      return res.json({ status: 'success', message: '貼文已刪除' })
    } else {
      return res
        .status(404)
        .json({ status: 'error', message: `貼文未找到:${req.body}` })
    }
  } catch (error) {
    console.error(error) // 輸出錯誤信息到控制台，便於調試
    return res.status(500).json({ status: 'error', message: error.message })
  }
})
export default router
