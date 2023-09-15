import { AggregateRoot } from "../../../../../common/entity/aggregate-root";
import UserDomainException from "../exception/user-domain.exception";
import { UserId } from "../valueobject/user-id";
import { UserStatus } from "../valueobject/user-status";
import { Person } from "./person";

export class User extends AggregateRoot<UserId>{
    
    private readonly person:Person | undefined;
    private readonly email:string;
    private readonly username:string;
    private password:string;
    private status:UserStatus;
    private readonly created:string;
    private lastLogin:string;
    private code:string;
    private type:number;

    constructor(builder:Builder){
        super();
        super.setId = builder.userId;
        this.person = builder.person;
        this.email = builder.email;
        this.username = builder.username;
        this.password = builder.password,
        this.status = builder.status;
        this.created = builder.created;
        this.lastLogin = builder.lastLogin;
        this.code = builder.code;
        this.type = builder.type;
    }
    
    initializeUser(code:string){
        console.log(code);
        
        this.status = UserStatus.PENDING;
        this.code = code;
    }

    validateUser(){
        if(this.code == null){
            throw new UserDomainException("Code invalid");
        }
    }

    signin(value:string){
       
        this.lastLogin =  value;
        if(this.status != UserStatus.ENABLED){
            throw new UserDomainException("User status invalid");
        }
        
    }

    configurePassword(value:string){
        
        // if(this.status != UserStatus.PENDING){
        //     throw new UserDomainException("User status invalid");
        // }

        this.password =  value;
        this.status = UserStatus.ENABLED;
        
    }

    disable(){

        if(this.status != UserStatus.ENABLED){
            throw new UserDomainException("No se puede deshabilitar el usuario");
        }
        
        this.status = UserStatus.DISABLED;
    }

    static builder():Builder{
        return new Builder();
    }

    public get getPerson():Person | undefined{
        return this.person;
    }

    public get getEmail():string{
        return this.email;
    }

    public get getUsername():string{
        return this.username;
    }
    
    public get getPassword():string{
        return this.password;
    }

    public get getStatus():UserStatus{
        return this.status;
    }

    public get getCreated():string{
        return this.created;
    }

    public get getLastLogin():string{
        return this.lastLogin;
    }

    public get getCode():string{
        return this.code;
    }

    public get getType():number{
        return this.type;
    }

   
}

class Builder{

    userId!:UserId;
    person!:Person | undefined;
    email!:string;
    username!:string;
    password!:string;
    status!:UserStatus;
    created!:string;
    lastLogin!:string;
    code!:string;
    type!:number;
   

    public build():User {
        return new User(this);
    }

    public setUserId(val:UserId):Builder {
        this.userId = val;
        return this;
    }

    public setPerson(val:Person | undefined):Builder {        
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
    
    public setSatus(val:UserStatus):Builder {
        this.status = val;
        return this;
    }
    public setCreated(val:string):Builder {
        this.created = val;
        return this;
    }
    public setlastLogin(val:string):Builder {
        this.lastLogin = val;
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
