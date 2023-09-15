import { RestaurantDto } from "../../../dto/create/restaurant-dto";

export abstract class RestaurantRepository{
    abstract get():Promise<RestaurantDto[]>;
}