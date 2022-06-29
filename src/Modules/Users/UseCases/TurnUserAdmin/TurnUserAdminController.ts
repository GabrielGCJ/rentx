import { Request, Response } from "express";
import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";



class TurnUserAdminController {
    constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

    handle(request:Request, response:Response): Response{

        const { user_id } = request.params

        // const editUserAdminService = new EditUserAdminService(userRepository)
    
        this.turnUserAdminUseCase.execute({user_id})
    
        // const user = userRepository.findById(user_id)
    
        // user.admin = true
    
        return response.json("Deu Bom")
    }
}

export { TurnUserAdminController }