
import { Person } from "../../domain-core/entity/person";
import { User } from "../../domain-core/entity/user";
import { PersonId } from "../../domain-core/valueobject/person-id";
import { UserDto } from "../dto/create/user.dto";
import { CreateUserResponse } from "../dto/message/create-user.response";
import { ConfigurePasswordReponse } from "../dto/message/configure-user-response";
import { UserEntity } from "../../../dataaccess/entity/user.entity";
import { UserId } from "../../domain-core/valueobject/user-id";
import { PersonEntity } from "../../../dataaccess/entity/person.entity";
import { PersonDto } from "../dto/create/person.dto";
import { GetUserByPkResponse } from "../dto/message/get-users-by-pk-response";
import { UpdateUserResponse } from "../dto/message/update-user-response";
import { GetCurrentUserResponse } from "../dto/message/get-current-user-response";



export class UserDataMapper{

    userDtoToUser(userDto:UserDto):User{
        
        return User.builder()
        .setUserId(new UserId(userDto?.idUser))
        .setPerson((userDto.getPerson) ? this.personDtoToPerson(userDto.getPerson) : undefined)
        .setEmail(userDto.email)
        .setPassword(userDto.password)
        .setUsername(userDto.username)
        .setCreated(userDto.created)
        .setSatus(userDto.status)
        .setlastLogin(userDto.lastLogin)
        .setCode(userDto.code)
        .setType(userDto.type)
        .build();
    }

    personDtoToPerson(personDto:PersonDto){
        return Person.builder()
            .setPersonId(new PersonId(personDto?.getIdPerson))
            .setName(personDto.getName)
            .setMiddleName(personDto.getMiddleName)
            .setLastName(personDto.getLastName)
            .setSecondLastName(personDto.getSecondLastName)
            .build()
    }



    userEntityToUser(userEntity: UserEntity):User{
        return User.builder()
            .setUserId(new UserId(userEntity.idUser))
            .setPerson((userEntity.person) ? this.personEntityToPerson(userEntity.person!) : undefined)
            .setEmail(userEntity.email)
            .setUsername(userEntity.email)
            .setPassword(userEntity.password)
            .setSatus(userEntity.status)
            .setCreated(userEntity.created)
            .setlastLogin(userEntity.lastLogin)
            .setCode(userEntity.code)
            .setType(userEntity.type)
            .build();

    }

    personEntityToPerson(personEntity:PersonEntity):Person{
        return Person.builder()
            .setPersonId(new PersonId(personEntity.idPerson))
            .setName(personEntity.name)
            .setMiddleName(personEntity.middleName)
            .setLastName(personEntity.lastName)
            .setSecondLastName(personEntity.secondLastName)
            .build();
    }
    
    userToUserDto(user:User){
        return UserDto.builder()
            .setIdUser(user.getId.getValue)
            .setPerson((user?.getPerson) ? this.personToPersonDto(user.getPerson) : undefined)
            .setEmail(user.getEmail)
            .setUsername(user.getUsername)
            // .setPassword(userEntity.password) 
            .setCreated(user.getCreated)
            .setStatus(user.getStatus)
            .setLastLogin(user.getLastLogin)
            // .setCode(userEntity.code)
            .setType(user.getType)
            .build();
    }

    personToPersonDto(person:Person){
        return PersonDto.builder()
        .setIdPerson(person.getId.getValue)
        .setName(person.getName)
        .setMiddleName(person.getMiddleName)
        .setLastName(person.getLastName)
        .setSecondLastName(person.getSecondLastName)
        .build();
    }

    userToCreateUserResponse(user:User,message:string,token:string):CreateUserResponse{
        
        return CreateUserResponse.builder().setIdUser(user.getId.getValue)
                .setMessage(message)
                .setToken(token)
                .build();
                
    }

    userToUpdateUserReponse(user:User,message:string):UpdateUserResponse{
        
        return UpdateUserResponse.builder().setIdUser(user.getId.getValue)
                .setMessage(message).build();
    }

    userToConfigurePasswordResponse(user:User,message:string):ConfigurePasswordReponse{
        return ConfigurePasswordReponse.builder().setIdUser(user.getId.getValue)
                .setMessage(message).build();
    }

    userToGetUserByPkResponse(user:User,message:string):GetUserByPkResponse{
        return GetUserByPkResponse.builder().setUser(this.userToUserDto(user)).build();
    }

    userToGetCurrentUserResponse(user:User,message:string):GetCurrentUserResponse{
        return GetCurrentUserResponse.builder().setUser(this.userToUserDto(user)).build();
    }



}