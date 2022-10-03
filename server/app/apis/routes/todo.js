const express = require('express')
const { showAll, addOne } = require('../controllers/TodoController')

const router = express.Router()

router.get('/', showAll)
router.post('/', addOne)

module.exports = router
