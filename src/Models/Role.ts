import { Table, Column, Model, HasMany, CreatedAt, UpdatedAt } from 'sequelize-typescript'

import Employee from '@app/Models/Employee'

@Table({
  tableName: 'roles',
})
export default class Role extends Model {
  @Column
  public name: string

  @HasMany(() => Employee)
  public employees: Array<Employee>

  @CreatedAt
  public created_at: Date

  @UpdatedAt
  public updated_at: Date
}
