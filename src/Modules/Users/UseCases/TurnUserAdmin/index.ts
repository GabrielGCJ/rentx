import { UserRepository } from "../../Repositories/Implementations/UsersRepository";
import { TurnUserAdminController } from "./TurnUserAdminController";
import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";




const userRepository = null

const turnUserAdminUseCase = new TurnUserAdminUseCase(userRepository)

const turnUserAdminController = new TurnUserAdminController(turnUserAdminUseCase)

export { turnUserAdminController }