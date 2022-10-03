'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Items',
      [
        {
          name: 'redesign',
          progress_percentage: 20,
          TodoId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'refacto',
          progress_percentage: 40,
          TodoId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'slicing',
          progress_percentage: 100,
          TodoId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Items', null, {})
  },
}
