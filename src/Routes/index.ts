import { Router } from 'express'

import api from './Api'

export default () => {
  const app = Router({ mergeParams: true })

  app.use('/api', api())

  return app
}
