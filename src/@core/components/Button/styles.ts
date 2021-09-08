import { StyleSheet } from 'react-native';

import { ConfigEntity } from '@hooks/useConfigTheme';

interface Iextra {
  width: string | number;
  height: string | number;
  marginTop?: string | number;
  disabled?: boolean;
}

export default (props: ConfigEntity, extra: Iextra) => {
  const { disabled, ...styles } = extra
  return StyleSheet.create({
    container: {
      ...styles,
      backgroundColor: props.textButtonPrimary,
      opacity: disabled ? 0.5 : 1,
      alignSelf: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 5,
    },
    title: {
      fontSize: 18,
      color: props.textLight,
      fontWeight: 'bold',
    }
  })
};
