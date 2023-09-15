import { Entity, Column, PrimaryGeneratedColumn,ManyToOne,JoinColumn } from "typeorm"

@Entity({name:'core_persons'})
export class PersonEntity {
    @PrimaryGeneratedColumn({name:'id_person',type:"integer"})
    idPerson!: number;

    @Column({name:'name',type:"varchar",length:50})
    name!: string;

    @Column({name:'middle_name',type:"varchar",length:50})
    middleName!: string;

    @Column({name:'last_name',type:"varchar",length:50})
    lastName!: string;

    @Column({name:'second_last_name',type:"varchar",length:50})
    secondLastName!: string;
}