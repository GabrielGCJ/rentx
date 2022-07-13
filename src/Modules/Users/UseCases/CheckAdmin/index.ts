import { UserRepository } from "../../Repositories/Implementations/UsersRepository";
import { CheckAdminController } from "./CheckAdminController";
import { CheckAdminUseCase } from "./CheckAdminUseCase";




const userRepository = null

const checkAdminUseCase = new CheckAdminUseCase(userRepository)

const checkAdminController = new CheckAdminController(checkAdminUseCase)

export { checkAdminController }