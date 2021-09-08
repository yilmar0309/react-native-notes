import React, { useEffect, useState } from 'react';
import { Pressable, Text } from 'react-native';
import { fromJS, Map as ImmutableMap } from 'immutable';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';

import { Props, SlicesHome } from '../../navigation/interfaceInject'
import { SliceStateNote } from '@presenter/io/noteSlice';

import List from '@components/List/List';
import ActionButton from '@components/ActionButton/ActionButton';

import useStyles from './styles';

const Home: React.FC<Props & SlicesHome> = (props) => {
  const { configTheme, navigation } = props;
  const styles = useStyles(configTheme);
  const dispatch = useDispatch()
  const notes = useSelector(({ note } :  { note: SliceStateNote }) => note.data);

  const [data, setData] = useState<any>(fromJS([]));
  const [loadingRefresh, setLoadingRefresh] = useState(false)

  useEffect(() => {
    async function funAsync() {
      await dispatch(props.getAllNoteRedux())
    }
    funAsync()
  }, [])

  useEffect(() => {
    if (notes && notes.length > 0) {
      setData(fromJS(notes));
    }
  }, [notes])

  const renderItem = ({ item }: { item: ImmutableMap<string, any> }) => (
    <Pressable onPress={handleGoToNoteDetail(item)} style={styles.card}>
      <Text style={styles.title}>{item.get('title')}</Text>
      <Text style={styles.text}>{item.get('note')}</Text>
    </Pressable>
  )

  const onRefresh = async () => {
    try {
      setLoadingRefresh(true);
      await dispatch(props.getAllNoteRedux())
      setLoadingRefresh(false);
    } catch (error) {
      setLoadingRefresh(false);
    }
  }

  const handleGoToNoteDetail = (item: ImmutableMap<string, any>) => () => navigation.navigate('NoteDetail', {item: item.toJS()})
  const handleGoToCreateNote = () => navigation.navigate('CreateNote')
  
  return (
    <SafeAreaView style={styles.container}>
      <List 
        dataSource={data}
        extraData={fromJS(data)}
        renderItem={renderItem}
        refreshing={loadingRefresh}
        onRefresh={onRefresh}
        configTheme={configTheme} 
      />
      <ActionButton 
        buttonColor={configTheme.primary} 
        onPress={handleGoToCreateNote}
        configTheme={configTheme}
      />
    </SafeAreaView>
  )
}

export default Home;
