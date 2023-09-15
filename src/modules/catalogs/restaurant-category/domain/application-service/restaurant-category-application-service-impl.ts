import { inject, injectable } from "inversify";
import { RestaurantCategoryApplicationService } from "./ports/input/service/restaurant-category-application-service";
import { RestaurantCategoryRepository } from "./ports/output/repository/restaurant-category-repository";
import { RestaurantCategoryDto } from "./dto/create/restaurant-category-dto";
import { GetResturantCategoryDto } from "./dto/get/get-restaurant-category-dto";

@injectable()
export class RestaurantCategoryApplicationServiceImpl implements RestaurantCategoryApplicationService{
    
    constructor(@inject('RestaurantCategoryRepository') private _restaurantCategoryRepository:RestaurantCategoryRepository){}

    async getRestaurantCategories(getRestaurantCategoryDto:GetResturantCategoryDto): Promise<RestaurantCategoryDto[]> {
        const resturantCategories =  await this._restaurantCategoryRepository.get(getRestaurantCategoryDto);
        return resturantCategories;
    }

}