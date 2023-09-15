import "reflect-metadata"

import { ServerExpress } from "./classes/server";

import { AppDataSource } from "./config/typeorm";
import "./config/controller/controller";
import dotenv from "./config/dotenv";


const server = new ServerExpress();


server.startServer( async ()=>{
    try{
        dotenv.config();
        console.log('Servidor corriendo en el puerto: ' + server.port);
        
        await AppDataSource.initialize();
        console.log("Conectado a la base de datos");
    }catch(err){
        console.log(err);
    }
});