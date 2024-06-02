import express from 'express'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import db from '#configs/mysql.js'
import { getIdParam } from '##/db-helpers/db-tool.js'
import forgotPassword from './forgot-password.js'
import { OAuth2Client } from 'google-auth-library'

dotenv.config()
const router = express.Router()
const secretKey = process.env.SECRET_KEY
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID)

// 使用 forgot-password 路由
router.use('/forgot-password', forgotPassword)

// 註冊
router.post('/register-form', async function (req, res) {
  console.log(req.body)

  // 要新增的會員資料
  const { name, email, phone, password } = req.body

  // 檢查從前端來的資料哪些為必要
  if (!name || !phone || !email || !password) {
    return res.json({ status: 'error', message: '缺少必要資料' })
  }

  // 檢查資料表中有沒有此email或phone
  const [rows] = await db.query('SELECT * FROM user WHERE phone=? OR email=?', [
    phone,
    email,
  ])

  if (rows.length > 0) {
    return res.json({ status: 'error', message: '會員帳號或Email重覆' })
  }

  // 加密密碼文字
  // const passwordHash = await generateHash(password)

  // 插入新的會員資料
  const [rows2] = await db.query(
    'INSERT INTO `user`(`name`,`email`,`phone`,`password`) VALUES(?,?,?,?)',
    [name, email, phone, password]
  )

  // 新增失敗 !rows2.insertId 代表沒新增
  if (!rows2.insertId) {
    return res.json({ status: 'error', message: '建立會員失敗' })
  }

  // 成功建立會員的回應，並返回新建立的用戶數據
  return res.status(201).json({
    status: 'success',
    data: {
      user_id: rows2.insertId,
      name,
      email,
      phone,
    },
  })
})

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

// Google登入
router.post('/google-login', async (req, res) => {
  const { token } = req.body

  try {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID,
    })

    const payload = ticket.getPayload()
    const { sub, email, name } = payload

    let [rows] = await db.query('SELECT * FROM user WHERE google_uid = ?', [
      sub,
    ])

    if (rows.length === 0) {
      const [result] = await db.query(
        'INSERT INTO user (name, email, google_uid) VALUES (?, ?, ?)',
        [name, email, sub]
      )

      if (!result.insertId) {
        return res
          .status(500)
          .json({ status: 'error', message: '建立會員失敗' })
      }

      rows = [{ user_id: result.insertId, name, email }]
    }

    const userData = rows[0]
    const jwtToken = jwt.sign(
      {
        user_id: userData.user_id,
        email: userData.email,
      },
      secretKey,
      { expiresIn: '3h' }
    )

    res
      .status(200)
      .json({ status: 'success', message: '驗證成功', token: jwtToken })
  } catch (error) {
    console.error(error)
    res.status(500).json({ status: 'error', message: '伺服器錯誤' })
  }
})

export default router
