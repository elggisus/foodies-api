import { User } from "../entity/user";
import { UserEvent } from "./user.event";

export class UserDisabledEvent extends UserEvent{
    
    constructor(user:User,createAt:string){
        super(user,createAt);    
    }
}