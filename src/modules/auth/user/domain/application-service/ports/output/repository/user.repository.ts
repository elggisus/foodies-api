import { User } from "../../../../domain-core/entity/user";
import { UserDto } from "../../../dto/create/user.dto";

export abstract class UserRepository{
    
    abstract get(params:any):Promise<UserDto[]>;
    abstract save(user:User):Promise<User>;
    abstract findUserByEmail(username:string):Promise<User | null>;
    abstract findUserByPk(idUser:number):Promise<User | null>;

}