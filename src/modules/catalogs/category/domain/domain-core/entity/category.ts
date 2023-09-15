import { BaseEntity } from "../../../../../common/entity/base-entity";
import { CategoryId } from "../valueobject/category-id";
import { CategoryStatus } from "../valueobject/category-status";

export class Category extends BaseEntity<CategoryId>{
    
    private readonly name:string;
    private readonly description!: string;
    private readonly image!: string;
    private status:CategoryStatus;


    constructor(builder:Builder){
        super();
        super.setId = builder.getCategoryId;
        this.name = builder.getName;
        this.description = builder.getDescription;
        this.image = builder.getImage;
        this.status = builder.getStatus;
        
    }
    
    static builder():Builder{
        return new Builder();
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

    public get getStatus():CategoryStatus{
        return this.status;
    }

    public initializeAndValidate():void{
        this.status = CategoryStatus.ENABLED;
    }

   
}

class Builder{

    private categoryId!: CategoryId;
    private name!:string;
    private description!: string;
    private image!: string;
    private status!:CategoryStatus;
   

    public build():Category {
        return new Category(this);
    }

    public get getCategoryId():CategoryId{
        return this.categoryId;
    }

    public setCategoryId(val:CategoryId):Builder {
        this.categoryId = val;
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
    
    public setImage(val:string):Builder {
        this.image = val;
        return this;
    }

    public get getImage():string{
        return this.image;
    }
    
    public setDescription(val:string):Builder {
        this.description = val;
        return this;
    }


    public get getStatus():CategoryStatus{
        return this.status;
    }

    
    public setSatus(val:CategoryStatus):Builder {
        this.status = val;
        return this;
    }

}
