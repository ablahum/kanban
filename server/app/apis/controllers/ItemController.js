const { Item } = require('../../db/models')

module.exports = {
  showAll: async (req, res, next) => {
    try {
      const items = await Item.findAll()

      res.status(200).json(items)
    } catch (err) {
      next(err)
    }
  },

  showOne: async (req, res, next) => {
    const { TodoId } = req.params

    try {
      const items = await Item.findAll({ where: { TodoId } })

      res.status(200).json(items)
    } catch (err) {
      next(err)
    }
  },

  addOne: async (req, res, next) => {
    const { TodoId } = req.params
    const { name, progress_percentage } = req.body

    try {
      if (progress_percentage < 1 || progress_percentage > 100) res.status(406).json({ msg: 'Progress percentage must be near 1-100' })

      const item = await Item.create({ name, progress_percentage, TodoId })

      res.status(201).json({ msg: 'Create item successful', item })
    } catch (err) {
      next(err)
    }
  },

  updateOne: async (req, res, next) => {
    const { id } = req.params
    const { TodoId, name, progress_percentage } = req.body

    try {
      const item = await Item.findOne({ where: { id } })

      if (!item) res.status(404).json({ msg: 'Item not found' })

      item.set({ TodoId, name, progress_percentage })
      // item.TodoId = TodoId

      await item.save()

      res.status(200).json({ msg: 'Update item successful', item })
    } catch (err) {
      next(err)
    }
  },

  deleteOne: async (req, res, next) => {
    const { id } = req.params

    try {
      const item = await Item.findOne({ where: { id } })

      if (!item) res.status(404).json({ msg: 'Item not found' })

      await item.destroy()

      res.status(200).json({ msg: 'Delete item successful', item })
    } catch (err) {
      next(err)
    }
  },
}
