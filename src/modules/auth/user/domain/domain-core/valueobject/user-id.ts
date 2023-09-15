import { BaseId } from "../../../../../common/valueobject/base-id";

export class UserId extends BaseId<number>{
    
    constructor(value:number){
        super(value);
    }
}