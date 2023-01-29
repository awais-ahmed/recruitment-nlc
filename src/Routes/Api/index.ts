import { Router } from 'express'

import v1 from './V1'

export default () => {
  const app = Router({ mergeParams: true })

  app.use('/', v1())
  app.use('/v1', v1())

  return app
}
