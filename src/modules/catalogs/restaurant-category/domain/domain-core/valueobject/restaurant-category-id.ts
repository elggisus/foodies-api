import { BaseId } from "../../../../../common/valueobject/base-id";


export class RestaurantCategoryId extends BaseId<number>{
    
    constructor(value:number){
        super(value);
    }
}