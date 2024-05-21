import express from 'express'
const router = express.Router()

// 資料庫使用
import sequelize from '#configs/db.js'
const { Adopt } = sequelize.models

// POST 請求處理
router.post('/', async function (req, res) {
  const newUser = req.body
  console.log(newUser)

  try {
    // 新增資料
    const dbUser = await Adopt.create(newUser)

    // 新增成功
    return res.status(201).json({
      status: 'success',
      data: dbUser,
    })
  } catch (error) {
    console.error(error)
    // 新增失敗
    return res.status(500).json({ status: 'error', message: '建立會員失敗' })
  }
})

export default router
