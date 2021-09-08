import { StyleSheet } from 'react-native';
import { ConfigEntity } from '@hooks/useConfigTheme';

export default (props: ConfigEntity) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      height: 55,
      width: '100%',
      flexDirection: 'row',
    },
    image: {
      position: 'absolute',
      bottom: 10,
      height: 25,
      width: 25,
    },
    title: {
      position: 'absolute',
    },
    containerInput: {
      flex: 1,
      alignSelf: 'flex-end',
      fontSize: 15,
    },
    textRequired: {
      position: 'absolute',
      color: '#ff0000',
      bottom: -15,
      fontSize: 12,
    },
    btnRigh: {
      position: 'absolute',
      bottom: 10,
      right: 0,
      height: 25,
      width: 25,
    },
    imageRigh: {
      height: 25,
      width: 25,
    },
    separator: {
      position: 'absolute',
      bottom: 0,
    },
    containerSeparator: {
      alignItems: 'center',
      width: '100%',
      position: 'absolute',
      bottom: 0,
    },
  })
}
