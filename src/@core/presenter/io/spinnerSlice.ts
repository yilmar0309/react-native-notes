import { createSlice } from "@reduxjs/toolkit";

export interface SliceStateSpinner {
    visible: boolean;
}

const initialState: SliceStateSpinner = { visible: false };

const spinnerSlice = createSlice({
    name: 'spinner',
    initialState,
    reducers: {
        toggleSpinner: (state) => {
            state.visible = !state.visible
        }
    }
})

export const { toggleSpinner } = spinnerSlice.actions;

export default spinnerSlice.reducer;