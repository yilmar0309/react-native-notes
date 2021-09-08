import { UserAndJWT, UserBodyAuthEntity, UserBodyRegisterEntity } from "@presenter/domain/entity/user.entity";
import { UserService } from "@presenter/domain/usecases/user.service";
import { UserAxiosRepo } from "@presenter/adapters/repositories/user.axios.repo";

export class UserController {

    async auth(body: UserBodyAuthEntity): Promise<UserAndJWT> {
        try {
            const userAxiosRepo = new UserAxiosRepo();
            const userService = new UserService(userAxiosRepo);
            return await userService.auth(body);
        } catch (error: any) {
            console.log('***** UserController -> auth ERROR *****', error.message);
            throw new Error(error);
        }
    }

    async register(body: UserBodyRegisterEntity): Promise<void> {
        try {
            const userAxiosRepo = new UserAxiosRepo();
            const userService = new UserService(userAxiosRepo);
            await userService.register(body);
        } catch (error: any) {
            console.log('***** UserController -> register ERROR *****', error.message);
            throw new Error(error);
        }
    }

}