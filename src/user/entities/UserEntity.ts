export interface UserData {
  _id?: string
  email: string
  password: string
  photo?: string
  admin: boolean
}

export class User {
  public readonly _id?: string
  public readonly email?: string
  public readonly password?: string
  public readonly photo?: string
  public readonly admin?: boolean
  constructor(user: UserData) {
    Object.assign(user, this)
  }
}