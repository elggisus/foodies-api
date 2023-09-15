import { RestaurantCategoryDto } from "../../../dto/create/restaurant-category-dto";

export abstract class RestaurantCategoryRepository{

    abstract get(params:any):Promise<RestaurantCategoryDto[]>;
}