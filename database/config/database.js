require('ts-node/register')
require('dotenv').config()

const databaseConfig = require('../../src/Configs/database').default

module.exports = {
  development: databaseConfig.connections[databaseConfig.connection],
  test: databaseConfig.connections[databaseConfig.connection],
  production: databaseConfig.connections[databaseConfig.connection],
}
