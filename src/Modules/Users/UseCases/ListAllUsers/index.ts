import { UserRepository } from "../../Repositories/UsersRepository";
import { ListAllUserController } from "./ListAllUserControler";
import { ListAllUserUseCase } from "./ListAllUserUseCase";

const userRepository = UserRepository.getInstance()

const listAllUserUseCase = new ListAllUserUseCase(userRepository)

const listAllUserController = new ListAllUserController(listAllUserUseCase)

export { listAllUserController }