import { inject, injectable } from "inversify";
import { AppDataSource } from "../../../../../config/typeorm";
import { CategoryDto } from "../../domain/application-service/dto/create/category-dto";
import { CategoryRepository } from "../../domain/application-service/ports/output/repository/category-repository";
import { Category } from "../../domain/domain-core/entity/category";
import { CategoryEntity } from "../entity/category-entity";
import CategoryDataAccessException from "../exception/category-dataaccess-exception";
import { CategoryDataAccessMapper } from "../mapper/category-dataaccess-mapper";

@injectable()
export class CategoryRepositoryImpl implements CategoryRepository {
    
    private categoryDataAccessMapper: CategoryDataAccessMapper;
    
    constructor() {
        this.categoryDataAccessMapper = new CategoryDataAccessMapper();
    }
    
    async get(): Promise<CategoryDto[]> {
        
        const categoryRepository = AppDataSource.getRepository(CategoryEntity);
        
        const categoriesEntities = await categoryRepository.find();
        
        const categories  = this.categoryDataAccessMapper.categoriesEntitiesToCategoriesDto(categoriesEntities);
        
        return categories;
    }

    async save(category: Category): Promise<CategoryDto> {
        try {
            
            const categoryRepository = AppDataSource.getRepository(CategoryEntity);
            const categoryEntity: CategoryEntity = this.categoryDataAccessMapper.categoryToCategoryEntity(category);
            const categorySaved = await categoryRepository.save(categoryEntity);
            
            return this.categoryDataAccessMapper.categoryEntityToCategoryDto(categorySaved);
            
        } catch (err) {
            //TODO: save in log
            throw new CategoryDataAccessException("Ocurrio un error al crear la categoria");
        }
    }

}