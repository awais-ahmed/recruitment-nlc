import { Request, Response } from 'express'

import ControllerDecorator from '@app/Decorators/ControllerDecorator'
import EmployeeService from '@app/Services/EmployeeService'
import TaskService from '@app/Services/TaskService'

@ControllerDecorator
class EmployeeController {
  public async index(request: Request, response: Response) {
    const page = Number(request.query.page)
    const limit = Number(request.query.limit)
    const offset = (page - 1) * limit
    const employees = await EmployeeService.all({ offset, limit })
    response.json({ data: employees })
  }

  public async store(request: Request, response: Response) {
    const payload = request.body
    const employee = await EmployeeService.store(payload)
    response.json({ data: employee })
  }

  public async show(request: Request, response: Response) {
    const { id } = request.params
    const employee = await EmployeeService.findOrFail(id)
    response.json({ data: employee })
  }

  public async update(request: Request, response: Response) {
    const { id } = request.params
    const payload = request.body
    const employee = await EmployeeService.update(id, payload)
    response.json({ data: employee })
  }

  public async delete(request: Request, response: Response) {
    const { id } = request.params
    await EmployeeService.delete(id)
    response.json({ success: true })
  }

  public async tasks(request: Request, response: Response) {
    const page = Number(request.query.page)
    const limit = Number(request.query.limit)
    const offset = (page - 1) * limit
    const { id } = request.params
    const results = []
    const tasks = await TaskService.all()
    for (const task in tasks) {
      if (tasks[task].dataValues.employee_id === Number(id)) {
        results.push(tasks[task])
      }
    }
    response.json({ data: results })
  }

  public async allEmpAndTasks(request: Request, response: Response) {
    const employees = await EmployeeService.all()
    const employeesTasks = await Promise.all(
      employees.map(async (employee) => {
        const tasks = await employee.$get('tasks')
        return { employee, tasks }
      })
    )
    response.json({ data: employeesTasks })
  }
}

export default new EmployeeController()
