import { UserRepository } from "../Repositories/UsersRepository";

interface IRequest {
    id: string
}

class CheckAdminService {
    constructor(private userRepository : UserRepository) {}

    execute({ id }: IRequest){

        const user = this.userRepository.findById( id )

        if(user.admin === false){
            throw new Error("Esse usuario não tem permissão")
        }

        const all = this.userRepository.list()        
    }
}

export { CheckAdminService }