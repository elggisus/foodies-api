import { Entity, PrimaryGeneratedColumn,Column, OneToOne, ManyToOne, JoinColumn } from "typeorm"
import { CategoryEntity } from "../../../category/dataaccess/entity/category-entity";
import { OwnerInformationEntity } from "./owner-information-entity";

@Entity({name:'catalogs_restaurants'})
export class RestaurantEntity {
    
    @PrimaryGeneratedColumn({name:'id_restaurant',type:'int'})
    idRestaurant!: number;

    @ManyToOne( ()=> CategoryEntity, (categoryEntity:CategoryEntity) => categoryEntity.idCategory, {cascade:false})
    @JoinColumn({name: 'id_category', referencedColumnName: 'idCategory'})
    category!: CategoryEntity;

    @OneToOne( ()=> OwnerInformationEntity, (ownerInformation: OwnerInformationEntity) => ownerInformation.idOwnerInformation,{cascade:['insert','update']})
    @JoinColumn({name: 'id_owner_information', referencedColumnName: 'idOwnerInformation'})
    ownerInformation!: OwnerInformationEntity;

    @Column({name:'name',type:'varchar',length:50})
    name!: string;

    @Column({name:'description',type:'varchar',length:50})
    description!: string;

    @Column({name:'phone',type:'varchar',length:12})
    phone!: string;

    @Column({name:'address',type:'varchar',length:50})
    address!: string;

    @Column({name:'latitude',type:'varchar',length:50})
    latitude!: string;

    @Column({name:'longitude',type:'varchar',length:50})
    longitude!: string;

    @Column({name:'image',type:'varchar',length:200})
    image!: string;

    @Column({name:'banner',type:'varchar',length:200})
    banner!: string;

    @Column({name:'status',type:'tinyint'})
    status!: number;
    
}
