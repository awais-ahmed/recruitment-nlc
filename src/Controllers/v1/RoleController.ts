import { Request, Response } from 'express'

import ControllerDecorator from '@app/Decorators/ControllerDecorator'
import RoleService from '@app/Services/RoleService'

@ControllerDecorator
class RoleController {
  public async index(request: Request, response: Response) {
    const roles = await RoleService.all()
    response.json({ data: roles })
  }
}

export default new RoleController()
