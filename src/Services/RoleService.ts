import BaseService from '@app/Services/BaseService'
import Role from '@app/Models/Role'

class RoleService extends BaseService<Role> {
  constructor() {
    super(Role)
  }
}

export default new RoleService()
