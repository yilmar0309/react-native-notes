/**
 * @format
 */

import 'react-native';
import React from 'react';
import Splash from '@screens/Splash/Splash';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: () => mockDispatch
}));

test('renders correctly', () => {
  const configTheme = {
    primary: '#FE4A01',
    secondary: '#FEE2CE',
    backgroundScreens: '#f2f2f4',
    textLight: 'white',
    textDark: 'black',
    textPrimary: '#000000',
    textSecondary: '#B9B9BB',
    textActionPrimary: '',
    textButtonPrimary: 'white',
    textButtonSecondary: '#1e344f',
    textInputTitle: '#B9B9BB',
    textInputText: 'black',
    card: 'white',
  }
  const navigation = {
    addListener: jest.fn(),
    canGoBack: jest.fn(),
    dispatch: jest.fn(),
    getParent: jest.fn(),
    getState: jest.fn(),
    goBack: jest.fn(),
    isFocused: jest.fn(),
    navigate: jest.fn(),
    pop: jest.fn(),
    popToTop: jest.fn(),
    push: jest.fn(),
    removeListener: jest.fn(),
    replace: jest.fn(),
    reset: jest.fn(),
    setOptions: jest.fn(),
    setParams: jest.fn(),
  };
  const validateAuthLocalRedux = jest.fn()
  const navigateWithReset = (route: string, params?: any) => null;
  const route = {
    key: 'Splash',
    name: 'Splash',
    params: undefined,
  };
  const testRenderer = renderer.create(<Splash 
    route={route} 
    navigation={navigation} 
    configTheme={configTheme} 
    navigateWithReset={navigateWithReset} 
    validateAuthLocalRedux={validateAuthLocalRedux}
  />)
  testRenderer.root;
});

