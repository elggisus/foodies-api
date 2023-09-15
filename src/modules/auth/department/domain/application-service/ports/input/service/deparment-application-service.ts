import { DepartmentDto } from "../../../dto/create/deparment-dto";
import { GetDepartmentDto } from "../../../dto/get/get-deparment-dto";
import { CreateDepartmentResponse } from "../../../dto/message/create-department-response";
import { GetDepartmentResponse } from "../../../dto/message/get-deparment-response";

export abstract class DepartmentApplicationService{

    abstract getDepartments(getdepartmentDto:GetDepartmentDto):Promise<GetDepartmentResponse>;
    abstract createdepartment(departmentDto:DepartmentDto):Promise<CreateDepartmentResponse>;
}