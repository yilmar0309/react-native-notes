import axios from "axios";
import Snackbar from "react-native-snackbar";

import { sendMessageSnackbar } from "@utils/message";
import API, { getAccessToken } from '@presenter/io/config'

import { NoteContract } from "@presenter/domain/contracts/note.contract";
import { Note } from "@presenter/domain/entity/note.entity";

export class NoteAxiosRepo implements NoteContract {

    async getAllNote(): Promise<Note[]> {
        try {
            const URL = `${API.baseUrlNode}/${API.endpoints.getAllNote}`
            const result = await axios.get(URL, await getAccessToken());
            console.log('NoteAxiosRepo -> getAllNote:', result.data.data);
            return result.data.data
        } catch (error: any) {
            console.log('***** UserAxiosRepo -> getAllNote ERROR *****', error.message);
            if (error.request.status === 401 || error.request.status === 500) {
                setTimeout(() => {
                    sendMessageSnackbar('Erro, Not Autorizated!', 'error', Snackbar.LENGTH_LONG);
                }, 1000)
            } else {
                setTimeout(() => {
                    sendMessageSnackbar('Connection error!', 'error', Snackbar.LENGTH_LONG);
                }, 1000)
            }
            throw new Error(error);
        }
    }

    async createNote(body: Note): Promise<void> {
        try {
            const URL = `${API.baseUrlNode}/${API.endpoints.createNote}`
            const result = await axios.post(URL, body, await getAccessToken());
            console.log('NoteAxiosRepo -> createNote:', result.data);
            return result.data.data
        } catch (error: any) {
            console.log('***** UserAxiosRepo -> createNote ERROR *****', error.message);
            if (error.request.status === 401 || error.request.status === 500) {
                setTimeout(() => {
                    sendMessageSnackbar('UErro, Not Autorizated!', 'error', Snackbar.LENGTH_LONG);
                }, 1000)
            } else {
                setTimeout(() => {
                    sendMessageSnackbar('Connection error!', 'error', Snackbar.LENGTH_LONG);
                }, 1000)
            }
            throw new Error(error);
        }
    }

}