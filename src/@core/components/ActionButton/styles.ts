import { StyleSheet } from 'react-native';

import { ConfigEntity } from '@hooks/useConfigTheme';

export default (props: ConfigEntity) => {
  return StyleSheet.create({
    container: {
      height: 50,
      width: 50,
      backgroundColor: props.textActionPrimary || 'white',
      borderRadius: 25,
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 999,
      position: 'absolute',
      right: 10,
      bottom: 30,
    }
  })
};
