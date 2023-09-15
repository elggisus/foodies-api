export class GetDepartmentResponse{

    private readonly data:any;

    constructor(builder:Builder){
        this.data = builder.data;
    }

    toPrimitive():any{
        return {
            data: this.data
        }
    }

    static builder():Builder{
        return new Builder();

    }
}


class Builder{

    data!:any;
   
    public build():GetDepartmentResponse {
        return new GetDepartmentResponse(this);
    }

 
    public setData(val:any):Builder {
        this.data = val;
        return this;
    }


}