export class UpdateUserResponse{

    private readonly idUser:number;
    private readonly message:string;

    constructor(builder:Builder){
        this.idUser = builder.idUser;
        this.message = builder.message;
    }

    toPrimitive():any{
        return {
            idUser:this.idUser,
            message:this.message
        }
    }

    static builder():Builder{
        return new Builder();

    }
}


class Builder{

    idUser!:number;
    message!:string;
   
    public build():UpdateUserResponse {
        return new UpdateUserResponse(this);
    }

    public setIdUser(val:number):Builder {
        this.idUser = val;
        return this;
    }

    public setMessage(val:string):Builder {
        this.message = val;
        return this;
    }


}