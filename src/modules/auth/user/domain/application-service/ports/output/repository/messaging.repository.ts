import { User } from "../../../../domain-core/entity/user";

export abstract class MessagingRepository{
    abstract sendConfirmMessage(user:User):Promise<void>;
}