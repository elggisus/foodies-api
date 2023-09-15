import { BaseEntity } from "../../../../../common/entity/base-entity";
import { DepartmentId } from "../valueobject/department-id";
import { DepartmentStatus } from "../valueobject/department-status";

export class Department extends BaseEntity<DepartmentId>{
    
    private readonly name:string;
    private status:DepartmentStatus;


    constructor(builder:Builder){
        super();
        super.setId = builder.departmentId;
        this.name = builder.name;
        this.status = builder.status;
        
    }
    
    static builder():Builder{
        return new Builder();
    }

    public get getName():string{
        return this.name;
    }

    public get getStatus():DepartmentStatus{
        return this.status;
    }

    initializeAndValidate(){
        this.status = DepartmentStatus.ENABLED;
    }

   
}

class Builder{

    departmentId!:DepartmentId;
    name!:string;
    status!:DepartmentStatus;
   

    public build():Department {
        return new Department(this);
    }

    public setdepartmentId(val:DepartmentId):Builder {
        this.departmentId = val;
        return this;
    }
    
    public setName(val:string):Builder {
        this.name = val;
        return this;
    }

    
    public setSatus(val:DepartmentStatus):Builder {
        this.status = val;
        return this;
    }

}
