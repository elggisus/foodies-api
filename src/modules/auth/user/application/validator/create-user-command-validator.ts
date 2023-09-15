import { UserDto } from "../../domain/application-service/dto/create/user.dto";

export class CreateUserCommandValidator{

    private _userDto:UserDto

    private errors:string[] = [];


    constructor(userDto:UserDto){
        this._userDto = userDto;
    }

    validate(){
        this.validateUsername();
    }

    private validateUsername(){

        // if(!this._userDto.username){
        //     this.errors.push("El nombre de usuario es requerido");
        // }

        if(this._userDto.username && this._userDto.username?.length < 6){
            this.errors.push("El nombre de usuario debe tener al menos 6 caracteres");
        }

        if(this._userDto.username && this._userDto.username?.length > 20){
            this.errors.push("El nombre de usuario no puede tener mas de 20 caracteres");
        }
    }

    hasErrors(){
        return (this.errors.length > 0) ? true : false;
    }

    getErrors(){
        return this.errors;
    }





}