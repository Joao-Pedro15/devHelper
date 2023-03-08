import { AddUserUseCase } from "../../useCases/addUser/AddUserUseCase";
import { UserRepository } from '../../repositories/UserRepository'
import { client } from '../../database/mongo-db'
import { UserData } from "../../entities/User/UserEntity";

class AddUserFactory {
  async build(data:UserData) {
    try {
      const db = client.db()
      const userRepository = new UserRepository(db, 'users')
      const addUser = new AddUserUseCase(userRepository)
      return await addUser.execute(data)  
    } catch (error:any) {
      throw new Error(error.message)
    }
  }
}

export default new AddUserFactory()