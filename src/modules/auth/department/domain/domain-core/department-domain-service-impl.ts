import { DepartmentDomainService } from "./department-domain-service";
import { Department } from "./entity/department";
import { DepartmentCreatedEvent } from "./event/department-created-event";

export class departmentDomainServiceImpl implements DepartmentDomainService{
    
    initializeAndValidatedepartment(department: Department): DepartmentCreatedEvent {
        department.initializeAndValidate();
        return new DepartmentCreatedEvent(department,new Date().toUTCString());
    }
    
    
}