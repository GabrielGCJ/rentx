import { IUserRepository } from "../../Repositories/IUserRepositories";

interface IRequest {
    name: string;
    email: string;
    updated_at: Date;
}

// Antigo CreateUserService
class CreateUserUseCase {
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

export { CreateUserUseCase }