import { BaseEntity } from "../../../../../common/entity/base-entity";
import { Restaurant } from "../../../../restaurant/domain/domain-core/entity/restaurant";
import { RestaurantCategoryId } from "../valueobject/restaurant-category-id";
import { RestaurantCategoryStatus } from "../valueobject/restaurant-category-status";


export class RestaurantCategory extends BaseEntity<RestaurantCategoryId>{
    
    private readonly name:string;
    private readonly restaurant:Restaurant;
    private status:RestaurantCategoryStatus;


    constructor(builder:Builder){
        super();
        super.setId = builder.getRestaurantCategoryId;
        this.restaurant = builder.getRestaurant;
        this.name = builder.getName;
        this.status = builder.getStatus;
        
    }
    
    static builder():Builder{
        return new Builder();
    }

    public get getResaturant():Restaurant{
        return this.restaurant;
    }

    public get getName():string{
        return this.name;
    }

    public get getStatus():RestaurantCategoryStatus{
        return this.status;
    }

    public initializeAndValidate():void{
        this.status = RestaurantCategoryStatus.ENABLED;
    }

   
}

class Builder{

    private restaurantCategoryId!: RestaurantCategoryId;
    private restaurant!:Restaurant;
    private name!:string;
    private status!:RestaurantCategoryStatus;
   

    public build():RestaurantCategory {
        return new RestaurantCategory(this);
    }

    public get getRestaurantCategoryId():RestaurantCategoryId{
        return this.restaurantCategoryId;
    }

    public setRestaurantCategoryId(val:RestaurantCategoryId):Builder {
        this.restaurantCategoryId = val;
        return this;
    }

    public get getRestaurant():Restaurant{
        return this.restaurant;
    }

    public setRestaurant(val:Restaurant):Builder{
        this.restaurant = val;
        return this;
    }

    public get getName():string{
        return this.name;
    }
    
    public setName(val:string):Builder {
        this.name = val;
        return this;
    }


    public get getStatus():RestaurantCategoryStatus{
        return this.status;
    }

    
    public setSatus(val:RestaurantCategoryStatus):Builder {
        this.status = val;
        return this;
    }

}
