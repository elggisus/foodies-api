import { User } from "./entity/user";
import { UserCreatedEvent } from "./event/user-created.event";
import { UserDisabledEvent } from "./event/user-disabled.event";

export abstract class UserDomainSevice{
    abstract initializeAndValidateUser(user:User,code:string):UserCreatedEvent;
    abstract disableUser(user:User):UserDisabledEvent;
    abstract enableUser(user:User):Promise<User>;
}