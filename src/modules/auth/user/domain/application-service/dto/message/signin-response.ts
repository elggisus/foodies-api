export class SigninResponse{

    private readonly token:string;
    private readonly code:number;

    constructor(builder:Builder){
        this.token = builder.token;
        this.code = builder.code;
    }

    toPrimitive():any{
        return {
            code: this.code,
            token: this.token
        }
    }

    static builder():Builder{
        return new Builder();

    }
}


class Builder{

    token!:string;
    code!:number;
   
    public build():SigninResponse {
        return new SigninResponse(this);
    }

    public setToken(val:string):Builder {
        this.token = val;
        return this;
    }

    public setCode(val:number):Builder {
        this.code = val;
        return this;
    }


}