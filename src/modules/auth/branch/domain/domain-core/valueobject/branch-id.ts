import { BaseId } from "../../../../../common/valueobject/base-id";

export class BranchId extends BaseId<number>{
    
    constructor(value:number){
        super(value);
    }
}