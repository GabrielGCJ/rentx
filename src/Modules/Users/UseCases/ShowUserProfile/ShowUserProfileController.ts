import { Request, Response } from "express";
import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

interface IRequest {
    user_id: string;
}
class ShowUserProfileController {

    constructor(private showUserProfileUseCase : ShowUserProfileUseCase){}

    handle( request: Request, response: Response): Response {

        const { user_id } = request.params

        const user = this.showUserProfileUseCase.execute({user_id})

        return response.json(user)
    }
}

export { ShowUserProfileController }