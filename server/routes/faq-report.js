import express from 'express'
const router = express.Router()

import sequelize from '#configs/db.js'
const { Faq_report } = sequelize.models

router.post('/', async (req, res) => {
  const newForm = req.body
  console.log(newForm)

  // 簡單驗證請求體的內容
  // if (!newForm.email || !newForm.fr_option || !newForm.question) {
  //   return res.status(400).json({ status: 'error', message: '缺少必要的字段' })
  // }
  try {
    const insertform = await Faq_report.create(newForm)

    return res.status(201).json({
      status: 'success',
      data: insertform,
    })
  } catch (err) {
    console.error(err);
    return res.status(500).json({ status: 'error', message: '表單建立失敗' })
  }
})
export default router
