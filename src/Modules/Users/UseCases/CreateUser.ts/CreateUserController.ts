import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";


class CreateUserController {

    constructor(private createUserUseCase : CreateUserUseCase ) {}

    handle( request: Request, response: Response ) : Response {

        const { name, email, updated_at } = request.body;   

        // const createUserService = new CreateUserService(userRepository)
        
        this.createUserUseCase.execute({name, email, updated_at})

        return response.status( 201 ).send()
    }
}

export { CreateUserController }