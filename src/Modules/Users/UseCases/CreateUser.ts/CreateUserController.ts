import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";


class CreateUserController {

    constructor(private createUserUseCase : CreateUserUseCase ) {}

    async handle( request: Request, response: Response ) : Promise <Response> {

        const { name, email, updated_at } = request.body;   

      
        
        await this.createUserUseCase.execute({name, email, updated_at})

        return response.status( 201 ).send()
    }
}

export { CreateUserController }