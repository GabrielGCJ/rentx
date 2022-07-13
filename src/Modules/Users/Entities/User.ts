import { v4 as uuidV4 } from "uuid";
import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm"

@Entity("users")
class User {
    @PrimaryColumn()
    id?: string;

    @Column()
    name: string;  

    @Column()
    admin: boolean;  

    @Column()
    email: string;  

    @CreateDateColumn()
    created_at: Date;  

    @Column()
    updated_at: Date; 


    constructor(){
        if(!this.id){
            this.id = uuidV4()
        }
    }
}   

export { User }
