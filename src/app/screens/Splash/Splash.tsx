import React, { useEffect } from 'react';
import { Text } from 'react-native';
import { useDispatch } from 'react-redux';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Props, SlicesSplash } from '../../navigation/interfaceInject';

import useStyles from './styles';

const Splash: React.FC<Props & SlicesSplash> = (props) => {
  const { configTheme, navigateWithReset } = props;
  const styles = useStyles(configTheme);
  const dispatch = useDispatch();

  useEffect(() => {
    async function funAsync() {
      const user: any = await dispatch(props.validateAuthLocalRedux());
      if (user) {
        navigateWithReset('TabsNavigation')
      } else {
        navigateWithReset('Login')
      }
    }
    funAsync();
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <Text>Welcome</Text>
    </SafeAreaView>
  )
}

export default Splash;
