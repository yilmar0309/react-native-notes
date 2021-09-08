import { useEffect, useState } from 'react';
import { Platform, useColorScheme } from 'react-native';

export interface ConfigEntity {
  primary: string;
  secondary: string;
  backgroundScreens: string;
  textLight: string;
  textDark: string;
  textPrimary: string;
  textSecondary: string;
  textActionPrimary: string;
  textButtonPrimary: string;
  textButtonSecondary: string;
  textInputTitle: string;
  textInputText: string;
  card: string;
  /* fontLight: string;
  fontRegular: string;
  fontBold: string; */
}

export default () => {
  const isDarkMode = useColorScheme();

  const [mode, setMode] = useState<string | null | undefined>(isDarkMode)

  const [configTheme, setConfigTheme] = useState<ConfigEntity>({
    primary: 'rgba(231,76,60,1)',
    secondary: 'black',
    backgroundScreens: '#f2f2f4',
    textLight: 'white',
    textDark: 'black',
    textPrimary: '#000000',
    textSecondary: '#B9B9BB',
    textActionPrimary: 'rgba(231,76,60,1)',
    textButtonPrimary: 'rgba(231,76,60,1)',
    textButtonSecondary: '#1e344f',
    textInputTitle: '#B9B9BB',
    textInputText: 'black',
    card: 'white',
    /* fontLight: Platform.OS === 'ios' ? 'SonnyGothic-UltraLight' : 'W Foundry - Sonny Gothic Ultra Light',
    fontRegular: Platform.OS === 'ios' ? 'SonnyGothic-Regular' : 'W Foundry - Sonny Gothic Regular',
    fontBold: Platform.OS === 'ios' ? 'SonnyGothic-Bold' : 'W Foundry - Sonny Gothic Bold', */
  })

  useEffect(() => {
    if (mode === 'dark') {
      setConfigTheme({
        ...configTheme,
      })
    } else {
      setConfigTheme({
        ...configTheme,
      })
    }
  }, [mode])

  const setTheme = (theme: string) => setMode(theme);

  return {
    mode,
    configTheme,
    setTheme,
  }
}