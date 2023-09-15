import { injectable } from "inversify";
import { AppDataSource } from "../../../../../config/typeorm";
import { UserRepository } from "../../domain/application-service/ports/output/repository/user.repository";
import { User } from "../../domain/domain-core/entity/user";
import { UserEntity } from "../entity/user.entity";
import { UserDataAccessMapper } from "../mapper/user-dataaccess-mapper";
import { UserDto } from "../../domain/application-service/dto/create/user.dto";
import { Like } from "typeorm";

@injectable()
export class UserRepositoryImpl implements UserRepository{

    private _userDataAccessMapper:UserDataAccessMapper;
    
    constructor(){
        this._userDataAccessMapper = new UserDataAccessMapper();
    }
    
    async get(params: any): Promise<UserDto[]> {

        let filters:any = {};

        const userRepository = AppDataSource.getRepository(UserEntity);

        const usersQuery = userRepository.createQueryBuilder('user')
            .innerJoinAndSelect('user.person', 'person');
        
        //TODO: REFACTOR THIS
        console.log(params);
        
        if(params?.name != undefined){
            usersQuery.andWhere(`(
                CONCAT(person.name, ' ', person.middleName, ' ', person.lastName, ' ', person.secondLastName) LIKE '%${params.name}%' OR 
                CONCAT(person.name, ' ', person.lastName, ' ', person.secondLastName) LIKE '%${params.name}%'
            )`);

        }

        if(params?.username != undefined){
            usersQuery.andWhere(`user.username LIKE '%${params.username}%'`);
        }

        if(params?.email != undefined){
            usersQuery.andWhere(`user.email LIKE '%${params.email}%'`);
        }

        if(params?.status != undefined){
            usersQuery.andWhere('user.status = :status', {status: params.status})
        }

        

        const usersEntities = await usersQuery.getMany();  
        
        let users:UserDto[] = [];
        
        usersEntities.forEach(userEntity => {
            users.push(this._userDataAccessMapper.userEntityToUserDto(userEntity));
        });

        return users;


    }

    async findUserByPk(idUser: number): Promise<User | null> {
        const userRepository = AppDataSource.getRepository(UserEntity);
        const userEntity = await userRepository.findOne({where: {idUser: idUser},relations:{person:true}});  
        
        if(userEntity){
            return this._userDataAccessMapper.userEntityToUser(userEntity);
        }      

        return null;
    }
    
    async save(user: User): Promise<User> {        
        const userRepository = AppDataSource.getRepository(UserEntity);        
        const userEntity = await userRepository.save(this._userDataAccessMapper.userToUserEntity(user));        
        return this._userDataAccessMapper.userEntityToUser(userEntity);
    }

    async findUserByEmail(email: string): Promise<User | null> {
        console.log(email);
        
        const userRepository = AppDataSource.getRepository(UserEntity);
        const userEntity = await userRepository.findOne({where:{email:email}});  
        console.log("UserEntity",userEntity);
        
        if(userEntity){
            return this._userDataAccessMapper.userEntityToUser(userEntity);
        }      

        return null;
    }

}