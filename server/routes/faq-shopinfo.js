import express from 'express'
const router = express.Router()

import { getIdParam } from '#db-helpers/db-tool.js'

// import sequelize from '#configs/db.js'
// const { Faq_shopinfo } = sequelize.models

import db from '#configs/mysql.js'

// import { QueryTypes, Op } from 'sequelize'
// import faq_shopinfo from '##/models/faq_shopinfo.js'
// GET所有資料
router.get('/', async function (req, res) {
  const [rows] = await db.query('SELECT * FROM faq_shopinfo')
  const faqs = rows
  return res.json({ status: 'success', data: { faqs } })
})
// GET單筆資料
router.get('/:id', async function (req, res) {
  const id = getIdParam(req)
  const [rows] = await db.query(
    'SELECT * FROM faq_shopinfo WHERE question_id=?',
    [id]
  )
  const faq = rows[0]
  return res.json({ status: 'success', data: { faq } })
})

export default router
