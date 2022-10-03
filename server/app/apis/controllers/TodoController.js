const { Todo, Item } = require('../../db/models')

module.exports = {
  showAll: async (req, res, next) => {
    try {
      // const todos = await Todo.findAll()
      const todos = await Todo.findAll({
        include: {
          model: Item,
        },
      })

      res.status(200).json(todos)
    } catch (err) {
      next(err)
    }
  },
  addOne: async (req, res, next) => {
    const { title } = req.body

    try {
      const todo = await Todo.create({ title })

      res.status(201).json({ msg: 'Create todo successful', todo })
    } catch (err) {
      next(err)
    }
  },
}
