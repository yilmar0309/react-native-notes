import React from 'react';
import { Text, View } from 'react-native';

import { ConfigEntity } from '@hooks/useConfigTheme';

import useStyles from './styles';

interface Props {
  configTheme: ConfigEntity;
}

const Template: React.FC<Props> = (props) => {
  const { configTheme } = props;
  const styles = useStyles(configTheme);

  return (
    <View style={styles.container}>
      <Text>Template</Text>
    </View>
  )
}

export default Template;
