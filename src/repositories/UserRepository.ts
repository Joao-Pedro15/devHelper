import { BaseRepository } from "./helper/MongoHelper"

export type User = {
    _id: string
    username: string
}

export class UserRepository extends BaseRepository<User> {}
