import { UserRepository } from "../Repositories/UsersRepository";

interface IRequest {
    user_id: string
}

class EditUserAdminService {
    constructor(private userRepository : UserRepository) {}

    execute({user_id}:IRequest): void{

        const user = this.userRepository.findById(user_id)

        user.admin = true
    }
}

export { EditUserAdminService }