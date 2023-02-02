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
    //const result = await RoleService.getRole(request.body.employee_id)
    //posso anche semplicemente filtrare poi il risultato in modo che il viewer vede i sui risultati
    //if (result.dataValues.role_id === 1 || result.dataValues.role_id === 2) {
    const tasks = await TaskService.all({ offset, limit })
    response.json(tasks)
    /*} else {
      response.status(401).send({ message: 'Unauthorized' })
    }*/
  }

  public async store(request: Request, response: Response) {
    const payload = request.body
    const result = await RoleService.getRole(request.body.employee_id)
    if (result.dataValues.role_id === 1) {
      const task = await TaskService.store(payload)
      response.json({ data: task })
    } else {
      response.status(401).send({ message: 'Unauthorized' })
    }
  }

  public async show(request: Request, response: Response) {
    const { id } = request.params
    //possono tutti veder i propri task, scomentando l'if li può veder solo il viewer ma ha più senso il controllo che ho fatto alla funzione index
    //const result = await RoleService.getRole(request.body.employee_id)
    //if (result.dataValues.role_id === 3) {
    const task = await TaskService.findOrFail(id)
    response.json({ data: task })
    /*} else {
      response.status(401).send({ message: 'Unauthorized' })
    }*/
  }

  public async update(request: Request, response: Response) {
    const { id } = request.params
    const payload = request.body
    const result = await EmployeeService.getRoleForUpdate(request.body.employee_id)
    switch (result.dataValues.role_id) {
      case 1:
        const taskAdmin = await TaskService.update(id, payload)
        response.json({ data: taskAdmin })
        break
      case 2:
        //editor può editare solo lo stato
        const taskEditor = await TaskService.update(id, payload.status)
        response.json({ data: taskEditor })
        break
      default:
        response.status(401).send({ message: 'Unauthorized' })
        break
    }
    if (result.dataValues.role_id === 1 || result.dataValues.role_id === 2) {
      const task = await TaskService.update(id, payload)
      response.json({ data: task })
    } else {
      response.status(401).send({ message: 'Unauthorized' })
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
