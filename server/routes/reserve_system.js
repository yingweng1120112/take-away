import express from 'express'
const router = express.Router()
// 檢查空物件, 轉換req.params為數字

// 使用sql查詢的方式
import db from '#configs/mysql.js'

router.get('/', async function (req, res) {
  const conditions = []

  // 名稱
  // 關鍵字`so`(查詢字串qs: pet_id=so)
  const pet_id = req.query.pet_id || ''
  conditions[0] = pet_id ? `pet_id LIKE '%${pet_id}%'` : ''

  // 組合where從句
  // 1. 過濾空白的查詢從句
  const cvs = conditions.filter((v) => v)
  // 2. 使用AND組合有的從句
  const where =
    cvs.length > 0 ? 'WHERE ' + cvs.map((v) => `( ${v} )`).join(` AND `) : ''

  // 觀察where
  console.log(where)

  // 排序
  const sort = req.query.sort || 'reservation_id'
  const order = req.query.order || 'asc'
  const orderby = `ORDER BY ${sort} ${order} `
  const page = Number(req.query.page) || 1
  const perpage = Number(req.query.perpage) || 20 // 預設每頁5筆資料
  const offset = (page - 1) * perpage
  const limit = perpage

  const [rows] = await db.query(
    `SELECT * FROM reserve_system  ${where} ${orderby} LIMIT ${limit} OFFSET ${offset};`
  )
  const reserve_system = rows
  // reserve_system?

  // 計算資料筆數
  const [rows2] = await db.query(`SELECT COUNT(*) AS count FROM reserve_system`)
  const { count } = rows2[0]

  const pageCount = Math.ceil(count / perpage)
  return res.json({
    status: 'success',
    data: {
      total: count,
      pageCount,
      page,
      perpage,
      reserve_system,
    },
  })
})
// reserve_system?
router.post('/', async function (req, res) {
  try {
    const { user_id, pet_id, time } = req.body
    const [result] = await db.query(
      'INSERT INTO reserve_system (pet_id, user_id, time) VALUES (?, ?, ?)',
      [pet_id, user_id, time]
    )
    const insertedId = result.insertId

    return res.json({ status: 'success', data: { id: insertedId } })
  } catch (error) {
    console.error(error) // 输出错误信息到控制台，便于调试
    return res.status(500).json({ status: 'error', message: error.message })
  }
})
// GET - 得到單筆資料(注意，有動態參數時要寫在GET區段最後面)
// router.get('/:id', async function (req, res) {
//   // 轉為數字
//   const id = getIdParam(req)

//   const [rows] = await db.query('SELECT * FROM `reserve_system` WHERE reservation_id=?', [id])
//   const reserve_system = rows[0]
//   return res.json({ status: 'success', data: { reserve_system } })
// })

// 刪除預約紀錄
router.delete('/:reservation_id', async function (req, res) {
  try {
    const { reservation_id } = req.params
    const [result] = await db.query(
      `DELETE FROM reserve_system WHERE reservation_id = ?`,
      [reservation_id]
    )

    if (result.affectedRows > 0) {
      return res.json({ status: 'success', message: '預約紀錄已刪除' })
    } else {
      return res
        .status(404)
        .json({ status: 'error', message: '預約紀錄未找到' })
    }
  } catch (error) {
    console.error(error) // 輸出錯誤信息到控制台，便於調試
    return res.status(500).json({ status: 'error', message: error.message })
  }
})
export default router
