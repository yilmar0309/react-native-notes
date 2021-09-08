import {configureStore} from '@reduxjs/toolkit';
import user from './userSlice';
import note from './noteSlice';
import spinner from './spinnerSlice';

export default configureStore({
  reducer: {
    user,
    note,
    spinner
  },
  devTools: true,
});
