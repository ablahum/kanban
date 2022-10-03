'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Todo extends Model {
    static associate(models) {
      Todo.hasMany(models.Item)
    }
  }
  Todo.init(
    {
      title: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Todo',
    }
  )
  return Todo
}
