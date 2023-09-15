import { DomainEvent } from "../../../../../common/event/domain.event";
import { Department } from "../entity/department";

export class DepartmentEvent extends DomainEvent<Department>{
    
    private department:Department;
    private createAt:string;

    constructor(department:Department,createAt:string){
        super();
        this.department = department;
        this.createAt = createAt;
    }

    public get getDepartment():Department{
        return this.department;
    }

    public get getCreateAt():string{
        return this.createAt;
    }

}