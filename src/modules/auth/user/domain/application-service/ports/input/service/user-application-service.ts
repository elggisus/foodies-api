import { ConfigureUserPasswordDto } from "../../../dto/configure-password/configure-user-password.dto";
import { UserDto } from "../../../dto/create/user.dto";
import { GetUsersDto } from "../../../dto/get/get-user.dto";
import { ConfigurePasswordReponse } from "../../../dto/message/configure-user-response";
import { CreateUserResponse } from "../../../dto/message/create-user.response";
import { GetUserByPkResponse } from "../../../dto/message/get-users-by-pk-response";
import { GetUsersResponse } from "../../../dto/message/get-users-response";
import { SigninResponse } from "../../../dto/message/signin-response";
import { UpdateUserResponse } from "../../../dto/message/update-user-response";
import { SigninDto } from "../../../dto/signin/signin-dto";

export abstract class UserApplicationService{
    abstract getCurrentUser(idUser:number):Promise<GetUserByPkResponse>;
    abstract getUserByPk(idUser:number):Promise<GetUserByPkResponse>;
    abstract getUsers(getUsersDto:GetUsersDto):Promise<GetUsersResponse>;
    abstract createUser(userDto:UserDto):Promise<CreateUserResponse>;
    abstract updateUser(userDto:UserDto):Promise<UpdateUserResponse>;
    abstract signin(signinDto:SigninDto):Promise<SigninResponse>;
    abstract configurePassword(configurePasswordDto:ConfigureUserPasswordDto):Promise<ConfigurePasswordReponse>;
}