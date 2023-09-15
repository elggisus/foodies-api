export class CreateUserResponse{

    private readonly idUser:number;
    private readonly message:string;
    private readonly token:string;

    constructor(builder:Builder){
        this.idUser = builder.idUser;
        this.message = builder.message;
        this.token = builder.token;
    }

    toPrimitive():any{
        return {
            idUser:this.idUser,
            message:this.message,
            token: this.token
        }
    }

    static builder():Builder{
        return new Builder();

    }
}


class Builder{

    idUser!:number;
    message!:string;
    token!:string;
   
    public build():CreateUserResponse {
        return new CreateUserResponse(this);
    }

    public setIdUser(val:number):Builder {
        this.idUser = val;
        return this;
    }

    public setMessage(val:string):Builder {
        this.message = val;
        return this;
    }

    
    public setToken(val:string):Builder {
        this.token = val;
        return this;
    }


}