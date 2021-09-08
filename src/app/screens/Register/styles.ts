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
    title:  {
      marginTop: '20%',
      textAlign: 'center',
      fontSize: 20,
      fontWeight: 'bold',
      color: props.textDark,
    }
  })
}
