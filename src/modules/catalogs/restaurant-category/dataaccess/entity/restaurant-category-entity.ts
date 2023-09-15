import { Entity, PrimaryGeneratedColumn,Column, ManyToOne, JoinColumn } from "typeorm"
import { RestaurantEntity } from "../../../restaurant/dataaccess/entity/resturant-entity";

@Entity({name:'catalogs_restaurant_categories'})
export class RestaurantCategoryEntity {
    
    @PrimaryGeneratedColumn({name:'id_restaurant_category',type:'int'})
    idRestaurantCategory!: number;

    @ManyToOne( ()=> RestaurantEntity, (restaurantEntity: RestaurantEntity) => restaurantEntity.idRestaurant)
    @JoinColumn({name: 'id_restaurant', referencedColumnName: 'idRestaurant'})
    restaurant!: RestaurantEntity;

    @Column({name:'name',type:'varchar',length:50})
    name!: string;

    @Column({name:'status',type:'tinyint'})
    status!: number;
    
}
