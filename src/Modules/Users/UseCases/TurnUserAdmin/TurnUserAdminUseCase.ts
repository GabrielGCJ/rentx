import { IUserRepository } from "../../Repositories/IUserRepositories";

interface IRequest {
    user_id: string
}
// Antigo EditUserAdminService
class TurnUserAdminUseCase {
    constructor(private userRepository : IUserRepository) {}

    execute({user_id}:IRequest): void{

        const user = this.userRepository.findById(user_id)

        user.admin = true
    }
}

export { TurnUserAdminUseCase }