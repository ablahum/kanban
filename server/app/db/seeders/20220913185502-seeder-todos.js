'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Todos',
      [
        {
          title: 'kemarin',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'hari ini',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'besok',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'lusa',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Todos', null, {})
  },
}
