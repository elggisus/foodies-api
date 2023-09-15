import { controller, httpGet, httpPost, request, response} from "inversify-express-utils";
import { Request, Response } from "express";

import { BaseHttpController } from "inversify-express-utils";
import { inject } from "inversify";
import { CategoryApplicationService } from "../../../domain/application-service/ports/input/service/category-application-service";
import { CategoryRequestMapper } from "../../mapper/category-request-mapper";
import { CreateCategoryResponse } from "../../../domain/application-service/dto/message/create-category-response";
import { ErrorDto } from "../../../../../common/dto/error-dto";
import { StatusCodes } from "http-status-codes";




@controller('/category')
export default class CategoryController extends BaseHttpController {

    private _categoryRequestMapper:CategoryRequestMapper;

    constructor(@inject('CategoryApplicationService') private _categoryApplicationService: CategoryApplicationService) {
        super();
        this._categoryRequestMapper = new CategoryRequestMapper();
    }
    

    @httpGet('/')
    async getCategories(@request() req: Request, @response() res: Response){
        const categories = await this._categoryApplicationService.getCategories();
        return res.send(categories);


    }

    @httpPost('/')
    async createCategory(@request() req: Request, @response() res: Response){

        try{
            const categoryDto = this._categoryRequestMapper.requestToCategoryDto(req.body);

            const createCategoryResponse: CreateCategoryResponse = await this._categoryApplicationService.createCategory(categoryDto);
            return res.status(StatusCodes.CREATED).json(createCategoryResponse.toPrimitive());
        }catch(err:any){
            return res.json(
                ErrorDto.builder()
                .setMessage(err.message)
                .build()
            )
        }


    }

    
}
