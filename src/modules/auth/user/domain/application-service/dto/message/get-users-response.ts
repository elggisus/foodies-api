export class GetUsersResponse{

    // private readonly code:number;
    private readonly data:any;

    constructor(builder:Builder){
        // this.code = builder.code;
        this.data = builder.data;
    }

    toPrimitive():any{
        return {
            // code: this.code,
            data: this.data
        }
    }

    static builder():Builder{
        return new Builder();

    }
}


class Builder{

    // code!:number;
    data!:any;
   
    public build():GetUsersResponse {
        return new GetUsersResponse(this);
    }

    // public setCode(val:number):Builder {
    //     this.code = val;
    //     return this;
    // }

    public setData(val:any):Builder {
        this.data = val;
        return this;
    }


}