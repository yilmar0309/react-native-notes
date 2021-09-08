/**
 * @format
 */

import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import Button from '@components/Button/Button';

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
    const handleSaveNote = jest.fn();
    const testRenderer = renderer.create(<Button
        title='Save'
        onPress={handleSaveNote}
        configTheme={configTheme}
        width='60%'
        height={50}
        marginTop={50}
        disabled={false}
    />)
    testRenderer.root;
});

