const express = require('express')
const { body, param, validationResult } = require('express-validator')

const { getAll, getOne, createOne, updateOne, deleteOne, moveOne } = require('../controllers/ItemController')

const router = express.Router()

router.get('/items', getAll)

router.get(
  '/:TodoId',
  param('TodoId').notEmpty().withMessage('Todo ID is required').isNumeric(),
  (req, res, next) => {
    const error = validationResult(req)
    if (!error.isEmpty()) return res.status(400).json({ error: error.array() })

    next()
  },
  getOne
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
  createOne
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

router.put(
  '/:id/move',
  // param('id')
  //   .notEmpty()
  //   .withMessage('param id is required')
  //   .bail()
  //   .isNumeric()
  //   .withMessage('id must be an integer')
  //   .bail()
  //   .custom(async (value, { req }) => {
  //     const checking = await Item.findOne({ where: { id: value } })
  //     if (checking === null) {
  //       return Promise.reject()
  //     }
  //   })
  //   .withMessage('param id not found'),
  // body('targetTodoId')
  //   .notEmpty()
  //   .withMessage('name is required')
  //   .bail()
  //   .custom(async (value, { req }) => {
  //     const checking = await Todo.findOne({ where: { id: value } })
  //     if (checking === null) {
  //       return Promise.reject()
  //     }
  //   })
  //   .withMessage('targetTodoId not found'),
  // (req, res, next) => {
  //   const error = validationResult(req)
  //   if (!error.isEmpty()) {
  //     return res.status(422).json({
  //       message: 'error',
  //       error: error.array(),
  //     })
  //   }

  //   next()
  // },
  moveOne
)

module.exports = router
