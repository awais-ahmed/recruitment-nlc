import path from 'path'
import { Options } from 'sequelize/types/sequelize'

interface DatabaseConfig {
  connection: 'mysql' | 'sqlite'
  connections: Record<string, Options>
}

const databaseConfig: DatabaseConfig = {
  connection: process.env.DB_CONNECTION as 'mysql' | 'sqlite',

  connections: {
    mysql: {
      dialect: 'mysql',
      host: process.env.DB_HOST as string,
      port: Number(process.env.DB_PORT as string),
      username: process.env.DB_USER as string,
      password: process.env.DB_PASSWORD as string,
      database: process.env.DB_NAME as string,
    },

    sqlite: {
      dialect: 'sqlite',
      storage: path.join(__dirname, '..', '..', 'database', 'db.sqlite3'),
    },
  },
}

export default databaseConfig
