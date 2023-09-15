import { controller, httpGet, request, response, httpPost, httpPut, requestParam } from "inversify-express-utils";
import { Request, Response } from "express";

import { BaseHttpController } from "inversify-express-utils";
import { inject } from "inversify";
import { ErrorDto } from "../../../../../common/dto/error-dto";
import { StatusCodes } from "http-status-codes";
import { DepartmentApplicationService } from "../../../domain/application-service/ports/input/service/deparment-application-service";
import { GetDepartmentDto } from "../../../domain/application-service/dto/get/get-deparment-dto";
import { GetDepartmentResponse } from "../../../domain/application-service/dto/message/get-deparment-response";
import { CreateDepartmentResponse } from "../../../domain/application-service/dto/message/create-department-response";
import { DepartmentDto } from "../../../domain/application-service/dto/create/deparment-dto";
import DepartmentDomainException from "../../../domain/domain-core/exception/deparment-domain-exception";


@controller('/departments')
export default class DepartmentController extends BaseHttpController {



    constructor(@inject('DepartmentApplicationService') private _departmentApplicationService: DepartmentApplicationService) {
        super();
        
    }
    

    @httpGet('/')
    async getDepartments(@request() req: Request, @response() res: Response){
        
        const getdepartmentDto: GetDepartmentDto =  GetDepartmentDto.builder()
            .setName((req.query.name) ? String(req.query.name) : undefined)
            .setStatus((req.query.status) ?  parseInt(String(req.query.status)) : undefined)
            .build();

        const getdepartmentResponse: GetDepartmentResponse = await this._departmentApplicationService.getDepartments(getdepartmentDto);

        return res.status(StatusCodes.OK).json(getdepartmentResponse.toPrimitive());


    }

    @httpPost('/')
    async createDepartment(@request() req: Request, @response() res: Response){
        try{
            const departmentDto = DepartmentDto.builder()
                .setIdDepartment(req.body.idUser)
                .setName(req.body.name)
                .setStatus(req.body.status).build();
            
            const createDepartmentResponse:CreateDepartmentResponse = await this._departmentApplicationService.createdepartment(departmentDto);
            
            return res.json(createDepartmentResponse.toPrimitive());

        }catch(err){
            if (err instanceof DepartmentDomainException) {
                return res.status(StatusCodes.OK).json(
                    ErrorDto.builder()
                        .setCode(StatusCodes.INTERNAL_SERVER_ERROR)
                        .setMessage(err.message)
                        .build().toPrimitive()
                );
            }
        }


        
    }
}
