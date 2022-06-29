// import { User } from "../../Model/User";
// import { ICreateUserDTO, IUserRepository } from "../IUserRepositories";

import { User } from "../Model/User";
import { ICreateUserDTO, IUserRepository } from "./IUserRepositories";

// DTO => Data transfer object => Objeto de transferência de dados

// interface ICreateUserDTO {
//     name:string,
//     email:string,
//     updated_at:Date
// }

class UserRepository implements IUserRepository {
    private users : User[]  = []

    private static INSTANCE: UserRepository;

    private constructor(){
        this.users = [];
    }

    public static getInstance() : UserRepository{
        if(!UserRepository.INSTANCE){
            UserRepository.INSTANCE = new UserRepository()
        }

        return UserRepository.INSTANCE
    }

    create({ name,email,updated_at } :ICreateUserDTO): void {
        const user = new User() 

        Object.assign(user, {
            name,
            admin : false,
            email,
            created_at: new Date(),
            updated_at
        })
    
        this.users.push(user)
    }

    list():User[] {
        return this.users
    }

    findByName(name:string): User {
        const user = this.users.find(user => user.name === name)
        return user
    }

    findById(id:string): User {
        const user = this.users.find(user => user.id === id)
        return user
    }
}

export { UserRepository }