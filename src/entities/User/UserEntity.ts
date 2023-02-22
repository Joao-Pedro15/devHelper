export type UserData = {
    _id: string
    username: string
    email: string
    password: string
}

export class UserEntity {
    constructor(public readonly props: UserData){
        Object.assign(props, this)
    }
}