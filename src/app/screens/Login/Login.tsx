import React, { createRef, useState } from 'react';
import { Alert, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch } from 'react-redux';

import { Props, SlicesLogin } from '../../navigation/interfaceInject'

import { toggleSpinner } from '@presenter/io/spinnerSlice';

import Button from '@components/Button/Button';
import TextInput from '@components/TextInput/TextInput';

import useStyles from './styles';

interface State {
  username: string;
  password: string;
}

const Login: React.FC<Props & SlicesLogin> = (props) => {
  const { configTheme, navigateWithReset, navigation } = props;
  const styles = useStyles(configTheme);
  const dispatch = useDispatch()
  
  const refPassword: HTMLInputElement | unknown | any = createRef()
  
  const [form, setForm] = useState<State>({
    username: 'yilmar0309@gmail.com',
    password: '12345'
  });
  const [secureTextEntry, setSecureTextEntry] = useState(true)

  const handleOnFocusPassword = () => {
    if (refPassword) {
      refPassword.current.focus()
    }
  }
  const handleLogin = async () => {
    try {
      await dispatch(toggleSpinner())
      await dispatch(props.authRedux(form))
      navigateWithReset('TabsNavigation')
      await dispatch(toggleSpinner())
    } catch (error) {
      await dispatch(toggleSpinner())
      Alert.alert('Sorry, an error ocurred');
    }
  }
  const handleGoToRegister = () => navigation.navigate('Register');
  const handleToggleSecurity = () => setSecureTextEntry(!secureTextEntry);

  const onChangeValue = (key: string, text: string) => setForm({ ...form, [key]: text })

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentInsetAdjustmentBehavior="automatic" keyboardShouldPersistTaps='always'>
        <Text style={styles.title}>Login</Text>
        <View style={styles.boxInput}>
          <TextInput
            autoFocus
            value={form.username}
            name='username'
            error={false}
            onSubmitEditing={handleOnFocusPassword}
            onChangeText={onChangeValue}
            label='Username'
            configTheme={configTheme}
          />
        </View>
        <View style={styles.boxInput}>
          <TextInput
            ref={refPassword}
            value={form.password}
            name='password'
            error={false}
            onChangeText={onChangeValue}
            label='Password'
            configTheme={configTheme}
            secureTextEntry={secureTextEntry}
            withPass
            handleToggleSecurity={handleToggleSecurity}
          />
        </View>
        <Button
          title='Login'
          onPress={handleLogin}
          configTheme={configTheme}
          width='60%'
          height={50}
          marginTop={50}
          disabled={!form.username || !form.password}
        />

        <Button
          title='Register'
          onPress={handleGoToRegister}
          configTheme={configTheme}
          width='60%'
          height={50}
          marginTop={50}
        />
      </ScrollView>
    </SafeAreaView>
  )
}

export default Login;
