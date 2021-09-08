import axios from "axios";
import Snackbar from "react-native-snackbar";

import { sendMessageSnackbar } from "@utils/message";
import API from '@presenter/io/config'

import { UserContract } from "@presenter/domain/contracts/user.contract";
import { UserAndJWT, UserBodyAuthEntity, UserBodyRegisterEntity } from "@presenter/domain/entity/user.entity";

export class UserAxiosRepo implements UserContract {

    async auth(body: UserBodyAuthEntity): Promise<UserAndJWT> {
        try {
            const URL = `${API.baseUrlNode}/${API.endpoints.authenticate}`
            const result = await axios.post(URL, body);
            console.log('UserAxiosRepo -> auth:', result.data.data);
            return result.data.data
        } catch (error: any) {
            console.log('***** UserAxiosRepo -> auth ERROR *****', error.message);
            if (error.request.status === 401 || error.request.status === 500) {
                setTimeout(() => {
                    sendMessageSnackbar('User/password incorrect!', 'error', Snackbar.LENGTH_LONG);
                }, 1000)
            } else {
                setTimeout(() => {
                    sendMessageSnackbar('Connection error!', 'error', Snackbar.LENGTH_LONG);
                }, 1000)
            }
            throw new Error(error);
        }
    }

    async register(body: UserBodyRegisterEntity): Promise<void> {
        try {
            const URL = `${API.baseUrlNode}/${API.endpoints.register}`
            const result = await axios.post(URL, body);
            console.log('UserAxiosRepo -> register:', result.data.data)
            if (result.data.data === 'userExist') {
                setTimeout(() => {
                    sendMessageSnackbar('User exist!', 'other', Snackbar.LENGTH_INDEFINITE);
                }, 1000)
                throw new Error('User exist');
            } else {
                setTimeout(() => {
                    sendMessageSnackbar('Successfull registration!', 'success', Snackbar.LENGTH_LONG);
                }, 1000)
            }
        } catch (error: any) {
            console.log('***** UserAxiosRepo -> register ERROR *****', error.message);
            if (error.request.status === 401 || error.request.status === 500) {
                sendMessageSnackbar('Error in register!', 'error', Snackbar.LENGTH_LONG);
            } else {
                sendMessageSnackbar('Connection error!', 'error', Snackbar.LENGTH_LONG);
            }
            throw new Error(error);
        }
    }
}