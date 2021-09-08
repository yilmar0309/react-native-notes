import { StyleSheet } from 'react-native';

import { ConfigEntity } from '@hooks/useConfigTheme';

export default (props: ConfigEntity) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      justifyContent: 'center',
      alignItems: 'center',
    },
    box: {
      backgroundColor: 'white',
      height: 60,
      width: 150,
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      borderRadius: 5,
    }
  })
};
