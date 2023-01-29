import { Router } from 'express'

import TaskController from '@app/Controllers/v1/TaskController'

export default () => {
  const tasks = Router({ mergeParams: true })

  tasks.get('/', TaskController.index)
  tasks.post('/', TaskController.store)
  tasks.get('/:id', TaskController.show)
  tasks.put('/:id', TaskController.update)
  tasks.patch('/:id', TaskController.update)
  tasks.delete('/:id', TaskController.delete)

  tasks.get('/status', TaskController.statusList)

  return tasks
}
