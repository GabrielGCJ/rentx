import { IUserRepository } from "../Repositories/IUserRepositories";
import { UserRepository } from "../Repositories/UsersRepository";

interface IRequest {
    name: string;
    email: string;
    updated_at: Date;
}


class CreateUserService {
    constructor(private userRepository : IUserRepository) {}

    execute({name,email,updated_at} :IRequest): void{
        
        // const userRepository = new UserRepository()

        const userAlReadyExists = this.userRepository.findByName(name)

        if(userAlReadyExists){
            throw new Error("Esse usuario já existe")     
        }

        this.userRepository.create({ name, email, updated_at})
    }
}

export { CreateUserService }