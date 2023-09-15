import { inject, injectable } from "inversify";
import { RestaurantRepository } from "./ports/output/repository/resturant-repository";
import { RestaurantApplicationService } from "./ports/input/service/restaurant-application-service";

@injectable()
export class RestaurantApplicationServiceImpl implements RestaurantApplicationService{

    constructor(@inject('RestaurantRepository') private _restaurantRepository:RestaurantRepository){
        
    }

    async getRestaurants(): Promise<any> {
        const resturants = await this._restaurantRepository.get();
        return resturants;
    }

}