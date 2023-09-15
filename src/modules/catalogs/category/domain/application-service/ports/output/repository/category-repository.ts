import { Category } from "../../../../domain-core/entity/category";
import { CategoryDto } from "../../../dto/create/category-dto";

export abstract class CategoryRepository{
    abstract get():Promise<CategoryDto[]>;
    abstract save(category:Category):Promise<CategoryDto>;
}