/**
 * @format
 */

 import 'react-native';
 import React from 'react';
 import { fromJS, List as ImmutableList } from 'immutable';
 // Note: test renderer must be required after react-native.
 import renderer from 'react-test-renderer';
 
 import List from '@components/List/List';

 const mockedNavigate = jest.fn();
 
 jest.mock('@react-navigation/native', () => {
   return {
     ...jest.requireActual('@react-navigation/native'),
     useNavigation: () => ({
       navigate: mockedNavigate,
     }),
   };
 });
 
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
   const renderItem = jest.fn();
   const onRefresh = jest.fn();
   const loadingRefresh = false;
   const data = ImmutableList([])
   const testRenderer = renderer.create(<List 
      dataSource={data}
      extraData={fromJS([])}
      renderItem={renderItem}
      refreshing={loadingRefresh}
      onRefresh={onRefresh}
      configTheme={configTheme} 
    />)
   const testInstance = testRenderer.root;

   expect(testInstance.findByType(List).props.foo);
 });
 
 