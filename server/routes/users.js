import express from 'express'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import db from '#configs/mysql.js'
import { getIdParam } from '##/db-helpers/db-tool.js'
// import nodemailer from 'nodemailer'
import forgotPassword from './forgot-password.js'

dotenv.config()
const router = express.Router()
const secretKey = process.env.SECRET_KEY

// 使用 forgot-password 路由
router.use('/forgot-password', forgotPassword)

// 登入
router.post('/', async (req, res) => {
  console.log('錯誤')
  const { phone, password } = req.body

  try {
    const [rows] = await db.query(
      'SELECT * FROM user WHERE phone = ? AND password = ?',
      [phone, password]
    )
    console.log(rows)

    if (rows.length > 0) {
      const userData = rows[0]
      console.log(rows)
      const token = jwt.sign(
        {
          phone: userData.phone, 
          userpassword: userData.password,
          user_id: userData.user_id,
        },
        secretKey,
        { expiresIn: '3h' }
      )

      res.status(200).json({ status: 'success', message: '驗證成功', token })
    } else {
      res.status(401).json({ status: 'error', message: '帳號或密碼錯誤' })
    }
  } catch (err) {
    console.error(err)
    res.status(500).json({ status: 'error', message: '伺服器錯誤' })
  }
})

// 獲取使用者資料
router.get('/user-info/:id', async (req, res) => {
  const userID = getIdParam(req)
  try {
    const [rows] = await db.query('SELECT * FROM user WHERE user_id = ?', [
      userID,
    ])
    if (rows.length > 0) {
      const userData = rows[0]
      console.log(userData)
      res
        .status(200)
        .json({ status: 'success', message: '取得資料成功', userData })
    } else {
      res.status(401).json({ status: 'error', message: '取得資料失敗' })
    }
  } catch (err) {
    console.error(err)
    res.status(500).json({ status: 'error', message: '伺服器錯誤' })
  }
})

// 更新用户信息
router.put('/:id', async (req, res) => {
  const userID = req.params.id
  const { name, phone, email, address_detail } = req.body

  try {
    const [result] = await db.query(
      'UPDATE user SET name = ?, phone = ?,email = ?, address_detail = ? WHERE user_id = ?',
      [name, phone, email, address_detail, userID]
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

export default router
