import express from 'express'
const router = express.Router()
// 檢查空物件, 轉換req.params為數字
import { getIdParam } from '#db-helpers/db-tool.js'

// 使用sql查詢的方式
import db from '#configs/mysql.js'

// router.get('/', function (req, res, next) {
//   res.render('index', { title: 'Express' })
// })
// GET - 得到所有reserve_system資料表資料
router.get('/', async function (req, res) {
  const [rows] = await db.query('SELECT * FROM `reserve_system`')
  const reserve_system = rows
  // 處理如果沒找到資料

  // 標準回傳JSON
  return res.json({ status: 'success', data: { reserve_system } })
})

router.post('/', async function (req, res) {
  try {
    const { user_id, pet_id, time } = req.body

    if (!user_id || !pet_id || !time) {
      return res.status(500).json({ status: 'error', message: `找不到資料` })
    }

    const [result] = await db.query('INSERT INTO reserve_system (pet_id, user_id, time) VALUES (?, ?, ?)', [pet_id, user_id, time])
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

export default router
