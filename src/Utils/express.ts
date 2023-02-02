import * as bodyParser from 'body-parser'
import compression from 'compression'
import { Express } from 'express'
import { expressjwt, Request as JWTRequest } from 'express-jwt'
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
  //per i test il jwt lo genero dal sito jwt.io
  //qui semplicemente gli ho hardcodato la private key
  //gli utenti li gestisco nel file .env
  //per fare una cosa che va in produzione dovrei lavorare sul jwt
  //quindi mettere nel payload del jwt i permessi dei vari utenti
  //io invece li sto gestendo lato mysql ed anche a codice
  app.use(
    '/',
    expressjwt({ secret: process.env.PRIVATE_KEY_FOR_JWT_GEN, algorithms: ['HS256'] }),
    routes()
  )

  app.use((req, res, next) => {
    next(new NotFound())
  })

  app.use((err, req, res, next) => {
    return ExceptionHandler.handle(err, res)
  })
}

export default { initialize }
