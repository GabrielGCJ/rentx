import { UserRepository } from "../../Repositories/Implementations/UsersRepository";
import { ShowUserProfileController } from "./ShowUserProfileController";
import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";




const userRepository = null

const showUserProfileUseCase = new ShowUserProfileUseCase(userRepository)

const showUserProfileController = new ShowUserProfileController(showUserProfileUseCase)

export { showUserProfileController }