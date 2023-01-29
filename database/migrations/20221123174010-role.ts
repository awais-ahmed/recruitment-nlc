import { Migration } from 'sequelize-cli'

const migration: Migration = {
  up: async (queryInterface, sequelize) => {
    return queryInterface.createTable('roles', {
      id: {
        type: sequelize.DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: sequelize.DataTypes.STRING,
        allowNull: false,
      },
      created_at: {
        type: sequelize.DataTypes.DATE,
        defaultValue: sequelize.literal('NOW()'),
        allowNull: false,
      },
      updated_at: {
        type: sequelize.DataTypes.DATE,
        defaultValue: sequelize.literal('NOW()'),
        allowNull: false,
      },
    })
  },
  down: async (queryInterface, sequelize) => {
    await queryInterface.dropTable('roles')
  },
}

export default migration
