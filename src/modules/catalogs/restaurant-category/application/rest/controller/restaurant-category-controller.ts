import { controller, httpGet, httpPost, request, response} from "inversify-express-utils";
import { Request, Response } from "express";

import { BaseHttpController } from "inversify-express-utils";
import { inject } from "inversify";
import { RestaurantCategoryApplicationService } from "../../../domain/application-service/ports/input/service/restaurant-category-application-service";
import { StatusCodes } from "http-status-codes";
import { GetResturantCategoryDto } from "../../../domain/application-service/dto/get/get-restaurant-category-dto";


@controller('/restaurant/category')
export default class RestaurantCategoryController extends BaseHttpController {
    

    constructor(@inject('RestaurantCategoryApplicationService') private _restaurantCategoryApplicationService:RestaurantCategoryApplicationService){
        super();
    }


    @httpGet('/')
    async getResturantCategory(@request() req: Request, @response() res: Response){
        try{
            const getRestaurantCategoryDto = GetResturantCategoryDto.builder()
                .setIdRestaurant(parseInt(String(req.query.idRestaurant))).build();
            
            const resturantCategories = await this._restaurantCategoryApplicationService.getRestaurantCategories(getRestaurantCategoryDto);
            return res.status(StatusCodes.OK).json(resturantCategories);
        }catch(err){

        }
    }

   

}
