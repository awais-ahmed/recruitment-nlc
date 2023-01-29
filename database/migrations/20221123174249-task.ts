import { Migration } from 'sequelize-cli'

const migration: Migration = {
  up: async (queryInterface, sequelize) => {
    return queryInterface.createTable('tasks', {
      id: {
        type: sequelize.DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: sequelize.DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: sequelize.DataTypes.TEXT,
        allowNull: false,
      },
      status: {
        type: sequelize.DataTypes.ENUM({
          values: ['NEW', 'IN PROGRESS', 'DONE'],
        }),
        defaultValue: 'NEW',
        allowNull: false,
      },
      employee_id: {
        type: sequelize.DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'employees',
          key: 'id',
        },
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
      deleted_at: {
        type: sequelize.DataTypes.DATE,
        allowNull: true,
      },
    })
  },
  down: async (queryInterface, sequelize) => {
    await queryInterface.dropTable('tasks')
  },
}

export default migration
