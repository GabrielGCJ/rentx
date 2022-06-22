import { User } from "../Model/User"

// DTO => Data transfer object => Objeto de transferência de dados

interface ICreateUserDTO {
    name:string,
    email:string,
    updated_at:Date
}

class UserRepository {

    private users : User[]  = []

    constructor(){
        this.users = [];
    }
    create({ name,email,updated_at } :ICreateUserDTO): void {
        const user = new User() 

        Object.assign(user, {
            name,
            admin : false,
            email,
            created_at: new Date(),
            updated_at
        })
    
        this.users.push(user)
    }

    list():User[] {
        return this.users
    }

    findByName(name:string): User {
        const user = this.users.find(user => user.name === name)
        return user
    }

    findById(id:string): User {
        const user = this.users.find(user => user.id === id)
        return user
    }
}

export { UserRepository }