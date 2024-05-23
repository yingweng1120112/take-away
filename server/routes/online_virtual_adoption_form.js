import express from 'express'
const router = express.Router()
// 檢查空物件, 轉換req.params為數字
import { getIdParam } from '#db-helpers/db-tool.js'

// 使用sql查詢的方式
import db from '#configs/mysql.js'

// GET - 得到所有online_virtual_adoption_form資料表資料
router.get('/', async function (req, res) {
  // 直接下sql篩選出有領養狀態state
  const [rows] = await db.query('SELECT * FROM online_virtual_adoption_form')
  const online_virtual_adoption_form = rows
  // 處理如果沒找到資料

  // 標準回傳JSON
  return res.json({ status: 'success', data: { online_virtual_adoption_form } })
})
router.post('/', async function (req, res) {
  try {
    const { pet_id, user_id, donation_method, amount, payment, donation, donate_address } = req.body;

    // 检查必要的字段是否存在
    if (!user_id || !pet_id || !donation_method || !amount || !payment || !donation || !donate_address) {
      return res.status(400).json({ status: 'error', message: '缺少必要的字段' })
    }

    // 插入数据到数据库
    const [result] = await db.query(
      'INSERT INTO `online_virtual_adoption_form` (`pet_id`, `user_id`, `donation_method`, `amount`, `payment`, `donation`, `donate_address`) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [pet_id, user_id, donation_method, amount, payment, donation, donate_address]
    )

    // 检查插入结果并返回插入的ID
    if (result && result.insertId) {
      return res.json({ status: 'success', data: { id: result.insertId } });
    } else {
      throw new Error('插入数据失败')
    }
  } catch (error) {
    console.error('Database Insert Error:', error) // 输出详细错误信息到控制台
    return res.status(500).json({ status: 'error', message: '服务器内部错误' })
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
