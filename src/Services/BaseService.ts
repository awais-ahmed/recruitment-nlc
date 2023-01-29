import { CreationAttributes, InferAttributes, WhereOptions } from 'sequelize/types/model'
import { Model, ModelCtor } from 'sequelize-typescript'

import NotFound from '@app/Exceptions/NotFound'

abstract class BaseService<T extends Model> {
  protected constructor(protected model: ModelCtor<T>) {}

  public async all(): Promise<Array<T>> {
    return this.model.findAll()
  }

  public async find(id: T['id']): Promise<T | null> {
    return this.model.findByPk(id)
  }

  public async findOrFail(id: T['id']): Promise<T> {
    const model = await this.find(id)
    if (!model) {
      throw new NotFound()
    }

    return model
  }

  public async findByKey<U extends keyof InferAttributes<T>>(
    where: WhereOptions<T>
  ): Promise<T | null> {
    return this.model.findOne({ where })
  }

  public async findByKeyOrNull<U extends keyof InferAttributes<T>>(
    where: WhereOptions<T>
  ): Promise<T> {
    const model = await this.findByKey(where)
    if (!model) {
      throw new NotFound()
    }

    return model
  }

  public async store(payload: CreationAttributes<T>): Promise<T> {
    return this.model.create(payload)
  }

  public async update(id: T['id'], payload: Partial<T>): Promise<T> {
    const model = await this.findOrFail(id)
    return model.update(payload)
  }

  public async delete(id: T['id']): Promise<number> {
    return this.model.destroy({ where: { id } })
  }
}

export default BaseService
