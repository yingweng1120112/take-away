import express from 'express'
const router = express.Router()

// 資料庫使用
import sequelize from '#configs/db.js'
const { Reserve } = sequelize.models
// import { Op } from 'sequelize'

router.post('/', async function (req, res) {
  const newUser = req.body

  // 新增資料
  const dbUser = await Reserve.create(newUser)

  // 新增失敗
  if (!dbUser) {
    return res.json({ status: 'error', message: '建立會員失敗' })
  }

  return res.status(201).json({
    status: 'success',
    data: null,
  })
})

export default router