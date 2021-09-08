import React from 'react';
import { Alert, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';

import { Props, SliceProfile } from '../../navigation/interfaceInject'

import { SliceStateUser } from '@presenter/io/userSlice';
import { toggleSpinner } from '@presenter/io/spinnerSlice';

import useStyles from './styles';
import Button from '@components/Button/Button';

const Profile: React.FC<Props & SliceProfile> = (props) => {
  const { configTheme, navigateWithReset } = props;
  const styles = useStyles(configTheme);
  const dispatch = useDispatch();

  const user = useSelector(({ user } : { user: SliceStateUser }) => user.user);

  const handleLogout = async () => {
    try {
      await dispatch(toggleSpinner())
      await dispatch(props.logoutRedux())
      navigateWithReset('Splash')
      await dispatch(toggleSpinner())
    } catch (error) {
      await dispatch(toggleSpinner())
      Alert.alert('Error in Log out');
    }
  }
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.title}>Username:</Text>
        <Text style={styles.text}>{user?.username}</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.title}>name:</Text>
        <Text style={styles.text}>{user?.name}</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.title}>lastname:</Text>
        <Text style={styles.text}>{user?.lastname}</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.title}>age:</Text>
        <Text style={styles.text}>{user?.age}</Text>
      </View>
      <Button 
        title='Log out'
        onPress={handleLogout}
        configTheme={configTheme}
        width='60%'
        height={50}
        marginTop={50}
      />
    </SafeAreaView>
  )
}

export default Profile;
