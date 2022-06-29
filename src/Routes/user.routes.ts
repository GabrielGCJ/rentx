import { Router } from "express"; 
import { UserRepository } from "../Modules/Users/Repositories/UsersRepository";
import { checkAdminController } from "../Modules/Users/UseCases/CheckAdmin";
// import { CheckAdminService } from "../Modules/Users/Services/CheckAdmin";
import { createUserController } from "../Modules/Users/UseCases/CreateUser.ts";
import { listAllUserController } from "../Modules/Users/UseCases/ListAllUsers";
import { showUserProfileController } from "../Modules/Users/UseCases/ShowUserProfile";
import { turnUserAdminController } from "../Modules/Users/UseCases/TurnUserAdmin";


const userRoutes = Router();

const userRepository =  UserRepository.getInstance()

userRoutes.post("/",(request,response)=>{

    return createUserController.handle(request,response)
})


userRoutes.get("/",(request,response)=>{

    return listAllUserController.handle(request,response)
})

userRoutes.patch("/:user_id/admin",(request,response)=>{
    
    return turnUserAdminController.handle(request,response)
})

userRoutes.get("/:id/admin",(request,response)=>{

    return showUserProfileController.handle(request,response)
})

userRoutes.get("/admin/",(request,response)=>{

    return checkAdminController.handle(request,response)

    // const { id } = request.headers

    // // const checkAdminService = new CheckAdminService(userRepository)

    // // checkAdminService.execute({ id })

    // const user = userRepository.findById( id as string )

    // if(user.admin === false){
    //     return response.status(404).json({error: "Esse usuario não tem permissão"})
    // }

    // const all = userRepository.list()

    // return response.json({all})
})

export { userRoutes }

