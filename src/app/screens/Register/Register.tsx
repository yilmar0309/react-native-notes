import React, { useState } from 'react';
import { Alert, Keyboard, KeyboardAvoidingView, Platform, ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch } from 'react-redux';

import { Props, SlicesRegister } from '../../navigation/interfaceInject'

import { toggleSpinner } from '@presenter/io/spinnerSlice';

import Button from '@components/Button/Button';
import TextInput from '@components/TextInput/TextInput';

import useStyles from './styles';

interface State {
  name: string;
  lastname: string;
  email: string;
  password: string;
  confirmPassword: string;
  age: string;
}

const Register: React.FC<Props & SlicesRegister> = (props) => {
  const { configTheme, navigation } = props;
  const styles = useStyles(configTheme);

  const dispatch = useDispatch()

  const [form, setForm] = useState<State>({
    name: 'yilmar alexis',
    lastname: 'Noriega trujillo',
    email: 'yilmar0309@gmail.com',
    password: '12345',
    confirmPassword: '12345',
    age: '30'
  });
  const [secureTextEntry, setSecureTextEntry] = useState(true)

  const handleLogin = async () => {
    if (form.password === form.confirmPassword) {
      try {
        await dispatch(toggleSpinner())
        await dispatch(props.registerRedux(form))
        navigation.goBack();
        await dispatch(toggleSpinner())
      } catch (error) {
        await dispatch(toggleSpinner())
        Alert.alert('Sorry, an error ocurred');
      }
    } else {
      setForm({ ...form, password: '', confirmPassword: '' })
      Alert.alert('Password incorrect!');
    }
  }
  const handleToggleSecurity = () => setSecureTextEntry(!secureTextEntry);

  const onChangeValue = (key: string, text: string) => setForm({ ...form, [key]: text })

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <ScrollView contentInsetAdjustmentBehavior="automatic" keyboardShouldPersistTaps='always'>
          <View style={styles.boxInput}>
            <TextInput
              value={form.name}
              name='name'
              error={false}
              onChangeText={onChangeValue}
              label='Name'
              configTheme={configTheme}
            />
          </View>
          <View style={styles.boxInput}>
            <TextInput
              value={form.lastname}
              name='lastname'
              error={false}
              onChangeText={onChangeValue}
              label='Lastname'
              configTheme={configTheme}
            />
          </View>
          <View style={styles.boxInput}>
            <TextInput
              value={form.email}
              name='email'
              error={false}
              onChangeText={onChangeValue}
              label='Email'
              configTheme={configTheme}
            />
          </View>
          <View style={styles.boxInput}>
            <TextInput
              value={form.age}
              name='age'
              error={false}
              onChangeText={onChangeValue}
              label='Age'
              configTheme={configTheme}
            />
          </View>
          <View style={styles.boxInput}>
            <TextInput
              value={form.password}
              name='password'
              error={false}
              onChangeText={onChangeValue}
              label='Password'
              configTheme={configTheme}
              onSubmitEditing={Keyboard.dismiss}
              secureTextEntry={secureTextEntry}
              withPass
              handleToggleSecurity={handleToggleSecurity}
            />
          </View>
          <View style={styles.boxInput}>
            <TextInput
              value={form.confirmPassword}
              name='confirmPassword'
              error={false}
              onChangeText={onChangeValue}
              label='Confirm password'
              configTheme={configTheme}
              onSubmitEditing={Keyboard.dismiss}
              secureTextEntry={secureTextEntry}
              withPass
              handleToggleSecurity={handleToggleSecurity}
            />
          </View>
          <Button
            title='Register'
            onPress={handleLogin}
            configTheme={configTheme}
            width='60%'
            height={50}
            marginTop={50}
            disabled={!form.name || !form.lastname || !form.email || !form.age || !form.password || !form.confirmPassword}
          />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default Register;
