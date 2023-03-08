import { Request, Response } from 'express'
import { UserData } from '../../entities/User/UserEntity'
import factory from './AddUserFactory'

class AddUserController {
  async handle(request: Request, response: Response) {
    const data = request.body as UserData
    try {
      const user = await factory.build(data)
      return response.status(201).json({ message: 'successfully created user', data: user })
    } catch (error:any) {
      return response.status(500).json({message: error.message})
    }
  }
}

export default new AddUserController()