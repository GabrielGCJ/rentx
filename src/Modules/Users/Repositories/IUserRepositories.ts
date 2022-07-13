import { User } from "../Entities/User";

interface ICreateUserDTO {
    name:string,
    email:string,
    updated_at:Date
}

interface IUserRepository {
    findByName(name: string):Promise<User>;
    findById(id:string):Promise<User>;
    list(): Promise<User[]> ;
    create({ name, email, updated_at }: ICreateUserDTO ):Promise<void>
}

export { IUserRepository,ICreateUserDTO }