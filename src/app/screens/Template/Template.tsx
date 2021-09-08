import React from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Props } from '../../navigation/interfaceInject'

import useStyles from './styles';

const Template: React.FC<Props> = (props) => {
  const { configTheme } = props;
  const styles = useStyles(configTheme);
  
  return (
    <SafeAreaView style={styles.container}>
      <Text>Template</Text>
    </SafeAreaView>
  )
}

export default Template;
