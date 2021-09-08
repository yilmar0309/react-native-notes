import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { MenuProvider } from 'react-native-popup-menu';

import useConfigTheme from '@hooks/useConfigTheme';
import Spinner from '@components/Spinner/Spinner';

import StackNavigation from '@navigation/stack.navigation';

const App = () => {
  const { configTheme } = useConfigTheme();
  return (
    <SafeAreaProvider>
      <MenuProvider>
        <NavigationContainer>
          <StackNavigation />
        </NavigationContainer>
        <Spinner configTheme={configTheme} />
      </MenuProvider>
    </SafeAreaProvider>
  );
};

export default App;
