import { User } from "../../Model/User";
import { IUserRepository } from "../../Repositories/IUserRepositories";

interface IRequest {
    user_id: string;
}

class ShowUserProfileUseCase{
    constructor(private userRepository : IUserRepository){}

    execute({user_id}:IRequest):User {

        const user = this.userRepository.findById(user_id)

        return user
    }
}

export { ShowUserProfileUseCase }