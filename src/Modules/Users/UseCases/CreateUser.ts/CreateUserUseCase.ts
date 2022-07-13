import { IUserRepository } from "../../Repositories/IUserRepositories";

interface IRequest {
    name: string;
    email: string;
    updated_at: Date;
}

// Antigo CreateUserService
class CreateUserUseCase {
    constructor(private userRepository : IUserRepository) {}

    async execute({name,email,updated_at} :IRequest): Promise<void>{
        
        // const userRepository = new UserRepository()

        const userAlReadyExists = await this.userRepository.findByName(name)

        if(userAlReadyExists){
            throw new Error("Esse usuario já existe")     
        }

       const user =  this.userRepository.create({ name, email, updated_at})

       return user
    }
}

export { CreateUserUseCase }