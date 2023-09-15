import { inject, injectable } from "inversify";
import { DepartmentApplicationService } from "./ports/input/service/deparment-application-service";
import { DepartmentDomainService } from "../domain-core/department-domain-service";
import { DepartmentDataMapper } from "./mapper/department-data-mapper";
import { DepartmentRepository } from "./ports/output/repository/department-repository";
import { departmentDomainServiceImpl } from "../domain-core/department-domain-service-impl";
import { GetDepartmentResponse } from "./dto/message/get-deparment-response";
import { GetDepartmentDto } from "./dto/get/get-deparment-dto";
import { CreateDepartmentResponse } from "./dto/message/create-department-response";
import { DepartmentDto } from "./dto/create/deparment-dto";
import DepartmentDomainException from "../domain-core/exception/deparment-domain-exception";
import { DepartmentCreatedEvent } from "../domain-core/event/department-created-event";


@injectable()   
export class departmentApplicationServiceImpl implements DepartmentApplicationService{

    private _departmentDomainService:DepartmentDomainService;
    private _departmentDataMapper:DepartmentDataMapper;

    constructor(@inject('DepartmentRepository') private _departmentRepository:DepartmentRepository){
        this._departmentDomainService =  new departmentDomainServiceImpl();
        this._departmentDataMapper = new DepartmentDataMapper();
    }
    
    async getDepartments(getdepartmentDto:GetDepartmentDto): Promise<GetDepartmentResponse> {
        const departments = await this._departmentRepository.get(getdepartmentDto.toPrimitive());
        return GetDepartmentResponse.builder()
            .setData(departments).build();
    }
    
    async createdepartment(departmentDto: DepartmentDto): Promise<CreateDepartmentResponse> {
        
        const department = this._departmentDataMapper.departmentDtoTodepartment(departmentDto);
       
        const departmentValidate = await this._departmentRepository.findByName(department.getName);

        if(departmentValidate){
            throw new DepartmentDomainException("Ya existe un departamento con ese nombre");
        }
        
        const departmentCreatedEvent:DepartmentCreatedEvent = this._departmentDomainService.initializeAndValidatedepartment(department);

        
       
        const departmentCreated = await this._departmentRepository.save(departmentCreatedEvent.getDepartment);
       
        return this._departmentDataMapper.departmentToCreateDepartmentResponse(departmentCreated,"Departamento creado con exito");

    }

}
