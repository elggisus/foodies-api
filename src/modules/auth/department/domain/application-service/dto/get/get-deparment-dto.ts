
export class GetDepartmentDto{
    
    readonly name:string | undefined;
    readonly status:number | undefined;

    constructor(builder:Builder){
        this.name = builder.name
        this.status = builder.status;

    }

    static builder():Builder{
        return new Builder();
    }

    toPrimitive(){
        return {
            name: this.name,
            status: this.status
        }
    }

}

class Builder{

    name!:string | undefined;
    status!: number | undefined;

    public build():GetDepartmentDto {
        return new GetDepartmentDto(this);
    }

    public setName(val:string | undefined):Builder {
        this.name = val;
        return this;
    }

    public setStatus(val:number | undefined):Builder {
        this.status = val;
        return this;
    }

   
}