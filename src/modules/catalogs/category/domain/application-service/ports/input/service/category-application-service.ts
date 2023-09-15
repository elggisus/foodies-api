import { CategoryDto } from "../../../dto/create/category-dto";
import { CreateCategoryResponse } from "../../../dto/message/create-category-response";


export abstract class CategoryApplicationService{
    abstract getCategories():Promise<any>;
    abstract createCategory(categoryDto:CategoryDto):Promise<CreateCategoryResponse>;
}