const express = require('express')
const { getAll, createOne } = require('../controllers/TodoController')

const router = express.Router()

router.get('/', getAll)
router.post('/', createOne)

module.exports = router
