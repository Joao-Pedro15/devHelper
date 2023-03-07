import { UserData, UserEntity } from "../../entities/User/UserEntity";
import { IUserRepository } from "../../repositories/UserRepository";

export class AddUserUseCase {
  constructor(
    private userRepository: IUserRepository
  ) {}

  async execute(data: UserData) {
    try {
      const userEntity = new UserEntity(data).create()
      if(!userEntity) throw new Error('error in validate user entity')
      const user = await this.userRepository.create(data)
      return user
    } catch (error) {
      if(error instanceof Error) throw new Error(error.message)
      throw new Error('Internal server error')
    }
  }

}