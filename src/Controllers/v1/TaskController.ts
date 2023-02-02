import { Request, Response } from 'express'

import ControllerDecorator from '@app/Decorators/ControllerDecorator'
import TaskService from '@app/Services/TaskService'
import RoleService from '@app/Services/RoleService'
import EmployeeService from '@app/Services/EmployeeService'

@ControllerDecorator
class TaskController {
  public async index(request: Request, response: Response) {
    const page = Number(request.query.page)
    const limit = Number(request.query.limit)
    const offset = (page - 1) * limit
    const viewertask = []
    const tasks = await TaskService.all({ offset, limit })
    if (process.env.DB_USER === 'admin' || process.env.DB_USER === 'editor') {
      response.json(tasks)
    } else {
      for (const task in tasks) {
        if (tasks[task].dataValues.employee_id === 3) {
          viewertask.push(tasks[task])
        }
      }
      response.json(viewertask)
    }
  }

  public async store(request: Request, response: Response) {
    const payload = request.body
    if (process.env.DB_USER === 'admin') {
      const task = await TaskService.store(payload)
      response.json({ data: task })
    } else {
      response.status(401).send({ message: 'Unauthorized' })
    }
  }

  public async show(request: Request, response: Response) {
    const { id } = request.params
    if (process.env.DB_USER === 'viewer') {
      const task = await TaskService.findOrFail(id)
      response.json({ data: task })
    } else {
      response.status(401).send({ message: 'Unauthorized' })
    }
  }

  public async update(request: Request, response: Response) {
    const { id } = request.params
    const payload = request.body
    switch (process.env.DB_USER) {
      case 'admin':
        //admin può assegnare anche task
        //payload:{ "status": "NEW", "employee_id": 3 }
        const taskAdmin = await TaskService.update(id, payload)
        response.json({ data: taskAdmin })
        break
      case 'editor':
        //editor può editare solo lo stato
        const status = { status: payload.status }
        const taskEditor = await TaskService.update(id, status)
        response.json({ data: taskEditor })
        break
      default:
        response.status(401).send({ message: 'Unauthorized' })
        break
    }
  }

  public async delete(request: Request, response: Response) {
    const { id } = request.params
    await TaskService.delete(id)
    response.json({ success: true })
  }

  public async statusList(request: Request, response: Response) {
    response.json({ statuses: ['NEW', 'IN PROGRESS', 'DONE'] })
  }
}

export default new TaskController()
