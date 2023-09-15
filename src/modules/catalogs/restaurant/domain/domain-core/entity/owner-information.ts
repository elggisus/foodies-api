import { BaseEntity } from "../../../../../common/entity/base-entity";
import { OwnerInformationId } from "../valueobject/onwer-information-id";


export class OwnerInformation extends BaseEntity<OwnerInformationId>{
    
    private readonly name:string;
    private readonly middleName:string;
    private readonly lastName:string;
    private readonly secondLastName:string;
    private readonly phone:string;
    private readonly email:string;

    constructor(builder:Builder){
        
        super();
        super.setId = builder.ownerInformationId;
        this.name = builder.name;
        this.middleName = builder.middleName;
        this.lastName = builder.lastName,
        this.secondLastName = builder.secondLastName;
        this.phone = builder.phone;
        this.email = builder.email;
       
    }
    
    static builder():Builder{
        return new Builder();
    }

    public get getName():string{
        return this.name;
    }

    public get getMiddleName():string{
        return this.middleName;
    }
    
    public get getLastName():string{
        return this.lastName;
    }

    public get getSecondLastName():string{
        return this.secondLastName;
    }

    public get getPhone():string{
        return this.phone;
    }

    public get getEmail():string{
        return this.email;
    }

   
}

class Builder{

    ownerInformationId!: OwnerInformationId;
    name!: string;
    middleName!: string;
    lastName!: string;
    secondLastName!: string;
    phone!:string;
    email!:string;

    public build():OwnerInformation {
        return new OwnerInformation(this);
    }
    
   
    public setOwnerInformationId(value: OwnerInformationId):Builder{
        this.ownerInformationId = value;
        return this;
    }
    
    public setName(value: string):Builder{        
        this.name = value;
        
        return this;
    }

    public setMiddleName(value: string):Builder{
        this.middleName = value;
        return this;
    }

    public setLastName(value: string):Builder{
        this.lastName = value;
        return this;
    }

    public setSecondLastName(value: string):Builder{
        this.secondLastName = value;
        return this;
    }

    
    public setPhone(value: string):Builder{
        this.phone = value;
        return this;
    }

    
    public setEmail(value: string):Builder{
        this.email = value;
        return this;
    }

}
