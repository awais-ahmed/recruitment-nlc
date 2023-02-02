import { CreationAttributes, InferAttributes, WhereOptions } from 'sequelize/types/model'
import { Model, ModelCtor } from 'sequelize-typescript'

import NotFound from '@app/Exceptions/NotFound'

abstract class BaseService<T extends Model> {
  protected constructor(protected model: ModelCtor<T>) {}

  public async all(options: { offset?: number; limit?: number } = {}): Promise<Array<T>> {
    return this.model.findAll({
      offset: options.offset,
      limit: options.limit,
    })
  }

  public async find(
    id: T['id'],
    options: { offset?: number; limit?: number } = {}
  ): Promise<T | null> {
    return this.model.findByPk(id, {
      offset: options.offset,
      limit: options.limit,
    })
  }

  public async findOneForUpdate(id: T['id']): Promise<T | null> {
    const result = await this.model.findOne(id)
    console.log('findOneForUpdate result ', result.dataValues)
    return result
  }

  public async findOrFail(
    id: T['id'],
    options: { offset?: number; limit?: number } = {}
  ): Promise<T> {
    const model = await this.find(id, {
      offset: options.offset,
      limit: options.limit,
    })
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
