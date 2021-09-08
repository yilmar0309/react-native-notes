import { StyleSheet } from 'react-native';
import { ConfigEntity } from '@hooks/useConfigTheme';

export default (props: ConfigEntity) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: props.backgroundScreens
    },
    boxInput: {
      alignSelf: 'center',
      marginTop: '5%',
      width: '90%',
    },
  })
}
