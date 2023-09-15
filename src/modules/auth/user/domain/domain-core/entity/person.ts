import { BaseEntity } from "../../../../../common/entity/base-entity";
import { PersonId } from "../valueobject/person-id";


export class Person extends BaseEntity<PersonId>{
    
    private readonly name:string;
    private readonly middleName:string;
    private readonly lastName:string;
    private readonly secondLastName:string;
   
    constructor(builder:Builder){
        
        super();
        super.setId = builder.personId;
        this.name = builder.name;
        this.middleName = builder.middleName;
        this.lastName = builder.lastName,
        this.secondLastName = builder.secondLastName;
       
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

   
}

class Builder{

    personId!: PersonId;
    name!: string;
    middleName!: string;
    lastName!: string;
    secondLastName!: string;

    public build():Person {

        return new Person(this);
    }
    
   
    public setPersonId(value: PersonId):Builder{
        this.personId = value;
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


}
