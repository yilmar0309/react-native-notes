import { Note } from "../entity/note.entity";

export abstract class NoteContract {
    abstract getAllNote(): Promise<Note[]>
    abstract createNote(body: Note): Promise<void>;
}