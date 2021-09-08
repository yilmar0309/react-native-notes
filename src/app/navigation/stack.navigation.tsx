import React from 'react';
import { enableScreens } from 'react-native-screens';
import { createStackNavigator } from '@react-navigation/stack';

import InjectHOC from './InjectHOC';
import { Props, SliceCreateNote, SlicesLogin, SlicesRegister, SlicesSplash } from './interfaceInject'

import Splash from '@screens/Splash/Splash';
import Login from '@screens/Login/Login';
import Register from '@screens/Register/Register';
import NoteDetail from '@screens/NoteDetail/NoteDetail';
import CreateNote from '@screens/CreateNote/CreateNote';

import TabsNavigation from './tabs.navigation';

import { validateAuthLocalRedux, authRedux, registerRedux } from '@presenter/io/userSlice';
import { createNoteReudux } from '@presenter/io/noteSlice';

enableScreens();
const Stack = createStackNavigator();
function StackNavigation() {
  return (
    <Stack.Navigator
      initialRouteName='Splash'
      screenOptions={{
        headerMode: 'screen',
        headerTintColor: 'white',
        headerStyle: { backgroundColor: 'rgba(231,76,60,1)' },
      }}
    >
      <Stack.Screen 
        name="Splash" 
        component={InjectHOC<Props, SlicesSplash>(Splash, { validateAuthLocalRedux })} 
        options={{ headerShown: false }}
      />
      
      <Stack.Screen 
        name="NoteDetail" 
        component={InjectHOC<Props, {}>(NoteDetail, { })} 
        options={{
          title: 'Detail',
          headerBackTitle: 'Notes'
        }}
      />
      <Stack.Screen 
        name="CreateNote" 
        component={InjectHOC<Props, SliceCreateNote>(CreateNote, { createNoteReudux })} 
        options={{
          title: 'Create Note',
          headerBackTitle: 'Notes'
        }}
      />
      <Stack.Screen 
        name="Login" 
        component={InjectHOC<Props, SlicesLogin>(Login, { authRedux })} 
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen 
        name="Register" 
        component={InjectHOC<Props, SlicesRegister>(Register, { registerRedux })} 
      />
      <Stack.Screen 
        name="TabsNavigation" 
        component={TabsNavigation}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default StackNavigation;