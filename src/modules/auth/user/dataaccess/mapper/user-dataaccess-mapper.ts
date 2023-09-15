import { PersonDto } from "../../domain/application-service/dto/create/person.dto";
import { UserDto } from "../../domain/application-service/dto/create/user.dto";
import { Person } from "../../domain/domain-core/entity/person";
import { User } from "../../domain/domain-core/entity/user";
import { PersonId } from "../../domain/domain-core/valueobject/person-id";
import { UserId } from "../../domain/domain-core/valueobject/user-id";
import { PersonEntity } from "../entity/person.entity";
import { UserEntity } from "../entity/user.entity";

export class UserDataAccessMapper{

    userToUserEntity(user:User):UserEntity{

        let userEntity = new UserEntity();
        
        userEntity.idUser = user.getId?.getValue;
        userEntity.person = (user.getPerson) ? this.personToPersonEntity(user.getPerson) : undefined;
        userEntity.email = user.getEmail;
        userEntity.username = user.getUsername;
        userEntity.password = user.getPassword;
        userEntity.created = user.getCreated;
        userEntity.status = user.getStatus;
        userEntity.lastLogin = user.getLastLogin;
        userEntity.code = user.getCode;
        userEntity.type = user.getType;

        return userEntity;
    }

    userEntityToUser(userEntity:UserEntity):User{
        
        return User.builder()
            .setUserId(new UserId(userEntity.idUser))
            .setPerson((userEntity?.person) ? this.personEntityToPerson(userEntity.person) : undefined)
            .setEmail(userEntity.email)
            .setUsername(userEntity.username)
            .setPassword(userEntity.password) 
            .setCreated(userEntity.created)
            .setSatus(userEntity.status)
            .setlastLogin(userEntity.lastLogin)
            .setCode(userEntity.code)
            .setType(userEntity.type)
            .build();

    }

    userEntityToUserDto(userEntity:UserEntity):UserDto{
        
        return UserDto.builder()
            .setIdUser(userEntity.idUser)
            .setPerson((userEntity?.person) ? this.personEntityToPersonDto(userEntity.person) : undefined)
            .setEmail(userEntity.email)
            .setUsername(userEntity.username)
            // .setPassword(userEntity.password) 
            .setCreated(userEntity.created)
            .setStatus(userEntity.status)
            .setLastLogin(userEntity.lastLogin)
            // .setCode(userEntity.code)
            .build();

    }

    personToPersonEntity(person:Person){
        let personEntity = new PersonEntity();
        personEntity.idPerson =  person?.getId?.getValue;
        personEntity.name = person.getName;
        personEntity.middleName = person.getMiddleName;
        personEntity.lastName = person.getLastName;
        personEntity.secondLastName = person.getSecondLastName;
        return personEntity;
    }

    personEntityToPerson(personEntity: PersonEntity){
        return Person.builder()
            .setPersonId(new PersonId(personEntity.idPerson))
            .setName(personEntity.name)
            .setMiddleName(personEntity.middleName)
            .setLastName(personEntity.lastName)
            .setSecondLastName(personEntity.secondLastName)
            .build();
    }

    personEntityToPersonDto(personEntity: PersonEntity){
        return PersonDto.builder()
            .setIdPerson(personEntity.idPerson)
            .setName(personEntity.name)
            .setMiddleName(personEntity.middleName)
            .setLastName(personEntity.lastName)
            .setSecondLastName(personEntity.secondLastName)
            .build();
    }


    
}