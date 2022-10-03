const express = require('express')
const { showAll, showOne, addOne, updateOne, deleteOne } = require('../controllers/ItemController')
const { body, param, validationResult } = require('express-validator')

const router = express.Router()

router.get('/items', showAll)

router.get(
  '/:TodoId',
  param('TodoId').notEmpty().withMessage('Todo ID is required').isNumeric(),
  (req, res, next) => {
    const error = validationResult(req)
    if (!error.isEmpty()) return res.status(400).json({ error: error.array() })

    next()
  },
  showOne
)

router.post(
  '/:TodoId',
  param('TodoId').notEmpty().withMessage('Todo ID is required').isNumeric(),
  body('name').notEmpty().withMessage('Name is required'),
  body('progress_percentage').notEmpty().withMessage('Progress percentage is required').isNumeric().withMessage('Field must be a number'),
  (req, res, next) => {
    const error = validationResult(req)
    if (!error.isEmpty()) return res.status(422).json({ error: error.array() })

    next()
  },
  addOne
)

router.patch(
  '/:id',
  param('id').notEmpty().withMessage('ID is required').isNumeric(),
  // body('TodoId').notEmpty().withMessage('Field must be a number').isNumeric(),
  // body('name').notEmpty().withMessage('Name is required'),
  // body('progress_percentage').notEmpty().withMessage('Progress percentage is required').isNumeric().withMessage('Field must be a number'),
  (req, res, next) => {
    const error = validationResult(req)
    if (!error.isEmpty()) return res.status(400).json({ error: error.array() })

    next()
  },
  updateOne
)

router.delete(
  '/:id',
  param('id').notEmpty().withMessage('ID is required').isNumeric(),
  (req, res, next) => {
    const error = validationResult(req)
    if (!error.isEmpty()) return res.status(400).json({ error: error.array() })

    next()
  },
  deleteOne
)

module.exports = router
