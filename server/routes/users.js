import express from 'express'
const router = express.Router()

import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import db from '#configs/mysql.js'
dotenv.config()

const secretKey = process.env.SECRET_KEY

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
      const token = jwt.sign(
        {
          phone: userData.phone, // 修正此處為 'userData.phone'
          userPassword: userData.password,
          id: userData.id,
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

export default router

// import express from 'express'
// const router = express.Router()

// // 資料庫使用
// import sequelize from '#configs/db.js'
// const { Member } = sequelize.models

// import db from '#configs/mysql.js'
// // 密碼加密使用
// import { generateHash, compareHash } from '##/db-helpers/password-hash.js'
// // JWT
// import jsonwebtoken from 'jsonwebtoken'
// // 中介軟體，存取私有的會員資料用，會員在授權期內可以用JWT查出資料
// import authenticate from '##/middlewares/authenticate.js'

// // 存取.env檔案
// import 'dotenv/config.js'
// // 定義安全私鑰字串
// const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET

// router.post('/login', async function (req, res, next) {
//   // 從前端來的資料: req.body = {phone:'xxx', password:'yyy'}
//   const loginUser = req.body

//   console.log(loginUser)

//   // 使用phone查詢資料表，把資料表中加密過密碼字串提取出來
//   const [rows] = await db.query('SELECT * FROM user WHERE phone = ?', [
//     loginUser.phone,
//   ])

//   const dbUser = rows[0]

//   // 沒找到
//   if (rows.length === 0) {
//     return res.json({ status: 'error', message: '帳號不存在' })
//   }

//   // 驗証密碼
//   const isValid = await compareHash(loginUser.password, dbUser.password)

//   if (!isValid) {
//     return res.json({ status: 'error', message: '密碼錯誤' })
//   }

//   // 存取令牌中的資訊，只需要id和phone就足夠，需要其它資料再向資料庫查詢
//   const returnUser = {
//     id: dbUser.id,
//     phone: dbUser.phone,
//   }

//   // 產生存取令牌(access token)
//   const accessToken = jsonwebtoken.sign(returnUser, accessTokenSecret, {
//     expiresIn: '3d',
//   })

//   // 在瀏覽器端使用httpOnly cookie儲存accessToken
//   res.cookie('accessToken', accessToken, { httpOnly: true })

//   // 回應accessToken到前端(讓react可以儲在狀態中)
//   return res.json({ status: 'success', data: { accessToken } })
// })

// // 登出
// router.post('/logout', async function (req, res, next) {
//   // 清除瀏覽器對應cookie
//   res.clearCookie('accessToken', { httpOnly: true })
//   res.json({ status: 'success', data: null })
// })

// // 檢查登入狀態，回應會員資料
// router.get('/check', authenticate, async function (req, res, next) {
//   // 如果會員是在存取令牌合法的情況下，req.user中會有會員的id和phone
//   // 使用phone查詢資料表，把資料表中加密過密碼字串提取出來
//   const [rows] = await db.query('SELECT * FROM user WHERE user_id = ?', [
//     req.user.id,
//   ])

//   const user = rows[0]
//   // 不回傳密碼
//   delete user.password

//   return res.json({ status: 'success', data: { user } })
// })

// // 會員註冊使用一般的sql
// router.post('/raw-sql', async function (req, res, next) {
//   console.log(req.body)

//   // 要新增的會員資料
//   const newUser = req.body

//   // 檢查從前端來的資料哪些為必要(name, phone...)
//   if (!newUser.phone || !newUser.email || !newUser.name || !newUser.password) {
//     return res.json({ status: 'error', message: '缺少必要資料' })
//   }

//   // 檢查資料表中有沒有此email或phone
//   const [rows] = await db.query('SELECT * FROM user WHERE phone=? OR email=?', [
//     newUser.phone,
//     newUser.email,
//   ])

//   console.log(rows)

//   if (rows.length > 0) {
//     return res.json({ status: 'error', message: '會員帳號或Email重覆' })
//   }

//   // 加密密碼文字
//   const passwordHash = await generateHash(newUser.password)

//   // INSERT INTO `member`(`name`,`email`,`phone`,`password`) VALUES('nnn','eee','uuu','ppp');
//   const [rows2] = await db.query(
//     'INSERT INTO `user`(`name`,`email`,`phone`,`password`) VALUES(?,?,?,?)',
//     [newUser.name, newUser.email, newUser.phone, passwordHash]
//   )

//   console.log(rows2)
//   // 新增失敗 !rows2.insertId 代表沒新增
//   if (!rows2.insertId) {
//     return res.json({ status: 'error', message: '建立會員失敗' })
//   }

//   // 成功建立會員的回應
//   // 狀態`201`是建立資料的標準回應，
//   // 如有必要可以加上`Location`會員建立的uri在回應標頭中，或是回應剛建立的資料
//   // res.location(`/users/${user.id}`)
//   return res.status(201).json({
//     status: 'success',
//     data: null,
//   })
// })

// router.post('/', async function (req, res, next) {
//   console.log(req.body)

//   // 要新增的會員資料
//   const newUser = req.body

//   // 檢查從前端來的資料哪些為必要(name, phone...)
//   if (!newUser.phone || !newUser.email || !newUser.name || !newUser.password) {
//     return res.json({ status: 'error', message: '缺少必要資料' })
//   }

//   // 執行後user是建立的會員資料，created為布林值
//   // where指的是不可以有相同的資料，如phone與email不能有相同的
//   // defaults用於建立新資料用
//   const [user, created] = await Member.findOrCreate({
//     where: { phone: newUser.phone, email: newUser.email },
//     defaults: {
//       name: newUser.name,
//       password: newUser.password,
//     },
//     logging: console.log,
//   })

//   // 新增失敗 created=false 代表沒新增
//   if (!created) {
//     return res.json({ status: 'error', message: '建立會員失敗' })
//   }

//   // 成功建立會員的回應
//   // 狀態`201`是建立資料的標準回應，
//   // 如有必要可以加上`Location`會員建立的uri在回應標頭中，或是回應剛建立的資料
//   // res.location(`/users/${user.id}`)
//   return res.status(201).json({
//     status: 'success',
//     data: null,
//   })
// })

// /* GET home page. */
// router.get('/', function (req, res, next) {
//   res.render('index', { title: 'users' })
// })

// export default router
