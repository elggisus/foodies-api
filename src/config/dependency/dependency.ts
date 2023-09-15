import { Container } from "inversify";

import { UserRepositoryImpl } from "../../modules/auth/user/dataaccess/adapter/user-repository-impl";
import { UserRepository } from "../../modules/auth/user/domain/application-service/ports/output/repository/user.repository";
import { UserApplicationService } from "../../modules/auth/user/domain/application-service/ports/input/service/user-application-service";
import { UserApplicationServiceImpl } from "../../modules/auth/user/domain/application-service/user-application-service-impl";
import { MessagingRepositoryImpl } from "../../modules/auth/user/dataaccess/adapter/messaging-repository-impl";
import { MessagingRepository } from "../../modules/auth/user/domain/application-service/ports/output/repository/messaging.repository";
import { CategoryRepository } from "../../modules/catalogs/category/domain/application-service/ports/output/repository/category-repository";
import { CategoryRepositoryImpl } from "../../modules/catalogs/category/dataaccess/adapter/category-repository-impl";
import { CategoryApplicationService } from "../../modules/catalogs/category/domain/application-service/ports/input/service/category-application-service";
import { CategoryApplicationServiceImpl } from "../../modules/catalogs/category/domain/application-service/category-application-service-impl";
import { RestaurantRepository } from "../../modules/catalogs/restaurant/domain/application-service/ports/output/repository/resturant-repository";
import { ResturanteRepositoryImpl } from "../../modules/catalogs/restaurant/dataaccess/adapter/resturant-repository-impl";
import { RestaurantApplicationServiceImpl } from "../../modules/catalogs/restaurant/domain/application-service/restaurant-application-service-impl";
import { RestaurantApplicationService } from "../../modules/catalogs/restaurant/domain/application-service/ports/input/service/restaurant-application-service";
import { RestaurantCategoryRepository } from "../../modules/catalogs/restaurant-category/domain/application-service/ports/output/repository/restaurant-category-repository";
import { RestaurantCategoryRepositoryImpl } from "../../modules/catalogs/restaurant-category/dataaccess/adapter/resturant-category-repository-impl";
import { RestaurantCategoryApplicationService } from "../../modules/catalogs/restaurant-category/domain/application-service/ports/input/service/restaurant-category-application-service";
import { RestaurantCategoryApplicationServiceImpl } from "../../modules/catalogs/restaurant-category/domain/application-service/restaurant-category-application-service-impl";

const container = new Container();

container.bind<UserRepository>('UserRepository').to(UserRepositoryImpl);
container.bind<UserApplicationService>('UserApplicationService').to(UserApplicationServiceImpl);

container.bind<MessagingRepository>('MessagingRepository').to(MessagingRepositoryImpl);

container.bind<CategoryRepository>('CategoryRepository').to(CategoryRepositoryImpl);
container.bind<CategoryApplicationService>('CategoryApplicationService').to(CategoryApplicationServiceImpl);

container.bind<RestaurantRepository>('RestaurantRepository').to(ResturanteRepositoryImpl);
container.bind<RestaurantApplicationService>('RestaurantApplicationService').to(RestaurantApplicationServiceImpl);

container.bind<RestaurantCategoryRepository>('RestaurantCategoryRepository').to(RestaurantCategoryRepositoryImpl);
container.bind<RestaurantCategoryApplicationService>('RestaurantCategoryApplicationService').to(RestaurantCategoryApplicationServiceImpl);


export default container;