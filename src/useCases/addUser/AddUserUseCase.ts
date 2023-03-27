import { UserData, UserEntity } from "../../entities/User/UserEntity";
import { IUserRepository } from "../../repositories/UserRepository";
import { InternalServerError } from '../../errors/InternalServerError'
import { AppError } from "../../errors/AppError";


export class AddUserUseCase {
  constructor(
    private userRepository: IUserRepository
  ) {}

  async execute(data: UserData) {
    try {
      const userEntity = UserEntity.create(data)
      if(!userEntity) throw new AppError('error in validate user entity', 400)
      const user = await this.userRepository.create(data)
      return user
    } catch (error) {
      if(error instanceof AppError) throw new AppError(error.message, error.statusCode)
      throw new InternalServerError()
    }
  }

}