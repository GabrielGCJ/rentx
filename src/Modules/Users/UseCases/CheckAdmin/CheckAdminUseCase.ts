import { User } from "../../Entities/User";
import { IUserRepository } from "../../Repositories/IUserRepositories";

// interface IRequest {
//     id: string
// }

// Antigo CheckAdminService
class CheckAdminUseCase{
    constructor(private userRepository : IUserRepository) {}

    execute({id}):User[]{

        const user = this.userRepository.findById(id)

        if(user.admin === false){
            throw new Error("Esse usuario não tem permissão")
        }

        const all = this.userRepository.list()    
        
        return all
    }
}

export { CheckAdminUseCase }