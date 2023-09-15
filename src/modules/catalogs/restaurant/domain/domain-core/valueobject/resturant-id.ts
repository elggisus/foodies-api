import { BaseId } from "../../../../../common/valueobject/base-id";


export class RestaurantId extends BaseId<number>{
    
    constructor(value:number){
        super(value);
    }
}