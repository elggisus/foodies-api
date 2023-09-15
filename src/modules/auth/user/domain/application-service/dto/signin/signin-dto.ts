export class SigninDto{
    
    

    readonly email:string;
    readonly password:string;
    

    constructor(builder:Builder){
        this.email = builder.getEmail;
        this.password = builder.getPassword;
    }

    static builder():Builder{
        return new Builder();
    }

   
}

class Builder{

    private _email!:string;
    private _password!:string;


    public build():SigninDto {
        return new SigninDto(this);
    }


    public get getEmail():string{
        return this._email;
    }

    public setEmail(val:string):Builder {
        this._email = val;
        return this;
    }

    public get getPassword():string{
        return this._password;
    }


    public setPassword(val:string):Builder {
        this._password = val;
        return this;
    }

    
}