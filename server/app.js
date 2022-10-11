const express = require('express')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const cors = require('cors')
const dotenv = require('dotenv')

const todos = require('./app/apis/routes/todo.js')
const items = require('./app/apis/routes/item.js')

const URL = '/api'

const app = express()
dotenv.config()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(cors())

app.use(`${URL}/todos`, todos)
app.use(`${URL}/item`, items)

app.listen(process.env.PORT || 4000)

app.use((req, res, next) => {
  const err = new Error('Not Found')
  err.status = 404
  next(err)
})

app.use((err, req, res, next) => {
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}
  res.status(err.status || 500).json({ message: err.message })
})

module.exports = app
