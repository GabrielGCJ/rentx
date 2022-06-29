import { User } from "../../Model/User";
import { IUserRepository } from "../../Repositories/IUserRepositories";


class ListAllUserUseCase{
    constructor(private userRepository : IUserRepository) {}

    execute():User[] {        
        const users = this.userRepository.list()

        return users     
    }
}


export { ListAllUserUseCase }