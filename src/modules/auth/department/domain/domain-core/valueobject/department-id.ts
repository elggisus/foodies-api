import { BaseId } from "../../../../../common/valueobject/base-id";

export class DepartmentId extends BaseId<number>{
    
    constructor(value:number){
        super(value);
    }
}