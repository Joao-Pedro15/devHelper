import { UserData } from "../entities/User/UserEntity"
import { BaseRepository } from "./helper/MongoHelper"


export class UserRepository extends BaseRepository<UserData> {
    async loadByEmail(email: string): Promise<UserData | null> {
        const user = await this.collection.findOne({ email })
        return user
    }
}
