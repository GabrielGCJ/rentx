import { Request, Response } from "express";
import { ListAllUserUseCase } from "./ListAllUserUseCase";


class ListAllUserController {

    constructor(private listAllUserUseCase: ListAllUserUseCase ){}
   
    handle(request:Request, response:Response): Response {

       const all = this.listAllUserUseCase.execute()

        return response.json(all)
    }
}

export { ListAllUserController }