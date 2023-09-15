import moment from "moment-timezone";
import { inject, injectable } from "inversify";
import bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';

import { UserApplicationService } from "./ports/input/service/user-application-service";
import { CreateUserResponse } from "./dto/message/create-user.response";
import { UserDomainSevice } from "../domain-core/user-domain-service";
import { UserDataMapper } from "./mapper/user-data.mapper";
import { UserCreatedEvent } from "../domain-core/event/user-created.event";
import { UserRepository } from "./ports/output/repository/user.repository";
import { UserDomainSeviceImpl } from "../domain-core/user-domain-service-impl";
import { ConfigurePasswordReponse } from "./dto/message/configure-user-response";
import { MessagingRepository } from "./ports/output/repository/messaging.repository";
import { User } from "../domain-core/entity/user";
import UserDomainException from "../domain-core/exception/user-domain.exception";
import { SigninResponse } from "./dto/message/signin-response";
import Token from "../../../../../classes/token";
import { SigninDto } from "./dto/signin/signin-dto";
import { UserDto } from "./dto/create/user.dto";
import { ConfigureUserPasswordDto } from "./dto/configure-password/configure-user-password.dto";
import { GetUsersDto } from "./dto/get/get-user.dto";
import { GetUsersResponse } from "./dto/message/get-users-response";
import { GetUserByPkResponse } from "./dto/message/get-users-by-pk-response";
import { UpdateUserResponse } from "./dto/message/update-user-response";

@injectable()
export class UserApplicationServiceImpl implements UserApplicationService {

    private _userDomainService: UserDomainSevice;
    private _userDataMapper: UserDataMapper;
    
    constructor(@inject("UserRepository") readonly _userRepository:UserRepository, 
                @inject("MessagingRepository") readonly _messagingRepository:MessagingRepository ) {
        
        this._userDomainService = new UserDomainSeviceImpl();
        this._userDataMapper = new UserDataMapper();

    }
    
    async getCurrentUser(idUser: number): Promise<GetUserByPkResponse> {
        const user = await this._userRepository.findUserByPk(idUser);
        if(!user){
            throw new UserDomainException("Usuario no encontrado");
        }

        return this._userDataMapper.userToGetUserByPkResponse(user,"");
    }

    async getUserByPk(idUser: number): Promise<GetUserByPkResponse> {
        
        const user = await this._userRepository.findUserByPk(idUser);
        
        if(!user){
            throw new UserDomainException("Usuario no encontrado");
        }

        return this._userDataMapper.userToGetUserByPkResponse(user,"Usuario encontrado con exito");
            
    }
    
    async getUsers(getUsersDto: GetUsersDto): Promise<GetUsersResponse> {
        const users = await this._userRepository.get(getUsersDto.toPrimitive());  

        return GetUsersResponse.builder().setData(users).build();
    }
    

    async signin(signinDto: SigninDto): Promise<SigninResponse> {
        console.log(signinDto);
        
        const user = await this._userRepository.findUserByEmail(signinDto.email);  

        if(!user){
            throw new UserDomainException("Usuario y/o contraseña incorrectos");
        }
        
        user.signin(moment().tz(String(process.env.TZ)).format('yyyy-MM-DD hh:mm:ss'));

        if(!bcrypt.compareSync(signinDto.password,user.getPassword)){
            throw new UserDomainException("Usuario y/o contraseña incorrectos");

        }
        
        const userUpdated = await this._userRepository.save(user);
        
        const token = Token.getJwtToken({
          idUser: userUpdated.getId.getValue,
          email: userUpdated.getEmail  
        });        

        return SigninResponse.builder()
            .setToken(token).build();
    }

    async createUser(userDto: UserDto): Promise<CreateUserResponse> {

        const user:User = this._userDataMapper.userDtoToUser(userDto);
   
        const userValidated = await this._userRepository.findUserByEmail(user.getEmail);
        
        if(userValidated){

            throw new UserDomainException("El correo ya esta registrado");
        }

        user.configurePassword( bcrypt.hashSync(userDto.password, 10));
              
        const usercreatedEvent: UserCreatedEvent = this._userDomainService.initializeAndValidateUser(user,uuidv4());
        
        const userCreated = await this._userRepository.save(usercreatedEvent.getUser);

        const token = Token.getJwtToken({
            idUser: userCreated.getId.getValue,
            email: userCreated.getEmail  
          });    

        this._messagingRepository.sendConfirmMessage(userCreated);
        
        return this._userDataMapper.userToCreateUserResponse(userCreated, "Usuario creado con exito!",token);
        
    }

    async updateUser(userDto: UserDto): Promise<UpdateUserResponse> {

        const user:User = this._userDataMapper.userDtoToUser(userDto);    
        const userValidated = await this._userRepository.findUserByEmail(user.getEmail);
        
        if(userValidated && user.getId.getValue != userValidated?.getId.getValue){

            throw new UserDomainException("El correo ya esta registrado");
        }    
        
        const userUpdated = await this._userRepository.save(user);

        return this._userDataMapper.userToUpdateUserReponse(userUpdated,'Usuario actualizado correctamente');
    }
    
    
    async configurePassword(configurePasswordDto: ConfigureUserPasswordDto): Promise<ConfigurePasswordReponse> {
        
        const data = Buffer.from(configurePasswordDto.code,'base64').toString('ascii').split(',');
        const idUser:number = parseInt(data[0]);
        const code:string = data[1];

        const user = await this._userRepository.findUserByPk(idUser);
        
        if(!user){
            throw new UserDomainException("Usuario no encontrado");
        }

        if(user.getCode != code){
            throw new UserDomainException("Codigo no valido");
        }
        
        user.configurePassword( bcrypt.hashSync(configurePasswordDto.password, 10));
        
        const userUpdated = await this._userRepository.save(user);
        
        return this._userDataMapper.userToConfigurePasswordResponse(userUpdated,"Password configured successfully!");
    }


  

    


}