import { DepartmentDto } from "../../domain/application-service/dto/create/deparment-dto";
import { Department } from "../../domain/domain-core/entity/department";
import { DepartmentId } from "../../domain/domain-core/valueobject/department-id";
import { DepartmentEntity } from "../entity/department-entity";

export class DepartmentDataAccessMapper{

    departmentEntityTodepartment(departmentEntity:DepartmentEntity):Department{
        return Department.builder()
            .setdepartmentId(new DepartmentId(departmentEntity.idDepartment))
            .setName(departmentEntity.name)
            .setSatus(departmentEntity.status).build();
    }


    departmentTodepartmentEntity(department:Department):DepartmentEntity{
       
        let departmentEntity = new DepartmentEntity();
       
        departmentEntity.idDepartment = department.getId?.getValue;
        departmentEntity.name =  department.getName;
        departmentEntity.status =  department.getStatus;
      
        return departmentEntity;
    }

    departmentEntityTodepartmentDto(departmentEntity:DepartmentEntity):DepartmentDto{
        return DepartmentDto.builder()
            .setIdDepartment(departmentEntity.idDepartment)
            .setName(departmentEntity.name)
            .setStatus(departmentEntity.status).build();
    }
}