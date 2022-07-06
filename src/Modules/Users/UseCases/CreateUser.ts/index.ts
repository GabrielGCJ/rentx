import { UserRepository } from "../../Repositories/Implementations/UsersRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const userRepository = UserRepository.getInstance()
const createUserUseCase = new CreateUserUseCase(userRepository)
const createUserController = new CreateUserController(createUserUseCase)

export { createUserController }