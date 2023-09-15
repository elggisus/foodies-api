
export class OwnerInformationDto {

    private readonly idOwnerInformation: number;
    private readonly name: string;
    private readonly middleName: string;
    private readonly lastName: string;
    private readonly secondLastName: string;
    private readonly phone: string;
    private readonly email: string;

    constructor(builder: Builder) {
        this.idOwnerInformation = builder.idOwnerInformation
        this.name = builder.name;
        this.middleName = builder.middleName;
        this.lastName = builder.lastName;
        this.secondLastName = builder.secondLastName;
        this.phone = builder.phone;
        this.email = builder.email;
    }

    static builder(): Builder {
        return new Builder();
    }

    public get getIdOwnerInformation():number{
        return this.idOwnerInformation;
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

class Builder {

    idOwnerInformation!: number;
    name!: string;
    middleName!: string;
    lastName!: string;
    secondLastName!: string;
    phone!: string;
    email!: string;

    public build(): OwnerInformationDto {
        return new OwnerInformationDto(this);
    }

    public setIdOwnerInformation(val: number): Builder {
        this.idOwnerInformation = val;
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

    public setPhone(val: string): Builder {
        this.phone = val;
        return this;
    }

    public setEmail(val: string): Builder {
        this.email = val;
        return this;
    }


}