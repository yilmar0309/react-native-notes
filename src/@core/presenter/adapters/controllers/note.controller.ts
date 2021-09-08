import { Note } from "@presenter/domain/entity/note.entity";
import { NoteService } from "@presenter/domain/usecases/note.service";
import { NoteAxiosRepo } from "../repositories/note.axios.repo";

const noteRepo = new NoteAxiosRepo();
const noteService = new NoteService(noteRepo);

export class NoteController {

    async getAllNote(): Promise<Note[]> {
        try {
            return await noteService.getAllNote();
        } catch (error: any) {
            console.log('***** Error NoteController -> getAllNote *****', error.message);
            throw new Error(error);
        }
    }

    async createNote(body: Note): Promise<void> {
        try {
            return await noteService.createNote(body);
        } catch (error: any) {
            console.log('***** Error NoteController -> createNote *****', error.message);
            throw new Error(error);
        }
    }

}