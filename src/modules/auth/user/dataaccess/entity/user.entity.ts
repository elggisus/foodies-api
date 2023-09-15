import { Entity, PrimaryGeneratedColumn,Column, JoinColumn, OneToOne } from "typeorm"
import { PersonEntity } from "./person.entity";
import { DateTimeTranformer } from "../../../../../utils/transforms/datetime-transform";

@Entity({name:'core_users'})
export class UserEntity {
    
    @PrimaryGeneratedColumn({name:'id_user',type:'int'})
    idUser!: number;

    @OneToOne(() => PersonEntity,{cascade:['insert','update'], nullable :false})
    @JoinColumn({name:'id_person'})
    person!: PersonEntity | undefined;

    @Column({name:'email',type:'varchar',length:50})
    email!: string;

    @Column({name:'username',type:'varchar',length:20})
    username!: string;

    @Column({name:'password',type:'varchar',length:100})
    password!: string;

    @Column({name:'status',type:'tinyint'})
    status!: number;

    @Column({name:'created',type:'date'})
    created!: string;

    @Column({name:'last_login',type:'datetime',transformer: new DateTimeTranformer()})
    lastLogin!: string;

    @Column({name:'code',type:'varchar',length:50})
    code!: string;

    @Column({name:'type',type:'tinyint'})
    type!: number;
    
}
