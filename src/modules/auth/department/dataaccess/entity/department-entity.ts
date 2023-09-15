import { Entity, PrimaryGeneratedColumn,Column, JoinColumn, OneToOne } from "typeorm"

@Entity({name:'core_departments'})
export class DepartmentEntity {
    
    @PrimaryGeneratedColumn({name:'id_department',type:'int'})
    idDepartment!: number;

    @Column({name:'name',type:'varchar',length:50})
    name!: string;

    @Column({name:'status',type:'tinyint'})
    status!: number;
    
}
