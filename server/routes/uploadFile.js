import express from 'express'

import multer from 'multer'

const router = express.Router()

const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, '../client/public/img/petDiary')
  },
  filename: (req, file, cb) => {
    cb(null, `${Buffer.from(file.originalname, 'binary').toString()}`)
  },
})

const upload = multer({ storage: multerStorage })

router.post('/', upload.array('avatar', 5), async function (req, res) {
  try {
    if (!req.files) {
      return res.status(500).json({ status: 'error', message: `找不到資料` })
    }
    return res.json({
      status: 'success',
      message: 'File is uploaded',
      data: { reqfiles: req.files },
    })
  } catch (error) {
    return res.status(500).json({ status: 'error1', message: error.message })
  }
})

export default router
