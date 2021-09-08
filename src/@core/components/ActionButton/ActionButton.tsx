import React from 'react';
import { Pressable } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { ConfigEntity } from '@hooks/useConfigTheme';

import useStyles from './styles';

interface Props {
  buttonColor: string;
  onPress: () => void;
  configTheme: ConfigEntity;
}

const ActionButton: React.FC<Props> = (props) => {
  const { configTheme } = props;
  const styles = useStyles(configTheme);

  return (
    <Pressable { ...props } style={styles.container}>
      <MaterialCommunityIcons name='plus' size={30} color='white'/>
    </Pressable>
  )
}

export default ActionButton;
