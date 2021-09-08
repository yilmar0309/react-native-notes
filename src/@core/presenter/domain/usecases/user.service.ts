import AsyncStorage from "@react-native-async-storage/async-storage";
import { UserContract } from "../contracts/user.contract";

import { UserAndJWT, UserBodyAuthEntity, UserBodyRegisterEntity } from "../entity/user.entity";

export class UserService {

    constructor(private userRepo: UserContract) { }

    async auth(body: UserBodyAuthEntity): Promise<UserAndJWT> {
        try {
            const result = await this.userRepo.auth(body);
            await AsyncStorage.setItem('access_token', result.access_token);
            await AsyncStorage.setItem('user', JSON.stringify(result.user));
            return result;
        } catch (error: any) {
            console.log('***** UserService -> auth ERROR *****', error.message);
            throw new Error(error);
        }
    }

    async register(body: UserBodyRegisterEntity): Promise<void> {
        try {
            await this.userRepo.register(body);
        } catch (error: any) {
            console.log('***** UserService -> register ERROR *****', error.message);
            throw new Error(error);
        }
    }
}