import {  request, response, Router } from "express"; 
import { UserRepository } from "../Repositories/UsersRepository";

const userRoutes = Router();

const userRepository = new UserRepository()

userRoutes.post("/",(request,response)=>{

    const { name, email, updated_at } = request.body;   

    const userAlReadyExists = userRepository.findByName(name)

    if(userAlReadyExists){
        return response.status(404).json({error: "Esse usuario já existe"})
    }

    userRepository.create({ name, email, updated_at})

    return response.status( 201 ).send()
})


userRoutes.get("/all",(request,response)=>{
    const all = userRepository.list()

    return response.json({all})
})

userRoutes.patch("/:user_id/admin",(request,response)=>{
    const { user_id } = request.params

    const user = userRepository.findById(user_id)

    user.admin = true

    return response.json("Deu Bom")
})

userRoutes.get("/:user_id",(request,response)=>{
    const { user_id } = request.params

    const user = userRepository.findById(user_id)

    return response.json({user})
})

export { userRoutes }

