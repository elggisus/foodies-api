import { injectable } from "inversify";
import transport from "../../../../../config/mail";
import { MessagingRepository } from "../../domain/application-service/ports/output/repository/messaging.repository";
import { User } from "../../domain/domain-core/entity/user";

@injectable()
export class MessagingRepositoryImpl implements MessagingRepository{
    
    async sendConfirmMessage(user:User): Promise<void> {

        const message = "<h2>"+process.env.PROJECT_NAME+"</h2>" +
        "<h3>Hola " + user.getUsername + "</h3>" +
            "<h4>Ha click en el enlace para configurar su contrase&ntilde;a</h4>" +
            "<p><a href='"+process.env.URL+"/#/auth/confirm/" + Buffer.from(user.getId.getValue + ',' + user.getCode).toString("base64") + "'>Configurar contraseña</a></p>";

        const info = await transport.sendMail({
            from: 'no-reply@your-domain.com',
            to: user.getEmail, 
            subject: "Su cuenta ha sido creada con exito!", 
            text: "Cuenta Creada",
            html: message,
          });
    }

}