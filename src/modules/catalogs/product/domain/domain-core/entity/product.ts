import { BaseEntity } from "../../../../../common/entity/base-entity";
import { Restaurant } from "../../../../restaurant/domain/domain-core/entity/restaurant";
import { Money } from "../valueobject/money";
import { ProductId } from "../valueobject/product-id";
import { ProductStatus } from "../valueobject/product-status";

export class Product extends BaseEntity<ProductId>{
    
    private readonly restaurant:Restaurant;
    private readonly name:string;
    private readonly description!: string;
    private readonly price:Money;
    private readonly image!: string;
    private status:ProductStatus;


    constructor(builder:Builder){
        super();
        super.setId = builder.getProductId;
        this.restaurant = builder.getRestaurant;
        this.name = builder.getName;
        this.description = builder.getDescription;
        this.price = builder.getPrice;
        this.image = builder.getImage;
        this.status = builder.getStatus;
        
    }
    
    static builder():Builder{
        return new Builder();
    }

    public get getRestaurant():Restaurant{
        return this.restaurant;
    }

    public get getName():string{
        return this.name;
    }

    public get getDescription():string{
        return this.description;
    }

    public get getPrice():Money{
        return this.price;
    }


    public get getImage():string{
        return this.image;
    }

    public get getStatus():ProductStatus{
        return this.status;
    }

    public initializeAndValidate():void{
        this.status = ProductStatus.ENABLED;
    }

   
}

class Builder{

    private restaurant!:Restaurant;
    private productId!: ProductId;
    private name!:string;
    private description!: string;
    private price!:Money;
    private image!: string;
    private status!:ProductStatus;
   

    public build():Product {
        return new Product(this);
    }

    public get getRestaurant():Restaurant{
        return this.restaurant;
    }

    public setRestaurant(val:Restaurant):Builder {
        this.restaurant = val;
        return this;
    }


    public get getProductId():ProductId{
        return this.productId;
    }

    public setProductId(val:ProductId):Builder {
        this.productId = val;
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

    public setPrice(val:Money):Builder {
        this.price = val;
        return this;
    }

    public get getPrice():Money{
        return this.price;
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


    public get getStatus():ProductStatus{
        return this.status;
    }

    
    public setSatus(val:ProductStatus):Builder {
        this.status = val;
        return this;
    }

}
