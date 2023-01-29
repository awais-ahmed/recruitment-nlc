import { Op } from 'sequelize'
import { Migration } from 'sequelize-cli'

// The type of Migration is the same as Seeder
const seeder: Migration = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'roles',
      [{ name: 'Guest' }, { name: 'Admin' }, { name: 'Viewer' }],
      {}
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('roles', { name: { [Op.in]: ['Guest', 'Admin', 'Viewer'] } })
  },
}

export default seeder
