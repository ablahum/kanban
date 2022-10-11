const { Item } = require('../../db/models')

module.exports = {
  getAll: async (req, res, next) => {
    try {
      const items = await Item.findAll()

      return res.status(200).json(items)
    } catch (err) {
      next(err)
    }
  },

  getOne: async (req, res, next) => {
    const { TodoId } = req.params

    try {
      const items = await Item.findAll({ where: { TodoId } })

      return res.status(200).json(items)
    } catch (err) {
      next(err)
    }
  },

  createOne: async (req, res, next) => {
    const { TodoId } = req.params
    const { name, progress_percentage } = req.body

    try {
      if (progress_percentage < 1 || progress_percentage > 100)
        return res.status(406).json({
          msg: 'Progress percentage must be near 1-100',
        })

      const item = await Item.create({
        name,
        progress_percentage,
        TodoId,
      })

      return res.status(201).json({
        msg: 'Create item successful',
        item,
      })
    } catch (err) {
      next(err)
    }
  },

  updateOne: async (req, res, next) => {
    const { id } = req.params
    const { TodoId, name, progress_percentage } = req.body

    try {
      const item = await Item.findOne({ where: { id } })

      if (!item) return res.status(404).json({ msg: 'Item not found' })

      if (progress_percentage < 1 || progress_percentage > 100)
        return res.status(406).json({
          msg: 'Progress percentage must be near 1-100',
        })

      item.set({ TodoId, name, progress_percentage })
      await item.save()

      return res.status(200).json({
        msg: 'Update item successful',
        item,
      })
    } catch (err) {
      next(err)
    }
  },

  deleteOne: async (req, res, next) => {
    const { id } = req.params

    try {
      const item = await Item.findOne({ where: { id } })

      if (!item)
        return res.status(404).json({
          msg: 'Item not found',
        })

      await item.destroy()

      return res.status(200).json({
        msg: 'Delete e item successful',
        item,
      })
    } catch (err) {
      next(err)
    }
  },

  deleteOne: async (req, res, next) => {
    const { id } = req.params

    try {
      const item = await Item.findOne({ where: { id } })

      if (!item)
        return res.status(404).json({
          msg: 'Item not found',
        })

      await item.destroy()

      return res.status(200).json({
        msg: 'Delete e item successful',
        item,
      })
    } catch (err) {
      next(err)
    }
  },

  move: async (req, res) => {
    const { id } = req.params
    const { targetTodoId } = req.body

    try {
      const item = await Item.findOne({
        where: { id },
      })

      item.TodoId = targetTodoId
      await item.save()

      res.status(200).json({
        msg: 'Move item successful',
        item,
      })
    } catch (err) {
      next(err)
    }
  },
}
