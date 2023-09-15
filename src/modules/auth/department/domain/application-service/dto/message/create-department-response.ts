export class CreateDepartmentResponse{

    private readonly idDepartment:number;
    private readonly message:string;

    constructor(builder:Builder){
        this.idDepartment = builder.idDepartment;
        this.message = builder.message;
    }

    toPrimitive():any{
        return {
            idDepartment:this.idDepartment,
            message:this.message
        }
    }

    static builder():Builder{
        return new Builder();

    }
}


class Builder{

    idDepartment!:number;
    message!:string;
   
    public build():CreateDepartmentResponse {
        return new CreateDepartmentResponse(this);
    }

    public setIdDepartment(val:number):Builder {
        this.idDepartment = val;
        return this;
    }

    public setMessage(val:string):Builder {
        this.message = val;
        return this;
    }


}