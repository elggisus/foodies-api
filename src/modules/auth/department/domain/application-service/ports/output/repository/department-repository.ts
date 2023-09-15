import { Department } from "../../../../domain-core/entity/department";
import { DepartmentDto } from "../../../dto/create/deparment-dto";

export abstract class DepartmentRepository{
    
    abstract get(params:any):Promise<DepartmentDto[]>;
    abstract save(department:any):Promise<Department>;
    abstract findByPk(iddepartment:number):Promise<Department | null>;
    abstract findByName(name:string):Promise<Department | null>;

}