
export class ConfigureUserPasswordDto{
    
    readonly code:string;
    readonly password:string;

    constructor(builder:Builder){
        this.code = builder.code;
        this.password = builder.password;
        
    }

    static builder():Builder{
        return new Builder();
    }


}

class Builder{

    code!:string;
    password!:string;

    public build():ConfigureUserPasswordDto {
        return new ConfigureUserPasswordDto(this);
    }

    public setCode(val:string):Builder {
        this.code = val;
        return this;
    }

    public setPassword(val:string):Builder {
        this.password = val;
        return this;
    }
}