import { Db, Collection, InsertOneWriteOpResult, ObjectId } from 'mongodb'

export type WithoutId<T> = Omit<T, '_id'>;
export type Constraint<T> = WithoutId<T> & { _id: any | ObjectId };

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

  async create<T extends Constraint<T>>(data: T): Promise<InsertOneWriteOpResult<T>> {
    const entity = await this.collection.insertOne(data)
    return entity
  }
}