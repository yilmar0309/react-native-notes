import React, { createRef, useState } from 'react';
import { Alert, ScrollView, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Props, SliceCreateNote } from '../../navigation/interfaceInject'

import { toggleSpinner } from '@presenter/io/spinnerSlice';

import Button from '@components/Button/Button';
import TextInput from '@components/TextInput/TextInput';

import useStyles from './styles';

interface State {
  title: string;
  note: string;
}

const CreateNote: React.FC<Props & SliceCreateNote> = (props) => {
  const { configTheme, navigateWithReset } = props;
  const styles = useStyles(configTheme);
  const dispatch = useDispatch();
  const refNote: HTMLInputElement | unknown | any = createRef();

  const [form, setForm] = useState<State>({
    title: '',
    note: ''
  });

  const handleOnFocusNote = () => {
    if (refNote) {
      refNote.current.focus()
    }
  }
  const handleSaveNote = async () => {
    try {
      await dispatch(toggleSpinner())
      await dispatch(props.createNoteReudux(form))
      navigateWithReset('TabsNavigation')
      await dispatch(toggleSpinner())
    } catch (error) {
      await dispatch(toggleSpinner())
      Alert.alert('Sorry, an error ocurred');
    }
  }

  const onChangeValue = (key: string, text: string) => setForm({ ...form, [key]: text })

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentInsetAdjustmentBehavior="automatic" keyboardShouldPersistTaps='always'>
        <View style={styles.boxInput}>
          <TextInput
            autoFocus
            value={form.title}
            name='title'
            error={false}
            maxLength={50}
            onSubmitEditing={handleOnFocusNote}
            onChangeText={onChangeValue}
            label='Type here title'
            configTheme={configTheme}
          />
        </View>
        <View style={styles.boxInput}>
          <TextInput
            ref={refNote}
            value={form.note}
            name='note'
            error={false}
            maxLength={500}
            onChangeText={onChangeValue}
            label='Type here note'
            numberOfLines={5}
            multiline
            configTheme={configTheme}
          />
        </View>
        <Button
          title='Save'
          onPress={handleSaveNote}
          configTheme={configTheme}
          width='60%'
          height={50}
          marginTop={50}
          disabled={!form.note || !form.title}
        />
      </ScrollView>
    </SafeAreaView>
  )
}

export default CreateNote;
