import { CategoryDto } from "../../../../../category/domain/application-service/dto/create/category-dto";
import { OwnerInformationDto } from "./owner-information-dto";


export class RestaurantDto{
    private readonly idRestaurant:number;
    private readonly category: CategoryDto | undefined;
    private readonly ownerInformation:OwnerInformationDto | undefined;
    private readonly name:string;
    private readonly description:string;
    private readonly phone:string;
    private readonly address:string;
    private readonly latitude:string;
    private readonly longitude:string;
    private readonly image:string;
    private readonly banner:string;
    private status:number;


    constructor(builder:Builder){
        this.idRestaurant = builder.getIdRestaurant;
        this.category = builder.getCategory;
        this.ownerInformation = builder.getOwnerInformation;
        this.name = builder.getName;
        this.description = builder.getDescription;
        this.phone = builder.getPhone;
        this.address = builder.getAddress;
        this.latitude = builder.getLatidude;
        this.longitude = builder.getLongitude;
        this.image = builder.getImage;
        this.banner = builder.getBanner;
        this.status = builder.getStatus;
        
    }
    
    static builder():Builder{
        return new Builder();
    }

    public get getIdRestaurant():number{
        return this.idRestaurant;
    }

    public get getCategory():CategoryDto | undefined{
        return this.category;
    }

    public get getOwnerInformation():OwnerInformationDto | undefined{
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

    public get getStatus():number{
        return this.status;
    }


}

class Builder{

    private idResturant!:number;
    private category!: CategoryDto | undefined;
    private ownerInforamation!:OwnerInformationDto | undefined;
    private name!:string;
    private description!:string;
    private phone!:string;
    private address!:string;
    private latitude!:string;
    private longitude!:string;
    private image!:string;
    private banner!:string;
    private status!:number;
   

    public build():RestaurantDto {
        return new RestaurantDto(this);
    }
    public get getIdRestaurant():number{
        return this.idResturant;
    }

    public setIdRestaurant(val:number):Builder {
        this.idResturant = val;
        return this;
    }


    public get getCategory():CategoryDto | undefined{
        return this.category;
    }

    public setCategory(val:CategoryDto | undefined):Builder {
        this.category = val;
        return this;
    }

    public get getOwnerInformation():OwnerInformationDto | undefined{
        return this.ownerInforamation;
    }

    public setOwnerInformation(val:OwnerInformationDto | undefined):Builder {
        this.ownerInforamation = val;
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
        this.image = val;
        return this;
    }
    public get getBanner():string{
        return this.banner;
    }
    
    public setBanner(val:string):Builder {
        this.banner = val;
        return this;
    }



    public get getStatus():number{
        return this.status;
    }

    
    public setSatus(val:number):Builder {
        this.status = val;
        return this;
    }

}
