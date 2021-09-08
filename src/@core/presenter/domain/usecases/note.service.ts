import { NoteContract } from "../contracts/note.contract";
import { Note } from "../entity/note.entity";

export class NoteService {

    constructor(private noteRepo: NoteContract){}

    async getAllNote(): Promise<Note[]> {
        try {
            return this.noteRepo.getAllNote();
        } catch (error: any) {
            console.log('***** Error NoteService -> getAllNote *****', error.message);
            throw new Error(error);
        }
    }

    async createNote(body: Note): Promise<void> {
        try {
            return this.noteRepo.createNote(body);
        } catch (error: any) {
            console.log('***** Error NoteService -> createNote *****', error.message);
            throw new Error(error);
        }
    }

}