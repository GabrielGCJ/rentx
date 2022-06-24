import { User } from "../Model/User";
import { ICreateUserDTO, IUserRepository } from "./IUserRepositories";

class PostgresUserRepository implements IUserRepository {
    findByName(name: string): User {
        console.log(name)
        return null
    }
    findById(id: string): User {
        console.log(name)
        return null
    }
    list(): User[] {
        return null
    }
    create({ name, email, updated_at }: ICreateUserDTO): void {
        console.log( name, email, updated_at )
    }
}

export { PostgresUserRepository }