import BaseService from '@app/Services/BaseService'
import Task from '@app/Models/Task'

class TaskService extends BaseService<Task> {
  constructor() {
    super(Task)
  }
}

export default new TaskService()
