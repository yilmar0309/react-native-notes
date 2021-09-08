import { StyleSheet } from 'react-native';
import { ConfigEntity } from '@hooks/useConfigTheme';

export default (props: ConfigEntity) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: props.backgroundScreens
    },
    title: {
      color: 'black',
      fontWeight: 'bold',
      fontSize: 18,
      marginBottom: 10,
    },
    text: {
      color: 'black',
      fontSize: 14,
    },
    card: {
      borderBottomWidth: 0.5,
      borderBottomColor: '#aaa',
      padding: 10,
    },
  })
}
