import { StyleSheet } from 'react-native';
import { ConfigEntity } from '@hooks/useConfigTheme';

export default (props: ConfigEntity) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: props.backgroundScreens,
      padding: 10,
    },
    box: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      color: props.textDark,
    },
    text: {
      marginLeft: 10,
      fontSize: 14,
      color: props.textDark,
    },
  })
}
