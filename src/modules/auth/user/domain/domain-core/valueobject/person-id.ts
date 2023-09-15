import { BaseId } from "../../../../../common/valueobject/base-id";

export class PersonId extends BaseId<number>{
    
    constructor(value:number){
        super(value);
    }
}