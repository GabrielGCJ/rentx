import { IUserRepository } from "../Repositories/IUserRepositories";
import { UserRepository } from "../Repositories/UsersRepository";

interface IRequest {
    user_id: string
}

class EditUserAdminService {
    constructor(private userRepository : IUserRepository) {}

    execute({user_id}:IRequest): void{

        const user = this.userRepository.findById(user_id)

        user.admin = true
    }
}

export { EditUserAdminService }