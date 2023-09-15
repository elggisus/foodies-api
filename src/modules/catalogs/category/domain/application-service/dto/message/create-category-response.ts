export class CreateCategoryResponse{

    private readonly idCategory:number;
    private readonly message:string;

    constructor(builder:Builder){
        this.idCategory = builder.getIdCategory;
        this.message = builder.getMessage;
    }

    toPrimitive():any{
        return {
            idCategory:this.idCategory,
            message:this.message
        }
    }

    static builder():Builder{
        return new Builder();

    }
}


class Builder{

    private idCategory!:number;
    private message!:string;
   
    public build():CreateCategoryResponse {
        return new CreateCategoryResponse(this);
    }

    public get getIdCategory():number{
        return this.idCategory;
    }

    public setIdCategory(val:number):Builder {
        this.idCategory = val;
        return this;
    }

    public get getMessage():string{
        return this.message;
    }

    public setMessage(val:string):Builder {
        this.message = val;
        return this;
    }


}