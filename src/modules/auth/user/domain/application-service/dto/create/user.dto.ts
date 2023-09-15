import { PersonDto } from "./person.dto";

export class UserDto{
    
    readonly idUser:number;
    private readonly person:PersonDto | undefined;
    readonly email:string;
    readonly username:string;
    readonly password:string;
    readonly created:string;
    readonly lastLogin:string;
    readonly status:number;
    readonly code:string;
    readonly type:number;

    constructor(builder:Builder){
        this.idUser = builder.idUser
        this.person = builder.person;
        this.email = builder.email;
        this.username = builder.username;
        this.password = builder.password;
        this.created = builder.created;
        this.lastLogin = builder.lastLogin;
        this.status = builder.status;
        this.code = builder.code;
        this.type = builder.type;
    }

    static builder():Builder{
        return new Builder();
    }

    public get getPerson():PersonDto | undefined{
        return this.person;
    }
}

class Builder{

    idUser!:number;
    person!:PersonDto | undefined;
    email!:string;
    username!:string;
    password!:string;
    created!:string;
    lastLogin!:string;
    status!:number;
    code!:string;
    type!:number;

    public build():UserDto {
        return new UserDto(this);
    }

    public setIdUser(val:number):Builder {
        this.idUser = val;
        return this;
    }

    public setPerson(val:PersonDto | undefined):Builder {
        this.person = val;
        return this;
    }

    public setEmail(val:string):Builder {
        this.email = val;
        return this;
    }
    public setUsername(val:string):Builder {
        this.username = val;
        return this;
    }

    public setPassword(val:string):Builder {
        this.password = val;
        return this;
    }

    public setCreated(val:string):Builder {
        this.created = val;
        return this;
    }

    public setLastLogin(val:string):Builder {
        this.lastLogin = val;
        return this;
    }

    public setStatus(val:number):Builder {
        this.status = val;
        return this;
    }
    public setCode(val:string):Builder {
        this.code = val;
        return this;
    }

    public setType(val:number):Builder {
        this.type = val;
        return this;
    }
}