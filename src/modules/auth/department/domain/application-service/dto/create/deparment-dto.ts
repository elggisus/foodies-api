
export class DepartmentDto{
    
    readonly idDepartment:number;
    readonly name:string;
    readonly status:number;

    constructor(builder:Builder){
        this.idDepartment = builder.idDepartment
        this.name = builder.name;
        this.status = builder.status;
    }

    static builder():Builder{
        return new Builder();
    }
}

class Builder{

    idDepartment!:number;
    name!:string;
    status!:number;

    public build():DepartmentDto {
        return new DepartmentDto(this);
    }

    public setIdDepartment(val:number):Builder {
        this.idDepartment = val;
        return this;
    }


    public setName(val:string):Builder {
        this.name = val;
        return this;
    }


    public setStatus(val:number):Builder {
        this.status = val;
        return this;
    }
   
}