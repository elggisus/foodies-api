
export class PersonDto {

    private readonly idPerson: number;
    private readonly name: string;
    private readonly middleName: string;
    private readonly lastName: string;
    private readonly secondLastName: string;

    constructor(builder: Builder) {
        this.idPerson = builder.idPerson
        this.name = builder.name;
        this.middleName = builder.middleName;
        this.lastName = builder.lastName;
        this.secondLastName = builder.secondLastName;
    }

    static builder(): Builder {
        return new Builder();
    }

    public get getIdPerson():number{
        return this.idPerson;
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

class Builder {

    idPerson!: number;
    name!: string;
    middleName!: string;
    lastName!: string;
    secondLastName!: string;


    public build(): PersonDto {
        return new PersonDto(this);
    }

    public setIdPerson(val: number): Builder {
        this.idPerson = val;
        return this;
    }

    public setName(val: string): Builder {
        this.name = val;
        return this;
    }
    public setMiddleName(val: string): Builder {
        this.middleName = val;
        return this;
    }

    public setLastName(val: string): Builder {
        this.lastName = val;
        return this;
    }

    public setSecondLastName(val: string): Builder {
        this.secondLastName = val;
        return this;
    }


}