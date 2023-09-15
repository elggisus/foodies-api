import { RestaurantDataAccessMapper } from "../../../restaurant/dataaccess/mapper/resurant-dataaccess-mapper";
import { RestaurantCategoryDto } from "../../domain/application-service/dto/create/restaurant-category-dto";
import { RestaurantCategoryEntity } from "../entity/restaurant-category-entity";

export class RestaurantCategoryDataAccessMapper{

    private _resturantDataAccessMapper:RestaurantDataAccessMapper;

    constructor(){
        this._resturantDataAccessMapper = new RestaurantDataAccessMapper();
    }


    restaurantCategoryEntityToCategoryDto(restaurantCategoryEntinty:RestaurantCategoryEntity):RestaurantCategoryDto{
        return RestaurantCategoryDto.builder()
            .setIdRestaurantCategory(restaurantCategoryEntinty.idRestaurantCategory)
            .setRestaurant(this._resturantDataAccessMapper.restaurantEntityToRestaurantDto(restaurantCategoryEntinty.restaurant))
            .setName(restaurantCategoryEntinty.name)            
            .setStatus(restaurantCategoryEntinty.status)
            .build();
    }


    restaurantcategoriesEntitiesToCategoriesDto(restaurantCategoriesEntities:RestaurantCategoryEntity[]){
        let resturantCategories:RestaurantCategoryDto[] = [];
        restaurantCategoriesEntities?.forEach((restaurantCategoryEntity)=>{
            resturantCategories.push(this.restaurantCategoryEntityToCategoryDto(restaurantCategoryEntity));
        });

        return resturantCategories;
    }
}