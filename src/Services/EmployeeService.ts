import BaseService from '@app/Services/BaseService'
import Employee from '@app/Models/Employee'
import Role from '@app/Models/Role'

class EmployeeService extends BaseService<Employee> {
  constructor() {
    super(Employee)
  }
}

export default new EmployeeService()
