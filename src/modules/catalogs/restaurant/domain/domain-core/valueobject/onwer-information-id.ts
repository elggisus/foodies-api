import { BaseId } from "../../../../../common/valueobject/base-id";


export class OwnerInformationId extends BaseId<number>{
    
    constructor(value:number){
        super(value);
    }
}