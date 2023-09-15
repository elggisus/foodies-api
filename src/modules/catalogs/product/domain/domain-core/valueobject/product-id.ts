import { BaseId } from "../../../../../common/valueobject/base-id";


export class ProductId extends BaseId<number>{
    
    constructor(value:number){
        super(value);
    }
}