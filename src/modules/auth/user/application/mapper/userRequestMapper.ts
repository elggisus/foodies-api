import moment from "moment-timezone";
import { UserDto } from "../../domain/application-service/dto/create/user.dto";
import { PersonDto } from "../../domain/application-service/dto/create/person.dto";




export class UserRequestMapper {

    requestToUserDto(request: any) {
        return UserDto.builder()
            .setIdUser(request.idUser)
            .setPerson((request.person) ? this.requestToPersonDto(request.person) : undefined)
            .setEmail(request.email)
            .setUsername(request.username)
            .setPassword(request.password)
            .setLastLogin(request.lastLogin)
            .setStatus(request.status)
            .setCreated((request.created) ? request.created : moment().tz(String(process.env.TZ)).format('yyyy-MM-DD hh:mm:ss'))
            .setType(request.type)
            .build();
    }

    requestToPersonDto(person:any){
        return PersonDto.builder()
        .setIdPerson(person.idPerson)
        .setName(person.name)
        .setMiddleName(person.middleName)
        .setLastName(person.lastName)
        .setSecondLastName(person.secondLastName)
        .build();
    }



}