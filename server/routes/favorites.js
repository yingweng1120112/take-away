import express from 'express'
const router = express.Router()

// 檢查空物件, 轉換req.params為數字
import { getIdParam } from '#db-helpers/db-tool.js'

import authenticate from '#middlewares/authenticate.js'
import sequelize from '#configs/db.js'
const { Favorite } = sequelize.models

// 獲得某會員id的有加入到我的最愛清單中的商品id們
// 此路由只有登入會員能使用
router.get('/', authenticate, async (req, res) => {
  const pet_ids = await Favorite.findAll({
    attributes: ['pet_id'],
    where: {
      user_id: req.user.id,
    },
    raw: true, //只需要資料
  })

  // 將結果中的pet_id取出變為一個純資料的陣列
  const favorites = pet_ids.map((v) => v.pet_id)

  res.json({ status: 'success', data: { favorites } })
})

router.put('/:id', authenticate, async (req, res, next) => {
  const pet_id = getIdParam(req)
  const user_id = req.user.id

  const existFav = await Favorite.findOne({ where: { pet_id, user_id } })
  if (existFav) {
    return res.json({ status: 'error', message: '資料已經存在，新增失敗' })
  }

  const newFav = await Favorite.create({ pet_id, user_id })

  // console.log(newFav.id)

  // 沒有新增到資料
  if (!newFav.id) {
    return res.json({
      status: 'error',
      message: '新增失敗',
    })
  }

  return res.json({ status: 'success', data: null })
})

router.delete('/:id', authenticate, async (req, res, next) => {
  const pet_id = getIdParam(req)
  const user_id = req.user.id

  const affectedRows = await Favorite.destroy({
    where: {
      pet_id,
      user_id,
    },
  })

  // 沒有刪除到任何資料 -> 失敗或沒有資料被刪除
  if (!affectedRows) {
    return res.json({
      status: 'error',
      message: '刪除失敗',
    })
  }

  // 成功
  return res.json({ status: 'success', data: null })
})

export default router
