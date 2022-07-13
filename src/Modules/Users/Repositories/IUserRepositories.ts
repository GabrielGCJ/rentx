import { User } from "../Entities/User";

interface ICreateUserDTO {
    name:string,
    email:string,
}

interface IUserRepository {
    findByName(name: string):Promise<User>;
    findById(id:string):Promise<User>;
    list(): Promise<User[]> ;
    create({ name, email}: ICreateUserDTO ):Promise<void>
}

export { IUserRepository,ICreateUserDTO }