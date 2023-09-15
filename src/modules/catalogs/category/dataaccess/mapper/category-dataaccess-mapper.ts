import { CategoryDto } from "../../domain/application-service/dto/create/category-dto";
import { Category } from "../../domain/domain-core/entity/category";
import { CategoryId } from "../../domain/domain-core/valueobject/category-id";
import { CategoryEntity } from "../entity/category-entity";

export class CategoryDataAccessMapper{

    categoryToCategoryEntity(category:Category):CategoryEntity{
        let categoryEntity = new CategoryEntity();
        
        categoryEntity.idCategory = category.getId?.getValue;;
        categoryEntity.name = category.getName;
        categoryEntity.description = category.getDescription;
        categoryEntity.image = category.getImage;
        categoryEntity.status = category.getStatus;
        
        return categoryEntity;
    }

    categoryDtoToCategoryEntity(categoryDto:CategoryDto):CategoryEntity{
        
        let categoryEntity = new CategoryEntity();
        
        categoryEntity.idCategory = categoryDto?.getIdCategory;
        categoryEntity.name = categoryDto.getName;
        categoryEntity.description = categoryDto.getDescription;
        categoryEntity.image = categoryDto.getImage;
        categoryEntity.status = categoryDto.getStatus;
        
        return categoryEntity;
    }

    categoryEntityToCategoryDto(categoryEntinty:CategoryEntity ):CategoryDto{
        return CategoryDto.builder()
            .setIdCategory(categoryEntinty.idCategory)
            .setName(categoryEntinty.name)
            .setDescription(categoryEntinty.description)
            .setImage(categoryEntinty.image)
            .setStatus(categoryEntinty.status)
            .build();
    }


    categoriesEntitiesToCategoriesDto(categoriesEntities:CategoryEntity[]){
        let categoriesDto:CategoryDto[] = [];
        categoriesEntities?.forEach((categoryEntity)=>{
            // booksEntities.push(this.))
            categoriesDto.push(this.categoryEntityToCategoryDto(categoryEntity));
        });

        return categoriesDto;
    }

}