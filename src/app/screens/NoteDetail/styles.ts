import { StyleSheet } from 'react-native';
import { ConfigEntity } from '@hooks/useConfigTheme';

export default (props: ConfigEntity) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: props.backgroundScreens,
      padding: 10,
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      color: props.textDark,
      marginBottom: 10
    },
    note: {
      fontSize: 14,
      color: props.textDark,
    }
  })
}
