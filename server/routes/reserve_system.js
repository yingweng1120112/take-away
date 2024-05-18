import express from 'express'
const router = express.Router()

// 資料庫使用
import sequelize from '#configs/db.js'
const { Reserve_system } = sequelize.models
// import { Op } from 'sequelize'

router.post('/', async function (req, res) {
  const newUser = req.body
  // 先尋找是否有相同資料
  // const user = await Reserve.findOne({
  //   where: {
  //     [Op.or]: [{ pet: Reserve.pet }, { name: Reserve.name }, { reserveTime: Reserve.reserveTime }],
  //   },
  //   raw: true,
  // })

  // if (pet) {
  //   return res.json({ status: 'error', message: '會員已存在' })
  // }

  // 新增資料
  const dbUser = await Reserve_system.create(newUser)

  // 新增失敗
  // if (!dbUser) {
  //   return res.json({ status: 'error', message: '建立會員失敗' })
  // }

  return res.status(201).json({
    status: 'success',
    data: null,
  })
})

export default router