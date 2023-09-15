import { DomainEvent } from "../../../../../common/event/domain.event";
import { User } from "../entity/user";

export class UserEvent extends DomainEvent<User>{
    
    private user:User;
    private createAt:string;

    constructor(user:User,createAt:string){
        super();
        this.user = user;
        this.createAt = createAt;
    }

    public get getUser():User{
        return this.user;
    }

    public get getCreateAt():string{
        return this.createAt;
    }

}