import { Router } from 'express'

import employees from './employees'
import tasks from './tasks'
import roles from './roles'

export default () => {
  const app = Router({ mergeParams: true })

  app.use('/employees', employees())
  app.use('/tasks', tasks())
  app.use('/roles', roles())

  return app
}
