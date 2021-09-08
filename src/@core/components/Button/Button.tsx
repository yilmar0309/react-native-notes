import React from 'react';
import { Pressable, Text, View } from 'react-native';

import { ConfigEntity } from '@hooks/useConfigTheme';

import useStyles from './styles';

interface Props {
  title: string;
  onPress: () => void;
  width: string | number;
  height: string | number;
  marginTop?: string | number;
  disabled?: boolean;
  configTheme: ConfigEntity;
}

const Button: React.FC<Props> = (props) => {
  const { title, width, height, marginTop, configTheme, disabled } = props;
  const styles = useStyles(configTheme, { width, height, marginTop, disabled });

  return (
    <Pressable {...props} style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  )
}

export default Button;
