import { Department } from "../../domain-core/entity/department";
import { DepartmentId } from "../../domain-core/valueobject/department-id";
import { DepartmentDto } from "../dto/create/deparment-dto";
import { CreateDepartmentResponse } from "../dto/message/create-department-response";

export class DepartmentDataMapper{
    departmentDtoTodepartment(departmentDto:DepartmentDto):Department{
        return Department.builder()
            .setdepartmentId(new DepartmentId(departmentDto.idDepartment))
            .setName(departmentDto.name)
            .setSatus(departmentDto.status).build();
    }

    departmentToCreateDepartmentResponse(department:Department,message:string):CreateDepartmentResponse{
       return CreateDepartmentResponse.builder()
            .setIdDepartment(department.getId.getValue)
            .setMessage(message).build();
    }
}