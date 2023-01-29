import * as bodyParser from 'body-parser'
import compression from 'compression'
import { Express } from 'express'
import helmet from 'helmet'

import ExceptionHandler from '@app/Exceptions/Handler'
import NotFound from '@app/Exceptions/NotFound'
import routes from '@app/Routes'

const initialize = (app: Express) => {
  app.use(compression())
  app.use(helmet())
  app.use(bodyParser.json({ limit: '50mb' }))
  app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }))

  app.get('/healthcheck', (req, res) => {
    res.status(200).json({ healthy: true })
  })

  app.use('/', routes())

  app.use((req, res, next) => {
    next(new NotFound())
  })

  app.use((err, req, res, next) => {
    return ExceptionHandler.handle(err, res)
  })
}

export default { initialize }
