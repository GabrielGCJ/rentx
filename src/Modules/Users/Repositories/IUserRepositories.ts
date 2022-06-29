import { User } from "../Model/User"

interface ICreateUserDTO {
    name:string,
    email:string,
    updated_at:Date
}

interface IUserRepository {
    findByName(name: string):User;
    findById(id:string):User
    list(): User[] ;
    create({ name, email, updated_at }: ICreateUserDTO ):void
}

export { IUserRepository,ICreateUserDTO }