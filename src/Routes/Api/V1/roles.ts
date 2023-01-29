import { Router } from 'express'

import RoleController from '@app/Controllers/v1/RoleController'

export default () => {
  const roles = Router({ mergeParams: true })

  roles.get('/', RoleController.index)

  return roles
}
