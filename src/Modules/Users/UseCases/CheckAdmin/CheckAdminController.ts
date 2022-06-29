import { Request, Response } from "express";
import { CheckAdminUseCase } from "./CheckAdminUseCase";



class CheckAdminController {

    constructor(private checkAdminUseCase : CheckAdminUseCase) {}

    handle(request:Request, response:Response) :Response {

        const { id } = request.headers       

        const all = this.checkAdminUseCase.execute ({id})

        return response.status( 201 ).json(all)
    }
}

export { CheckAdminController }