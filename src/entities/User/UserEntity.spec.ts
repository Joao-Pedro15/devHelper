import { UserData, UserEntity } from "./UserEntity";
import { mock, MockProxy } from 'jest-mock-extended'
import { randomUUID, createHash} from 'crypto'
const fakeUser: UserData = {
  _id: randomUUID(),
  email: "joao.monteiro@gmail.com",
  username: "joao_monteiro",
  password: 'wefowiejfweoif'
}

describe("testing entity User", () => {
  it("should return false not valid email", () => {
    const user  =UserEntity.create({...fakeUser, email: "joao.monteiro.com"})
    expect(user).toBeFalsy()
  })
})