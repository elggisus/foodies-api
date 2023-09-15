import { injectable } from "inversify";
import { AppDataSource } from "../../../../../config/typeorm";
import RestaurantCategoryDataAccessException from "../exception/restaurant-category-dataccess-exception";
import { RestaurantCategoryDto } from "../../domain/application-service/dto/create/restaurant-category-dto";
import { RestaurantCategoryRepository } from "../../domain/application-service/ports/output/repository/restaurant-category-repository";
import { RestaurantCategoryEntity } from "../entity/restaurant-category-entity";
import { RestaurantCategoryDataAccessMapper } from "../mapper/restaurant-category-dataaccess-mapper";
import { GetResturantCategoryDto } from "../../domain/application-service/dto/get/get-restaurant-category-dto";

@injectable()
export class RestaurantCategoryRepositoryImpl implements RestaurantCategoryRepository{
    
    private _resturantCategoryDataAccessMapper:RestaurantCategoryDataAccessMapper;
    constructor(){
        this._resturantCategoryDataAccessMapper = new RestaurantCategoryDataAccessMapper();
    }

    async get(getRestaurantCategoriesDto:GetResturantCategoryDto): Promise<RestaurantCategoryDto[]> {
        try{
            console.log(getRestaurantCategoriesDto);
            
            let params :any = {};
            
            if(getRestaurantCategoriesDto?.getIdRestaurant){
                params.restaurant = {
                    idRestaurant: getRestaurantCategoriesDto.getIdRestaurant
                };
            }
            

            const categoryRepository = AppDataSource.getRepository(RestaurantCategoryEntity);
        
            const categoriesEntities = await categoryRepository.find({
                relations:{
                    restaurant:true
                },
                where: params
            });
            
            const categories  = this._resturantCategoryDataAccessMapper.restaurantcategoriesEntitiesToCategoriesDto(categoriesEntities);
            
            return categories;
        }catch(err){
            console.log(err);
            
            throw new RestaurantCategoryDataAccessException("Ocurrio un error al consultar las categorias del restaurante");
        }
    }

}