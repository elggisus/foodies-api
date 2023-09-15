// import { Request, Response, NextFunction } from 'express';
import Token from '../../classes/token';
import { attachMiddleware } from "@decorators/express";
import {Request,Response,NextFunction} from 'express';
export const validateToken = async (req: any, res: Response, next: NextFunction) => {
 
    const userToken = req.get('Authorization') || '';
    
    try {        
        const decoded: any = await Token.checkToken(userToken);  
        console.log(decoded);
                      
        req.user = decoded.user;
        next();
    } catch (e) {

        return res.status(401).json({
            ok: false,
            data:null,
            message: 'El token no es valido'
        })

    }

}




export function Auth() {
    return function (target: any,propertyKey: string,descriptor: PropertyDescriptor) {
      attachMiddleware(target,propertyKey,async (req : any,res : Response,next : NextFunction)=>{
            const userToken = req.get('Authorization') || '';

            next();
        // try {        
        //     const decoded: any = await Token.checkToken(userToken);                
        //     req.user = decoded.user;
        // } catch (e) {
    
        //     return res.status(401).json({
        //         ok: false,
        //         data:null,
        //         message: 'El token no es valido'
        //     })
    
        // }
            // if(["CAN_ACCESS_TEST","CAN_ACCESS_HOME"].includes(key)){
            //   next();
            // }else{
            //   res.send("ACCESS DENIED");
            // }
        })
    };
  }