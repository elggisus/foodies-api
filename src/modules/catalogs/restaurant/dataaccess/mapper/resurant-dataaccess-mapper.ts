import { CategoryDataAccessMapper } from "../../../category/dataaccess/mapper/category-dataaccess-mapper";
import { OwnerInformationDto } from "../../domain/application-service/dto/create/owner-information-dto";
import { RestaurantDto } from "../../domain/application-service/dto/create/restaurant-dto";
import { OwnerInformationEntity } from "../entity/owner-information-entity";
import { RestaurantEntity } from "../entity/resturant-entity";

export class RestaurantDataAccessMapper{
    
    private _categoryDataAccessMapper:CategoryDataAccessMapper;

    constructor(){
        this._categoryDataAccessMapper = new CategoryDataAccessMapper();
    }


    restaurantsEntitiesToResturantsDto(resturansEntities:RestaurantEntity[]):RestaurantDto[]{
        
        let resturantsDto:RestaurantDto[] = [];
        
        resturansEntities?.forEach((restaurantEntity)=>{
            resturantsDto.push(this.restaurantEntityToRestaurantDto(restaurantEntity));
        });

        return resturantsDto;
    }

    restaurantEntityToRestaurantDto(restaurantEntity:RestaurantEntity):RestaurantDto{
        return RestaurantDto.builder()
            .setIdRestaurant(restaurantEntity.idRestaurant)
            .setCategory((restaurantEntity.category) ? this._categoryDataAccessMapper.categoryEntityToCategoryDto(restaurantEntity.category) : undefined)
            .setOwnerInformation((restaurantEntity.ownerInformation) ? this._ownerInformationEntityToOwnerInformationDto(restaurantEntity.ownerInformation) : undefined)
            .setName(restaurantEntity.name)
            .setDescription(restaurantEntity.description)
            .setPhone(restaurantEntity.phone)
            .setAddress(restaurantEntity.address)
            .setLatitude(restaurantEntity.latitude)
            .setLongitude(restaurantEntity.longitude)
            .setImage(restaurantEntity.image)
            .setBanner(restaurantEntity.banner)
            .setSatus(restaurantEntity.status)
            .build();
    }
    
    private _ownerInformationEntityToOwnerInformationDto(ownerinformationEntity:OwnerInformationEntity):OwnerInformationDto{
        return OwnerInformationDto.builder()
            .setIdOwnerInformation(ownerinformationEntity.idOwnerInformation)
            .setName(ownerinformationEntity.name)
            .setMiddleName(ownerinformationEntity.middleName)
            .setLastName(ownerinformationEntity.lastName)
            .setSecondLastName(ownerinformationEntity.secondLastName)
            .setPhone(ownerinformationEntity.phone)
            .setEmail(ownerinformationEntity.email)
            .build();
    }



}