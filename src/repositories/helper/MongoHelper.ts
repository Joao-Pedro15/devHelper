import { Db, Collection } from 'mongodb'

export class BaseRepository<T> {
  readonly collection: Required<Collection>
  constructor(db: Db, collection: string) {
    this.collection = db.collection(collection)
  }

  async loadById(id: string): Promise<T> {
    const entity = await this.collection.findOne({ _id: id })
    return entity
  }

  async loadAll(): Promise<T[]> {
    const entities = await this.collection.find().toArray()
    return entities
  }
}