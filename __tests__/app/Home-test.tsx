/**
 * @format
 */

import 'react-native';
import React from 'react';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

import Home from '@screens/Home/Home';
import List from '@components/List/List';
import ActionButton from '@components/ActionButton/ActionButton';

const mockedNavigate = jest.fn();

jest.mock('@react-navigation/native', () => {
  return {
    ...jest.requireActual('@react-navigation/native'),
    useNavigation: () => ({
      navigate: mockedNavigate,
    }),
  };
});

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: () => mockDispatch
}));

jest.mock('react-native-vector-icons/MaterialCommunityIcons', () => 'MaterialCommunityIcons')

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
  const navigateWithReset = jest.fn();
  const route = {
    key: 'Home',
    name: 'Home',
    params: undefined,
  };
  const getAllNoteRedux = jest.fn();

  const testRenderer = renderer.create(
    <Home 
      route={route} 
      navigation={navigation} 
      configTheme={configTheme} 
      navigateWithReset={navigateWithReset} 
      getAllNoteRedux={getAllNoteRedux}
    />
  )
  const testInstance = testRenderer.root;

  expect(testInstance.findByType(List).props.foo);
  expect(testInstance.findByType(ActionButton).props.foo);
});

