import { BaseId } from "../../../../../common/valueobject/base-id";


export class CategoryId extends BaseId<number>{
    
    constructor(value:number){
        super(value);
    }
}