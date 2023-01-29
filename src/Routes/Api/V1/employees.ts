import { Router } from 'express'

import EmployeeController from '@app/Controllers/v1/EmployeeController'

export default () => {
  const employees = Router({ mergeParams: true })

  employees.get('/allempandtasks', EmployeeController.allEmpAndTasks)
  employees.get('/', EmployeeController.index)
  employees.post('/', EmployeeController.store)
  employees.get('/:id', EmployeeController.show)
  employees.put('/:id', EmployeeController.update)
  employees.patch('/:id', EmployeeController.update)
  employees.delete('/:id', EmployeeController.delete)
  employees.get('/:id/tasks', EmployeeController.tasks)

  //di seguito la response di /allempandtasks
  /*
  {
    "data": [
        {
            "employee": {
                "id": 1,
                "employee_id_number": "111",
                "name": "Mario",
                "surname": "rossi",
                "email": "marior@gmail.com",
                "hiring_date": "2022-01-01",
                "layoff_date": null,
                "role_id": 1,
                "created_at": "2023-01-29T09:37:01.000Z",
                "updated_at": "2023-01-29T09:37:01.000Z",
                "deleted_at": null
            },
            "tasks": [
                {
                    "id": 1,
                    "title": "Task 1",
                    "description": "Description of task 1",
                    "status": "NEW",
                    "employee_id": 1,
                    "created_at": "2023-01-29T09:39:04.000Z",
                    "updated_at": "2023-01-29T09:39:04.000Z",
                    "deleted_at": null
                },
                {
                    "id": 4,
                    "title": "Task 4",
                    "description": "Description of task 4",
                    "status": "NEW",
                    "employee_id": 1,
                    "created_at": "2023-01-29T09:39:04.000Z",
                    "updated_at": "2023-01-29T09:39:04.000Z",
                    "deleted_at": null
                }
            ]
        },
        {
            "employee": {
                "id": 2,
                "employee_id_number": "222",
                "name": "Marco",
                "surname": "rossi",
                "email": "marcor@gmail.com",
                "hiring_date": "2022-02-01",
                "layoff_date": null,
                "role_id": 2,
                "created_at": "2023-01-29T09:37:01.000Z",
                "updated_at": "2023-01-29T09:37:01.000Z",
                "deleted_at": null
            },
            "tasks": [
                {
                    "id": 2,
                    "title": "Task 2",
                    "description": "Description of task 2",
                    "status": "IN PROGRESS",
                    "employee_id": 2,
                    "created_at": "2023-01-29T09:39:04.000Z",
                    "updated_at": "2023-01-29T09:39:04.000Z",
                    "deleted_at": null
                },
                {
                    "id": 5,
                    "title": "Task 5",
                    "description": "Description of task 5",
                    "status": "IN PROGRESS",
                    "employee_id": 2,
                    "created_at": "2023-01-29T09:39:04.000Z",
                    "updated_at": "2023-01-29T09:39:04.000Z",
                    "deleted_at": null
                }
            ]
        },
        {
            "employee": {
                "id": 3,
                "employee_id_number": "333",
                "name": "Matteo",
                "surname": "rossi",
                "email": "mator@gmail.com",
                "hiring_date": "2022-03-01",
                "layoff_date": null,
                "role_id": 3,
                "created_at": "2023-01-29T09:37:01.000Z",
                "updated_at": "2023-01-29T09:37:01.000Z",
                "deleted_at": null
            },
            "tasks": [
                {
                    "id": 3,
                    "title": "Task 3",
                    "description": "Description of task 3",
                    "status": "DONE",
                    "employee_id": 3,
                    "created_at": "2023-01-29T09:39:04.000Z",
                    "updated_at": "2023-01-29T09:39:04.000Z",
                    "deleted_at": null
                },
                {
                    "id": 6,
                    "title": "Task 6",
                    "description": "Description of task 6",
                    "status": "DONE",
                    "employee_id": 3,
                    "created_at": "2023-01-29T09:39:04.000Z",
                    "updated_at": "2023-01-29T09:39:04.000Z",
                    "deleted_at": null
                }
            ]
        }
    ]
  }
  */

  return employees
}
