import { createSlice, Dispatch } from '@reduxjs/toolkit';

import { Note } from '@presenter/domain/entity/note.entity';

import { NoteController } from '@presenter/adapters/controllers/note.controller';

const noteController = new NoteController()

export type SliceStateNote = { data: Note[] };

const initialState: SliceStateNote = {
  data: [],
}

export const getAllNoteRedux = () => async (dispatch: Dispatch) => {
  try {
    const data = await noteController.getAllNote();
    console.log('data', data)
    await dispatch(setNotes(data));
  } catch (error: any) {
    console.log('*** getAllNoteRedux Error: ****', error.message);
    throw new Error(error);
  }
};

export const createNoteReudux = (body: Note) => async (dispatch: Dispatch) => {
  try {
    await noteController.createNote(body);
  } catch (error: any) {
    console.log('*** createNoteReudux Error: ****', error.message);
    throw new Error(error);
  }
};

const noteSlice = createSlice({
  name: 'note',
  initialState,
  reducers: {
    setNotes: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setNotes } = noteSlice.actions;

export default noteSlice.reducer;
