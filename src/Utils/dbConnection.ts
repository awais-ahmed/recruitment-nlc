import { Sequelize } from 'sequelize-typescript'

import { DatabaseConfig } from '@app/Configs'

import Employee from '@app/Models/Employee'
import Task from '@app/Models/Task'
import Role from '@app/Models/Role'

class DbConnection {
  private sequelize?: Sequelize

  private connect() {
    if (!this.sequelize) {
      const connectionOptions = DatabaseConfig.connections[DatabaseConfig.connection]
      this.sequelize = new Sequelize({
        ...connectionOptions,
        models: [Task, Employee, Role],
      })
    }
  }

  public async disconnect() {
    if (this.sequelize) {
      await this.sequelize.close()
    }
  }

  public initialize() {
    this.connect()
  }
}

export default new DbConnection()
