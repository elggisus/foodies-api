import moment from "moment-timezone";
import { CategoryDto } from "../../domain/application-service/dto/create/category-dto";





export class CategoryRequestMapper {

    requestToCategoryDto(request: any) {
        return CategoryDto.builder()
            .setIdCategory(request.idCategory)
            .setName(request.name)
            .setDescription(request.description)
            .setImage(request.image)
            .build();
    }




}