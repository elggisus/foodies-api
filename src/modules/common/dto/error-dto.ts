export class ErrorDto{
    
    readonly code:number;
    readonly message:string;
    readonly errors:string[] = [];


    constructor(builder:Builder){
        this.code = builder.code;
        this.message = builder.message;
        this.errors = builder.errors;
    }

    static builder():Builder{
        return new Builder();
    }

    toPrimitive(){
        return {
            code: this.code,
            message: this.message,
            errors: this.errors
        }
    }
}

class Builder{

    errors!:string[];
    message!:string;
    code!:number;

    public build():ErrorDto {
        return new ErrorDto(this);
    }

   
    public setCode(val:number):Builder {
        this.code = val;
        return this;
    }

    public setMessage(val:string):Builder {
        this.message = val;
        return this;
    }
    
    public setErrors(val:string[]):Builder {
        this.errors = val;
        return this;
    }
}