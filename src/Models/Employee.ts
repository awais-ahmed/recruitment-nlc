import {
  Table,
  Column,
  Model,
  HasMany,
  BelongsTo,
  CreatedAt,
  UpdatedAt,
  ForeignKey,
  DeletedAt,
} from 'sequelize-typescript'

import Task from '@app/Models/Task'
import Role from '@app/Models/Role'

@Table({
  tableName: 'employees',
})
export default class Employee extends Model {
  @Column
  public employee_id_number: number

  @Column
  public name: string

  @Column
  public surname: string

  @Column
  public email: string

  @Column
  public hiring_date?: Date

  @Column
  public layoff_date?: Date

  @ForeignKey(() => Role)
  @Column
  public role_id: number

  @BelongsTo(() => Role)
  public role: Role

  @HasMany(() => Task)
  public tasks: Array<Task>

  @CreatedAt
  public created_at: Date

  @UpdatedAt
  public updated_at: Date

  @DeletedAt
  public deleted_at: Date
}
