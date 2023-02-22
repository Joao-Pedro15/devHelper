export type UserData = {
    _id: string
    username: string
}

export class UserEntity {
    constructor(public readonly props: UserData){
        Object.assign(props, this)
    }
}