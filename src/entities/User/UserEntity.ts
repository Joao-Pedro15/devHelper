import { validateEmail } from '../../utils/validateEmail/validateEmail'

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

    public create() {
        if(!this.validate(this.props.email)) return false
        return new UserEntity(this.props)
    }

    private validate(email: string): boolean {
        if(!validateEmail(email)) return false
        return true
    }
}