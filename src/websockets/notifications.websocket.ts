// import { Socket } from "socket.io";
// import MySocketInterface from "../interfaces/socket.interface";

// class NotificationsSocket implements MySocketInterface {

//    handleConnection(socket: Socket) {        
    
//         socket.on('notification:new',(data)=>{
//             socket.emit('notification:new', {id:Math.floor((Math.random() * 100) + 1),comment:'Comentario de la notifacion'});
//         })
//     }

//    middlewareImplementation(socket: Socket, next:any) {
//         // return next(new Error("invalid"));
//        return next();
//    }
// }

// export default NotificationsSocket;