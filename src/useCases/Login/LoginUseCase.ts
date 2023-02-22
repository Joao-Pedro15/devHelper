import { UserRepository } from "../../repositories/UserRepository";
import { compare } from 'bcrypt'
import { sign } from "jsonwebtoken";

export class LoginUseCase {
    constructor(
        private userRepository: UserRepository
    ){}

    async execute(email: string, password: string) {
        const user = await this.userRepository.loadByEmail(email)
        if(!user) throw new Error('not found user')
        if(!(await compare(password, user.password))) throw new Error('email or password incorrect')
        const token = sign({ user: email }, 'secretToken', { expiresIn: "1h" })
        return token
    }

}