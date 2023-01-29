import {
  Table,
  Column,
  Model,
  BelongsTo,
  CreatedAt,
  UpdatedAt,
  DeletedAt,
  DataType,
  ForeignKey,
} from 'sequelize-typescript'

import Employee from '@app/Models/Employee'

const enum TaskStatusEnum {
  NEW = 'NEW',
  IN_PROGRESS = 'IN PROGRESS',
  DONE = 'DONE',
}

@Table({
  tableName: 'tasks',
})
export default class Task extends Model {
  @Column
  public title: string

  @Column
  public description: string

  @Column({
    type: DataType.ENUM('NEW', 'IN PROGRESS', 'DONE'),
    defaultValue: 'NEW',
  })
  public status: TaskStatusEnum

  @ForeignKey(() => Employee)
  @Column
  public employee_id: number | null

  @BelongsTo(() => Employee)
  public employee?: Employee

  @CreatedAt
  public created_at: Date

  @UpdatedAt
  public updated_at: Date

  @DeletedAt
  public deleted_at: Date
}
