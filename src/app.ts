import 'reflect-metadata'
import express from 'express'

import { Logger, Express, DbConnection } from '@app/Utils'
import { AppConfig } from '@app/Configs'

async function startServer() {
  const app = express()

  DbConnection.initialize()
  Express.initialize(app)

  app
    .listen(AppConfig.port, AppConfig.host, () => {
      Logger.info(`Server listening on port: ${AppConfig.port}`)
    })
    .on('error', (err) => {
      Logger.error(err)
      process.exit(1)
    })
}

startServer().catch(console.error)
