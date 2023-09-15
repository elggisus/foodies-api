import { BaseEntity } from "../../../../../common/entity/base-entity";
import { Category } from "../../../../category/domain/domain-core/entity/category";
import { RestaurantStatus } from "../valueobject/restaurant-status";
import { RestaurantId } from "../valueobject/resturant-id";
import { OwnerInformation } from "./owner-information";

export class Restaurant extends BaseEntity<RestaurantId>{
    
    private readonly category: Category | undefined;
    private readonly ownerInformation:OwnerInformation;
    private readonly name:string;
    private readonly description:string;
    private readonly phone:string;
    private readonly address:string;
    private readonly latitude:string;
    private readonly longitude:string;
    private readonly image:string;
    private readonly banner:string;
    private status:RestaurantStatus;


    constructor(builder:Builder){
        super();
        super.setId = builder.getResutaurantId;
        this.category = builder.getCategory;
        this.ownerInformation = builder.getOwnerInformation;
        this.name = builder.getName;
        this.description = builder.getDescription;
        this.phone = builder.getPhone;
        this.address = builder.getAddress;
        this.latitude = builder.getLatidude;
        this.longitude = builder.getLongitude;
        this.image = builder.getImage;
        this.banner = builder.getImage;
        this.status = builder.getStatus;
        
    }
    
    static builder():Builder{
        return new Builder();
    }

    public get getCategory():Category | undefined{
        return this.category;
    }

    public get getOwnerInformation():OwnerInformation{
        return this.ownerInformation;
    }


    public get getName():string{
        return this.name;
    }

    public get getDescription():string{
        return this.description;
    }

    public get getPhone():string{
        return this.phone;
    }

    public get getAddress():string{
        return this.address;
    }

    public get getLatidude():string{
        return this.latitude;
    }

    public get getLongitude():string{
        return this.longitude;
    }

    public get getImage():string{
        return this.image;
    }

    public get getBanner():string{
        return this.banner;
    }

    public get getStatus():RestaurantStatus{
        return this.status;
    }

    public initializeAndValidate():void{
        this.status = RestaurantStatus.ENABLED;
    }

}

class Builder{

    private resturantId!:RestaurantId;
    private category!: Category;
    private ownerInformation!:OwnerInformation;
    private name!:string;
    private description!:string;
    private phone!:string;
    private address!:string;
    private latitude!:string;
    private longitude!:string;
    private image!:string;
    private banner!:string;
    private status!:RestaurantStatus;
   

    public build():Restaurant {
        return new Restaurant(this);
    }
    public get getResutaurantId():RestaurantId{
        return this.resturantId;
    }

    public setRestaurantId(val:RestaurantId):Builder {
        this.resturantId = val;
        return this;
    }


    public get getCategory():Category{
        return this.category;
    }

    public setCategory(val:Category):Builder {
        this.category = val;
        return this;
    }

    public get getOwnerInformation():OwnerInformation{
        return this.ownerInformation;
    }

    public setOwnerInformation(val:OwnerInformation):Builder{
        this.ownerInformation = val;
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

    public get getPhone():string{
        return this.phone;
    }
    
    public setPhone(val:string):Builder {
        this.phone = val;
        return this;
    }

    public get getAddress():string{
        return this.address;
    }
    
    public setAddress(val:string):Builder {
        this.address = val;
        return this;
    }

    public get getLatidude():string{
        return this.latitude;
    }
    
    public setLatitude(val:string):Builder {
        this.latitude = val;
        return this;
    }

    public get getLongitude():string{
        return this.longitude;
    }
    
    public setLongitude(val:string):Builder {
        this.longitude = val;
        return this;
    }

    public get getImage():string{
        return this.image;
    }
    
    public setImage(val:string):Builder {
        this.longitude = val;
        return this;
    }
    public get getBanner():string{
        return this.banner;
    }
    
    public setBanner(val:string):Builder {
        this.banner = val;
        return this;
    }



    public get getStatus():RestaurantStatus{
        return this.status;
    }

    
    public setSatus(val:RestaurantStatus):Builder {
        this.status = val;
        return this;
    }

}
