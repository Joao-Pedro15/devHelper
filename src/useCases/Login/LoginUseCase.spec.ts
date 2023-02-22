import { LoginUseCase } from './LoginUseCase'
import { mock, MockProxy } from 'jest-mock-extended'
import { UserRepository } from '../../repositories/UserRepository'
import { UserData } from '../../entities/User/UserEntity'

const fakeUser: UserData = {
    _id: "EORIGJEROIFJQWOPIRFJ3E",
    email: "jjoao.monteiro15@gmail.com",
    username: "joao15monteiro",
    password: "ewrpogjeroipgjeroigjeroigj"
}

describe('testing useCase login', () => {
    let userRepository: MockProxy<UserRepository>
    let testInstance: LoginUseCase
    beforeEach(() => {
        userRepository = mock()
        userRepository.loadByEmail.mockResolvedValue(null)
        testInstance = new LoginUseCase(userRepository)
    })

    it('should return error not exist user', async () => {
        try {
            await testInstance.execute(fakeUser.email, fakeUser.password)
        } catch (error) {
            expect(error).toBeInstanceOf(Error)
        }
    } )
})