import { Entity, PrimaryGeneratedColumn,Column } from "typeorm"

@Entity({name:'catalogs_categories'})
export class CategoryEntity {
    
    @PrimaryGeneratedColumn({name:'id_category',type:'int'})
    idCategory!: number;

    @Column({name:'name',type:'varchar',length:50})
    name!: string;

    @Column({name:'description',type:'varchar',length:50})
    description!: string;

    @Column({name:'image',type:'varchar',length:200})
    image!: string;

    @Column({name:'status',type:'tinyint'})
    status!: number;
    
}
