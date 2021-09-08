import { Dispatch } from "@reduxjs/toolkit";
import { RouteProp, ParamListBase, NavigationProp } from "@react-navigation/native";

import { ConfigEntity } from '@hooks/useConfigTheme';
import { Note } from "@presenter/domain/entity/note.entity";
import { UserBodyAuthEntity, UserBodyRegisterEntity } from "@presenter/domain/entity/user.entity";

export interface Props {
  route: RouteProp<ParamListBase>;
  navigation: NavigationProp<ParamListBase, string, any, any>;
  configTheme: ConfigEntity;
  navigateWithReset: (route: string, params?: any) => void;
}

export interface SlicesLogin {
  authRedux: (body: UserBodyAuthEntity) => (dispatch: Dispatch) => void;
}

export interface SlicesRegister {
  registerRedux: (body: UserBodyRegisterEntity) => (dispatch: Dispatch) => void;
}

export interface SlicesSplash {
  validateAuthLocalRedux: () => (dispatch: Dispatch) => void;
}

export interface SlicesHome {
  getAllNoteRedux: () => (dispatch: Dispatch) => void;
}

export interface SliceCreateNote {
  createNoteReudux: (body: Note) => (dispatch: Dispatch) => void;
}

export interface SliceProfile {
  logoutRedux: () => (dispatch: Dispatch) => void;
}
