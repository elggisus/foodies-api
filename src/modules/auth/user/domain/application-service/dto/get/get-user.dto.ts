
export class GetUsersDto{
    
    readonly name:string | undefined;
    readonly email:string | undefined;
    readonly username:string | undefined;
    readonly status:number | undefined;

    constructor(builder:Builder){
        this.name = builder.name
        this.email = builder.email;
        this.username = builder.username;
        this.status = builder.status;

    }

    static builder():Builder{
        return new Builder();
    }

    toPrimitive(){
        return {
            name: this.name,
            email : this.email,
            username: this.username,
            status: this.status
        }
    }

    
}

class Builder{

    name!:string | undefined;
    email!:string | undefined;
    username!:string | undefined;
    status!: number | undefined;
    

    public build():GetUsersDto {
        return new GetUsersDto(this);
    }

    public setName(val:string | undefined):Builder {
        this.name = val;
        return this;
    }

   
    public setEmail(val:string | undefined):Builder {
        this.email = val;
        return this;
    }
    public setUsername(val:string | undefined):Builder {
        this.username = val;
        return this;
    }

    public setStatus(val:number | undefined):Builder {
        this.status = val;
        return this;
    }

   
}