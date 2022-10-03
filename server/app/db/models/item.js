'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    static associate(models) {
      Item.belongsTo(models.Todo)
    }
  }
  Item.init(
    {
      name: DataTypes.STRING,
      progress_percentage: DataTypes.INTEGER,
      TodoId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Item',
    }
  )
  return Item
}
