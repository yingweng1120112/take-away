import express from 'express'
// import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import db from '#configs/mysql.js'
import nodemailer from 'nodemailer'

dotenv.config()
const router = express.Router()
// const secretKey = process.env.SECRET_KEY

// 發送驗證碼
router.post('/send-code', async (req, res) => {
  const { email } = req.body
  const verification_code = Math.floor(100000 + Math.random() * 900000) // 生成六位數驗證碼

  try {
    // 把驗證碼存到資料庫
    console.log(`Updating verification code for email: ${email}`)
    const [updateResult] = await db.query(
      'UPDATE user SET verification_code = ? WHERE email = ?',
      [verification_code, email]
    )
    console.log(`Update result: ${JSON.stringify(updateResult)}`)

    if (updateResult.affectedRows === 0) {
      return res
        .status(404)
        .json({ status: 'error', message: 'Email not found' })
    }

    // 發送驗證碼email
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.SMTP_TO_EMAIL,
        pass: process.env.SMTP_TO_PASSWORD,
      },
      debug: true,
      logger: true,
    })

    const mailOptions = {
      from: process.env.SMTP_TO_EMAIL,
      to: email,
      subject: '密碼重設驗證碼',
      text: `你的驗證碼是：${verification_code}`,
    }

    console.log(`Sending verification code to email: ${email}`)
    await transporter.sendMail(mailOptions)
    console.log('Verification code sent successfully')

    res.status(200).json({ status: 'success', message: '驗證碼已發送' })
  } catch (err) {
    console.error('Error in /send-code route:', err)
    res.status(500).json({ status: 'error', message: '發送驗證碼失敗' })
  }
})

// 重設密碼
router.post('/reset', async (req, res) => {
  const { email, verification_code, password } = req.body

  try {
    // 驗證驗證碼
    const [rows] = await db.query(
      'SELECT * FROM user WHERE email = ? AND verification_code = ?',
      [email, verification_code]
    )

    if (rows.length > 0) {
      // 更新密碼
      await db.query('UPDATE user SET password = ? WHERE email = ?', [
        password,
        email,
      ])
      res.status(200).json({ status: 'success', message: '密碼已重設' })
    } else {
      res.status(400).json({ status: 'error', message: '驗證碼錯誤' })
    }
  } catch (err) {
    console.error(err)
    res.status(500).json({ status: 'error', message: '重設密碼失敗' })
  }
})

export default router
