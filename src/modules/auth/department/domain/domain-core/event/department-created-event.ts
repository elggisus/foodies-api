import { Department } from "../entity/department";
import { DepartmentEvent } from "./deparmet-event";


export class DepartmentCreatedEvent extends DepartmentEvent{
    
    constructor(department:Department,createAt:string){
        super(department,createAt);    
    }
}