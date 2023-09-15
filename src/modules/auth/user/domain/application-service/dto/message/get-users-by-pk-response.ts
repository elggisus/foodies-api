import { UserDto } from "../create/user.dto";

export class GetUserByPkResponse{

    // private readonly code:number;
    private readonly user:UserDto;

    constructor(builder:Builder){
        // this.code = builder.code;
        this.user = builder.user;
    }

    toPrimitive():any{
        return {
            // code: this.code,
            user: this.user
        }
    }

    static builder():Builder{
        return new Builder();

    }
}


class Builder{

    // code!:number;
    user!:UserDto;
   
    public build():GetUserByPkResponse {
        return new GetUserByPkResponse(this);
    }

    // public setCode(val:number):Builder {
    //     this.code = val;
    //     return this;
    // }

    public setUser(val:any):Builder {
        this.user = val;
        return this;
    }


}