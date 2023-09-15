
export class CategoryDto{
    
    private readonly idCategory:number;
    private readonly name:string;
    private readonly description:string;
    private readonly image:string;
    private readonly status:number;

    constructor(builder:Builder){
        this.idCategory = builder.getIdCategory
        this.name = builder.getName;
        this.description = builder.getDescription;
        this.image = builder.getImage;
        this.status = builder.getStatus;
    }

    public get getIdCategory():number{
        return this.idCategory;
    }

    public get getName():string{
        return this.name;
    }

    public get getDescription():string{
        return this.description;
    }

    public get getImage():string{
        return this.image;
    }


    public get getStatus():number{
        return this.status;
    }


    static builder():Builder{
        return new Builder();
    }
}

class Builder{

    private idCategory!:number;
    private name!:string;
    private description!:string;
    private image!:string;
    private status!:number;

    public build():CategoryDto {
        return new CategoryDto(this);
    }

    public get getIdCategory():number{
        return this.idCategory;
    }

    public setIdCategory(val:number):Builder {
        this.idCategory = val;
        return this;
    }

    public get getName():string{
        return this.name;
    }

    public setName(val:string):Builder {
        this.name = val;
        return this;
    }

    public get getDescription():string{
        return this.description;
    }

    public setDescription(val:string):Builder {
        this.description = val;
        return this;
    }

    public get getImage():string{
        return this.image;
    }

    public setImage(val:string):Builder {
        this.image = val;
        return this;
    }


    public get getStatus():number{
        return this.status;
    }

    public setStatus(val:number):Builder {
        this.status = val;
        return this;
    }
   
}