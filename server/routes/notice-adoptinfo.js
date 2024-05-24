import express from 'express'
const router = express.Router()

import { getIdParam } from '#db-helpers/db-tool.js'

import db from '#configs/mysql.js'

// GET所有資料
router.get('/', async function (req, res) {
  const [rows] = await db.query('SELECT * FROM notice_adoptinfo')
  const faqs = rows
  return res.json({ status: 'success', data: { faqs } })
})
// GET單筆資料
router.get('/:id', async function (req, res) {
  const id = getIdParam(req)
  const [rows] = await db.query(
    'SELECT * FROM notice_adoptinfo WHERE question_id=?',
    [id]
  )
  const faq = rows[0]
  return res.json({ status: 'success', data: { faq } })
})
// 特定分類
router.get('/:id', async function (req, res) {
    const id = getIdParam(req)
    const [rows] = await db.query(
      'SELECT * FROM notice_adoptinfo WHERE main_question=?',
      [id]
    )
    const faq = rows[0]
    return res.json({ status: 'success', data: { faq } })
  })

export default router
