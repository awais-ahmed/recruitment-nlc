import { Migration } from 'sequelize-cli'

const migration: Migration = {
  up: async (queryInterface, sequelize) => {
    return queryInterface.createTable('employees', {
      id: {
        type: sequelize.DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      employee_id_number: {
        type: sequelize.DataTypes.STRING,
        allowNull: false,
      },
      name: {
        type: sequelize.DataTypes.STRING,
        allowNull: false,
      },
      surname: {
        type: sequelize.DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: sequelize.DataTypes.STRING,
        allowNull: false,
      },
      hiring_date: {
        type: sequelize.DataTypes.DATEONLY,
        allowNull: true,
      },
      layoff_date: {
        type: sequelize.DataTypes.DATEONLY,
        allowNull: true,
      },
      role_id: {
        type: sequelize.DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'roles',
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
    await queryInterface.dropTable('employees')
  },
}

export default migration
