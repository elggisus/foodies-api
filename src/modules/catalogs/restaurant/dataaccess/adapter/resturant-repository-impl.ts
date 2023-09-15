import { injectable } from "inversify";
import { AppDataSource } from "../../../../../config/typeorm";
import { RestaurantDto } from "../../domain/application-service/dto/create/restaurant-dto";
import { RestaurantRepository } from "../../domain/application-service/ports/output/repository/resturant-repository";
import { RestaurantEntity } from "../entity/resturant-entity";
import { RestaurantDataAccessMapper } from "../mapper/resurant-dataaccess-mapper";

@injectable()
export class ResturanteRepositoryImpl implements RestaurantRepository {
    private _restaurantDataAccessMapper:RestaurantDataAccessMapper;

    constructor(){
        this._restaurantDataAccessMapper = new RestaurantDataAccessMapper();
    }

    async get(): Promise<RestaurantDto[]> {

        const restaurantRepository = AppDataSource.getRepository(RestaurantEntity);

        const restaurantsEntities = await restaurantRepository.find({
            relations:{
                category:true,
                ownerInformation:true
            }
        });

        const restaurants = this._restaurantDataAccessMapper.restaurantsEntitiesToResturantsDto(restaurantsEntities);

        return restaurants;
    }

}