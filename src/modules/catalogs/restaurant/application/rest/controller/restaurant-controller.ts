import { controller, httpGet, httpPost, request, response} from "inversify-express-utils";
import { Request, Response } from "express";

import { BaseHttpController } from "inversify-express-utils";
import { inject } from "inversify";
import { RestaurantApplicationService } from "../../../domain/application-service/ports/input/service/restaurant-application-service";


@controller('/restaurant')
export default class RestaurantController extends BaseHttpController {

    constructor(@inject('RestaurantApplicationService') private _restaurantApplicationService:RestaurantApplicationService){
        super();
    }


    @httpGet('/')
    async getCategories(@request() req: Request, @response() res: Response){
        const data = await this._restaurantApplicationService.getRestaurants();
        return res.json(data);
    }

    @httpPost('/')
    async createRestaurant(@request() req: Request, @response() res: Response){
        res.send("not implemented");
    }
    
}
