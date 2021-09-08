/**
 * @format
 */

import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import ActionButton from '@components/ActionButton/ActionButton';

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
    const onPress = jest.fn();
    const testRenderer = renderer.create(<ActionButton
        buttonColor='black'
        onPress={onPress}
        configTheme={configTheme}
    />)
    testRenderer.root;
});

