import { UserAndJWT, UserBodyAuthEntity, UserBodyRegisterEntity } from "../entity/user.entity";

export abstract class UserContract {
    abstract auth(body: UserBodyAuthEntity): Promise<UserAndJWT>;
    abstract register(body: UserBodyRegisterEntity): Promise<void>;
}