import {  request, response, Router } from "express"; 
import { UserRepository } from "../Repositories/UsersRepository";
import { CheckAdminService } from "../Services/CheckAdmin";
import { CreateUserService } from "../Services/CreateUserService";
import { EditUserAdminService } from "../Services/EditUserAdminService";

const userRoutes = Router();

const userRepository = new UserRepository()

userRoutes.post("/",(request,response)=>{

    const { name, email, updated_at } = request.body;   

    const createUserService = new CreateUserService(userRepository)
    
    createUserService.execute({name, email, updated_at})
    
    // const userAlReadyExists = userRepository.findByName(name)

    // if(userAlReadyExists){
    //     return response.status(404).json({error: "Esse usuario já existe"})
    // }

    // userRepository.create({ name, email, updated_at})

    // const all = userRepository.list()

    return response.status( 201 ).send()
})


userRoutes.get("/",(request,response)=>{

    const all = userRepository.list()

    return response.json({all})
})

userRoutes.patch("/:user_id/admin",(request,response)=>{
    const { user_id } = request.params

    const editUserAdminService = new EditUserAdminService(userRepository)

    editUserAdminService.execute({user_id})

    // const user = userRepository.findById(user_id)

    // user.admin = true

    return response.json("Deu Bom")
})

userRoutes.get("/:user_id/admin",(request,response)=>{
    const { user_id } = request.params

    const user = userRepository.findById(user_id)

    return response.json({user})
})

userRoutes.get("/admin/",(request,response)=>{
    const { id } = request.headers

    // const checkAdminService = new CheckAdminService(userRepository)

    // checkAdminService.execute({ id })

    const user = userRepository.findById( id as string )

    if(user.admin === false){
        return response.status(404).json({error: "Esse usuario não tem permissão"})
    }

    const all = userRepository.list()

    return response.json({all})
})

export { userRoutes }

