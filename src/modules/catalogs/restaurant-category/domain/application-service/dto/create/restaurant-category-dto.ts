import { RestaurantDto } from "../../../../../restaurant/domain/application-service/dto/create/restaurant-dto";

export class RestaurantCategoryDto{
    
    private readonly idRestaurantCategory:number;
    private readonly restaurant:RestaurantDto;
    private readonly name:string;
    private readonly status:number;

    constructor(builder:Builder){
        this.idRestaurantCategory = builder.getIdRestaurantCategory
        this.restaurant = builder.getRestaurant;
        this.name = builder.getName;
        this.status = builder.getStatus;
    }

    public get getIdRestaurantCategory():number{
        return this.idRestaurantCategory;
    }

    public get getRestaurant():RestaurantDto{
        return this.restaurant;
    }

    public get getName():string{
        return this.name;
    }


    public get getStatus():number{
        return this.status;
    }


    static builder():Builder{
        return new Builder();
    }
}

class Builder{

    private idRestaurantCategory!:number;
    private restaurant!:RestaurantDto;
    private name!:string;
    private status!:number;

    public build():RestaurantCategoryDto {
        return new RestaurantCategoryDto(this);
    }

    public get getIdRestaurantCategory():number{
        return this.idRestaurantCategory;
    }

    public setIdRestaurantCategory(val:number):Builder {
        this.idRestaurantCategory = val;
        return this;
    }

    public get getRestaurant():RestaurantDto{
        return this.restaurant;
    }

    public setRestaurant(val:RestaurantDto):Builder{
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

    public get getStatus():number{
        return this.status;
    }

    public setStatus(val:number):Builder {
        this.status = val;
        return this;
    }
   
}