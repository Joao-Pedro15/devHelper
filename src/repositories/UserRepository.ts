import { UserData } from "../entities/User/UserEntity"
import { BaseRepository } from "./helper/MongoHelper"

export interface IUserRepository extends BaseRepository<UserData> {
    loadByEmail(email: string): Promise<UserData | null>
}

export class UserRepository extends BaseRepository<UserData> implements IUserRepository {
    async loadByEmail(email: string): Promise<UserData | null> {
        const user = await this.collection.findOne({ email })
        return user
    }
}
