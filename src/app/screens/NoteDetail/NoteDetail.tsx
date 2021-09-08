import React from 'react';
import { ScrollView, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Props } from '../../navigation/interfaceInject'

import useStyles from './styles';

const NoteDetial: React.FC<Props> = (props) => {
  const { configTheme, route } = props;
  const styles = useStyles(configTheme);
  const params: any = route.params

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>{params.item.title}</Text>
        <Text style={styles.note}>{params.item.note}</Text>
      </ScrollView>
    </SafeAreaView>
  )
}

export default NoteDetial;
