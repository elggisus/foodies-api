import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity({name:'catalogs_owner_information'})
export class OwnerInformationEntity {

    @PrimaryGeneratedColumn({name:'id_owner_information',type:"integer"})
    idOwnerInformation!: number;

    @Column({name:'name',type:"varchar",length:50})
    name!: string;

    @Column({name:'middle_name',type:"varchar",length:50})
    middleName!: string;

    @Column({name:'last_name',type:"varchar",length:50})
    lastName!: string;

    @Column({name:'second_last_name',type:"varchar",length:50})
    secondLastName!: string;

    @Column({name:'phone',type:"varchar",length:12})
    phone!: string;

    @Column({name:'email',type:"varchar",length:100})
    email!: string;
}