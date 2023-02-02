import BaseService from '@app/Services/BaseService'
import Employee from '@app/Models/Employee'
import Role from '@app/Models/Role'

class EmployeeService extends BaseService<Employee> {
  constructor() {
    super(Employee)
  }

  public async getRoleForUpdate(id: number | any): Promise<any> {
    const result = await this.findOneForUpdate({ where: { id } })
    console.log('getRoleForUpdate result ', result.dataValues)
    return result
  }
}

export default new EmployeeService()
