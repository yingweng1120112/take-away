// connections/index.js
const mongoose = require('mongoose')

const DB = process.env.DBPATH.replace('<password>', process.env.PASSWORD)

mongoose.connect(DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('Database connected'))
  .catch(err => console.error('Database connection error:', err))
