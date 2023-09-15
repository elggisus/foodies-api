
import { User } from "./entity/user";
import { UserCreatedEvent } from "./event/user-created.event";
import { UserDisabledEvent } from "./event/user-disabled.event";
import { UserDomainSevice } from "./user-domain-service";

export class UserDomainSeviceImpl implements UserDomainSevice{
    
    initializeAndValidateUser(user: User,code:string): UserCreatedEvent {        
        user.initializeUser(code);
        user.validateUser();
        return new UserCreatedEvent(user,new Date().toUTCString());
    }

    enableUser(user: User): Promise<User> {
        throw new Error("Method not implemented.");
    }

    disableUser(user: User): UserDisabledEvent {
        user.disable();
        return new UserDisabledEvent(user, new Date().toUTCString()) 
    
    }

}