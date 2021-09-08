import React from 'react';
import { ActivityIndicator, Modal, Text, View } from 'react-native';

import { ConfigEntity } from '@hooks/useConfigTheme';

import { SliceStateSpinner } from '@presenter/io/spinnerSlice';

import useStyles from './styles';
import { useSelector } from 'react-redux';

interface Props {
  configTheme: ConfigEntity;
}

const Spinner: React.FC<Props> = (props) => {
  const { configTheme } = props;
  const styles = useStyles(configTheme);
  const visible = useSelector(({ spinner } : { spinner: SliceStateSpinner }) => spinner.visible);

  return (
    <Modal
      animationType='fade'
      onRequestClose={() => null}
      visible={visible}
      transparent={true}
    >
      <View style={styles.container}>
        <View style={styles.box}>
          <ActivityIndicator size={30} color={configTheme.primary} />
          <Text>Loading...</Text>
        </View>
      </View>
    </Modal>
  )
}

export default Spinner;
