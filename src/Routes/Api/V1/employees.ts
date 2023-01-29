import { Router } from 'express'

import EmployeeController from '@app/Controllers/v1/EmployeeController'

export default () => {
  const employees = Router({ mergeParams: true })

  employees.get('/', EmployeeController.index)
  employees.post('/', EmployeeController.store)
  employees.get('/:id', EmployeeController.show)
  employees.put('/:id', EmployeeController.update)
  employees.patch('/:id', EmployeeController.update)
  employees.delete('/:id', EmployeeController.delete)

  employees.get('/:id/tasks', EmployeeController.tasks)

  return employees
}
