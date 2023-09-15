import { DataSource } from "typeorm";

import { UserEntity } from "../modules/auth/user/dataaccess/entity/user.entity";
import { PersonEntity } from "../modules/auth/user/dataaccess/entity/person.entity";
import { DepartmentEntity } from "../modules/auth/department/dataaccess/entity/department-entity";
import { CategoryEntity } from "../modules/catalogs/category/dataaccess/entity/category-entity";
import { RestaurantEntity } from "../modules/catalogs/restaurant/dataaccess/entity/resturant-entity";
import { OwnerInformationEntity } from "../modules/catalogs/restaurant/dataaccess/entity/owner-information-entity";
import { RestaurantCategoryEntity } from "../modules/catalogs/restaurant-category/dataaccess/entity/restaurant-category-entity";


export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "foodies",
    synchronize: false,
    logging: true,
    entities: [UserEntity, PersonEntity, DepartmentEntity, CategoryEntity, RestaurantEntity,OwnerInformationEntity,RestaurantCategoryEntity],
    subscribers: [],
    migrations: [],
})