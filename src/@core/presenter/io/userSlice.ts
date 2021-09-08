import AsyncStorage from '@react-native-async-storage/async-storage';
import { createSlice, Dispatch } from '@reduxjs/toolkit';

import { UserBodyAuthEntity, UserBodyRegisterEntity, UserEntity } from '@presenter/domain/entity/user.entity';

import { UserController } from '@presenter/adapters/controllers/user.controller';

const userController = new UserController()

export const validateAuthLocalRedux = () => async (dispatch: Dispatch) => {
  try {
    console.log('validateAuthLocal')
    const user: any = await AsyncStorage.getItem('user');
    if (user) {
      await dispatch(setUser(JSON.parse(user)))
      return user;
    } else {
      return null;
    }
  } catch (error) {
    return null;
  }
};

export const authRedux = (body: UserBodyAuthEntity) => async (dispatch: Dispatch) => {
  try {
    const response = await userController.auth(body);
    await dispatch(setUser(response.user))
  } catch (error: any) {
    console.log('*** authRedux Error: ****', error.message);
    throw new Error(error);
  }
};

export const registerRedux = (body: UserBodyRegisterEntity) => async (dispatch: Dispatch) => {
  try {
    await userController.register(body);
  } catch (error: any) {
    console.log('*** registerRedux Error: ****', error.message);
    throw new Error(error);
  }
};

export const logoutRedux = () => async (dispatch: Dispatch) => {
  try {
    await AsyncStorage.removeItem('user');
    await AsyncStorage.removeItem('access_token');
    dispatch(setUser({}))
  } catch (error: any) {
    throw new Error(error);
  }
}

export interface SliceStateUser {
  user: UserEntity | null;
}

const initialState: SliceStateUser = { user: null };

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
