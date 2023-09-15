import { Department } from "./entity/department";
import { DepartmentCreatedEvent } from "./event/department-created-event";

export abstract class DepartmentDomainService{
    abstract initializeAndValidatedepartment(department:Department):DepartmentCreatedEvent;
}