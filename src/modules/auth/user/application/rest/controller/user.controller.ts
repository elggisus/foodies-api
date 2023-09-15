import { controller, httpGet, request, response, httpPost, httpPut, requestParam } from "inversify-express-utils";
import { Request, Response } from "express";
import { inject } from "inversify";
import { StatusCodes } from 'http-status-codes';

import { CreateUserResponse } from "../../../domain/application-service/dto/message/create-user.response";
import { UserApplicationService } from "../../../domain/application-service/ports/input/service/user-application-service";
import { BaseHttpController } from "inversify-express-utils";
import UserDomainException from "../../../domain/domain-core/exception/user-domain.exception";
import { ErrorDto } from "../../../../../common/dto/error-dto";
import { UserRequestMapper } from "../../mapper/userRequestMapper";
import { CreateUserCommandValidator } from "../../validator/create-user-command-validator";
import UserApplicationException from "../../exeption/user-application-exception";
import { ConfigureUserPasswordDto } from "../../../domain/application-service/dto/configure-password/configure-user-password.dto";
import { ConfigurePasswordReponse } from "../../../domain/application-service/dto/message/configure-user-response";
import { SigninDto } from "../../../domain/application-service/dto/signin/signin-dto";
import { SigninResponse } from "../../../domain/application-service/dto/message/signin-response";
import { GetUsersDto } from "../../../domain/application-service/dto/get/get-user.dto";
import { GetUsersResponse } from "../../../domain/application-service/dto/message/get-users-response";
import { GetUserByPkResponse } from "../../../domain/application-service/dto/message/get-users-by-pk-response";
import { validateToken } from "../../../../../../config/middlewares/auth.middleware";
import { SigninDtoValidator } from "../../validator/signin-dto-validator";

@controller('/user')
export default class UserController extends BaseHttpController {

    private _userRequestMapper: UserRequestMapper;

    constructor(@inject('UserApplicationService') private _userApplicationService: UserApplicationService) {
        super();
        this._userRequestMapper = new UserRequestMapper();
    }
    

    @httpGet('/')
    async getUsers(@request() req: Request, @response() res: Response){
        try{    
            const getUserDto: GetUsersDto = GetUsersDto.builder()
                .setName((req.query.name) ? String(req.query.name) : undefined)
                .setUsername((req.query.username) ? String(req.query.username) : undefined)
                .setEmail((req.query.email) ? String(req.query.email) : undefined)
                .setStatus(parseInt(String(req.query.status)) ? parseInt(String(req.query.status)) : undefined)
                .build();
            
            const getUsersReponse: GetUsersResponse = await this._userApplicationService.getUsers(getUserDto);

            return res.status(StatusCodes.OK).json(getUsersReponse.toPrimitive());

        }catch(err){
            console.log(err);
            
        }
    }

    @httpPost("/")
    async createUser(@request() req: Request, @response() res: Response) {

        let errors: string[] = [];

        try {

            const createUserDto = this._userRequestMapper.requestToUserDto(req.body);
            console.log(createUserDto);
            
            const createUserDtoValidator = new CreateUserCommandValidator(createUserDto);

            createUserDtoValidator.validate();

            if (createUserDtoValidator.hasErrors()) {
                errors = createUserDtoValidator.getErrors();
                throw new UserApplicationException("Ocurrio un error al crear el usuario");
            }

            const userCreateResponse: CreateUserResponse = await this._userApplicationService.createUser(createUserDto);

            return res.status(StatusCodes.CREATED).json(userCreateResponse.toPrimitive());

        } catch (err) {
            
            if (err instanceof UserApplicationException) {
                return res.status(StatusCodes.OK).json(
                    ErrorDto.builder()
                        .setCode(StatusCodes.BAD_REQUEST)
                        .setMessage(err.message)
                        .setErrors(errors)
                        .build().toPrimitive()
                );
            }

            if (err instanceof UserDomainException) {
                return res.status(StatusCodes.OK).json(
                    ErrorDto.builder()
                        .setCode(StatusCodes.INTERNAL_SERVER_ERROR)
                        .setMessage(err.message)
                        .build().toPrimitive()
                );
            }
        }
    }

    @httpPut("/")
    async updateUser(@request() req: Request, @response() res: Response){
        let errors:string[] = [];
        try{
            
            const updateUserDto = this._userRequestMapper.requestToUserDto(req.body);

            const createUserDtoValidator = new CreateUserCommandValidator(updateUserDto);

            createUserDtoValidator.validate();

            if (createUserDtoValidator.hasErrors()) {
                errors = createUserDtoValidator.getErrors();
                throw new UserApplicationException("Ocurrio un error al crear el usuario");
            }

            const updateUserResponse =  await this._userApplicationService.updateUser(updateUserDto);
    
            return res.json(
                updateUserResponse.toPrimitive()
            )
        }catch(err){
            if (err instanceof UserApplicationException) {
                return res.status(StatusCodes.OK).json(
                    ErrorDto.builder()
                        .setCode(StatusCodes.BAD_REQUEST)
                        .setMessage(err.message)
                        .setErrors(errors)
                        .build().toPrimitive()
                );
            }

            if (err instanceof UserDomainException) {
                return res.status(StatusCodes.OK).json(
                    ErrorDto.builder()
                        .setCode(StatusCodes.INTERNAL_SERVER_ERROR)
                        .setMessage(err.message)
                        .build().toPrimitive()
                );
            }
        }
        
    }

    @httpPut('/configure-password')
    async configurePassword(@request() req: Request, @response() res: Response) {
        try {
            const configurePasswordDto: ConfigureUserPasswordDto = ConfigureUserPasswordDto.builder()
                .setCode(req.body.code)
                .setPassword(req.body.password).build();

            const configurePasswordReponse: ConfigurePasswordReponse = await this._userApplicationService.configurePassword(configurePasswordDto);
            return res.status(StatusCodes.OK).json(
                configurePasswordReponse.toPrimitive()
            );
        } catch (err) {
            
            if(err instanceof UserDomainException){
                return res.status(StatusCodes.OK).json(
                    ErrorDto.builder()
                        .setCode(StatusCodes.INTERNAL_SERVER_ERROR)
                        .setMessage(err.message)
                        .build().toPrimitive()
                );
            }
        }

    }

    @httpPost('/signin')
    async signin(@request() req: Request, @response() res: Response){
        let errors:string[] = [];
        try{
            const signinDto: SigninDto = SigninDto.builder()
            .setEmail(req.body.email)
            .setPassword(req.body.password).build();
            console.log(signinDto);
            
            const signinDtoValidator = new SigninDtoValidator(signinDto);

            signinDtoValidator.validate();
            if(signinDtoValidator.hasErrors()){
                errors = signinDtoValidator.getErrors();
                throw new UserApplicationException("Ocurrio un error al iniciar sesion");
            }

            
            const signinResponse: SigninResponse = await this._userApplicationService.signin(signinDto);
           
            return res.status(StatusCodes.OK).json(
                signinResponse.toPrimitive()
            );
        
        }catch(err){
            console.log(err);
            
            if (err instanceof UserDomainException) {
                return res.status(StatusCodes.UNAUTHORIZED).json(
                    ErrorDto.builder()
                        .setMessage(err.message)
                        .build().toPrimitive()
                );
            }

            if (err instanceof UserApplicationException) {
                return res.status(StatusCodes.BAD_REQUEST).json(
                    ErrorDto.builder()
                        .setMessage(err.message)
                        .setErrors(errors)
                        .build().toPrimitive()
                );
            }
        }
        
    }

    @httpGet("/currentUser",validateToken)
    async getCurrentUser(@request() request: any, @response() res: Response){
        const idUser = request.user.idUser;
        
        const getUserByPkResponse: GetUserByPkResponse = await this._userApplicationService.getUserByPk(parseInt(idUser));

        return res.status(StatusCodes.OK).send(getUserByPkResponse.toPrimitive());
    }


    @httpGet("/:idUser")
    async getUserByPk(@requestParam("idUser") idUser: string, @response() res: Response){
        const getUserByPkResponse: GetUserByPkResponse = await this._userApplicationService.getUserByPk(parseInt(idUser));

        return res.status(StatusCodes.OK).send(getUserByPkResponse.toPrimitive());
    }

}
