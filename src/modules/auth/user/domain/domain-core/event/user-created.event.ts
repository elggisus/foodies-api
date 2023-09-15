import { User } from "../entity/user";
import { UserEvent } from "./user.event";

export class UserCreatedEvent extends UserEvent{
    
    constructor(user:User,createAt:string){
        super(user,createAt);    
    }
}