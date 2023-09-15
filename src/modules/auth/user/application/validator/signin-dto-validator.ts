import { SigninDto } from "../../domain/application-service/dto/signin/signin-dto";

export class SigninDtoValidator{

    private _signinDto:SigninDto

    private errors:string[] = [];


    constructor(_signinDto:SigninDto){
        this._signinDto = _signinDto;
    }

    validate(){
        this.validateEmail();
        this.validatePassword();
    }

    private validateEmail(){

        if(!this._signinDto.email){
            this.errors.push("El correo es requerido");
        }
    }

    private validatePassword(){

        if(!this._signinDto.password){
            this.errors.push("El password es requerido");
        }
    }

    hasErrors(){
        return (this.errors.length > 0) ? true : false;
    }

    getErrors(){
        return this.errors;
    }





}