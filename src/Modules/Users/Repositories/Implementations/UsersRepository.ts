import { getRepository, Repository } from "typeorm";
import { User } from "../../Entities/User";
import { ICreateUserDTO, IUserRepository } from "../IUserRepositories";


class UserRepository implements IUserRepository {

    private repository: Repository<User>

    constructor(){
        this.repository = getRepository(User)
    }

    

    async create({ name,email } :ICreateUserDTO): Promise <void> {
        // const user = new User() 

        // Object.assign(user, {
        //     name,
        //     admin : false,
        //     email,
        //     created_at: new Date(),
        //     updated_at
        // })

        const user = this.repository.create({
            name,
            email          
        })
    
        await this.repository.save(user)

        // return user
    }

    async list(): Promise<User[]> {
        // return this.users
        const users = await this.repository.find()
        return users
    }

    async findByName(name:string): Promise<User> {
        const user = await this.repository.findOne({name})
        return user
    }

    async findById(id:string): Promise<User> {
        const user = await this.repository.findOne({id})
        return user
    }
}

export { UserRepository }