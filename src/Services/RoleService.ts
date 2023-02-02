import BaseService from '@app/Services/BaseService'
import Role from '@app/Models/Role'

class RoleService extends BaseService<Role> {
  constructor() {
    super(Role)
  }

  public async getRole(id: number | any): Promise<Role | null> {
    const result = await this.findId({ where: { id } })
    console.log('getRole, result', result)
    return result
  }
}

export default new RoleService()
