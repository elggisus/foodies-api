import { inject, injectable } from "inversify";
import { CategoryDto } from "./dto/create/category-dto";
import { CreateCategoryResponse } from "./dto/message/create-category-response";
import { CategoryApplicationService } from "./ports/input/service/category-application-service";
import { CategoryRepository } from "./ports/output/repository/category-repository";
import { CategoryDataMapper } from "./mapper/category-data-mapper";
import { Category } from "../domain-core/entity/category";

@injectable()
export class CategoryApplicationServiceImpl implements CategoryApplicationService{

    private _categoryDataMaper:CategoryDataMapper;

    constructor(@inject('CategoryRepository') private _categoryRepository:CategoryRepository){
        this._categoryDataMaper =  new CategoryDataMapper();
    }
    async getCategories(): Promise<any> {
        const categories = await this._categoryRepository.get();
        return categories;
    }

    async createCategory(categoryDto: CategoryDto): Promise<CreateCategoryResponse> {
        const category:Category = this._categoryDataMaper.categoryDtoToCategory(categoryDto);
        const categoryCreated = await this._categoryRepository.save(category);
        return CreateCategoryResponse.builder()
            .setIdCategory(categoryCreated.getIdCategory)
            .setMessage("Category created successfully!").build();
    }

}