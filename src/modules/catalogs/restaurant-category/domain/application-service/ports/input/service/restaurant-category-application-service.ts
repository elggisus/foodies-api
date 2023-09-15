import { RestaurantCategoryDto } from "../../../dto/create/restaurant-category-dto";
import { GetResturantCategoryDto } from "../../../dto/get/get-restaurant-category-dto";

export abstract class RestaurantCategoryApplicationService{
    abstract getRestaurantCategories(getRestaurantCategory:GetResturantCategoryDto):Promise<RestaurantCategoryDto[]>;
}