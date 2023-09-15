import { Category } from "../../domain-core/entity/category";
import { CategoryId } from "../../domain-core/valueobject/category-id";
import { CategoryDto } from "../dto/create/category-dto";

export class CategoryDataMapper{

    categoryDtoToCategory(categoryDto:CategoryDto):Category{
        return Category.builder()
            .setCategoryId(new CategoryId(categoryDto.getIdCategory))
            .setName(categoryDto.getName)
            .setDescription(categoryDto.getDescription)
            .setImage(categoryDto.getImage)
            .setSatus(categoryDto.getStatus)
            .build();
    }

}