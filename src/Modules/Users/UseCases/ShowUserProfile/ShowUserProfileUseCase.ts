import { User } from "../../Model/User";
import { IUserRepository } from "../../Repositories/IUserRepositories";

interface IRequest {
    id: string;
}

class ShowUserProfileUseCase{
    constructor(private userRepository : IUserRepository){}

    execute({id}:IRequest):User {

        const user = this.userRepository.findById(id)

        return user
    }
}

export { ShowUserProfileUseCase }