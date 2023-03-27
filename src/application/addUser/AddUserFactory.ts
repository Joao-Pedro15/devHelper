import { AddUserUseCase } from "../../useCases/addUser/AddUserUseCase";
import { UserRepository } from '../../repositories/UserRepository'
import { Database } from '../../database/mongo-db'
import { UserData } from "../../entities/User/UserEntity";

class AddUserFactory {
  async build(data:UserData) {
    try {
      const db = (await Database.getInstance()).getDb()
      const userRepository = new UserRepository(db, 'users')
      const addUser = new AddUserUseCase(userRepository)
      return await addUser.execute(data)  
    } catch (error:any) {
      throw new Error(error.message)
    }
  }
}

export default new AddUserFactory()