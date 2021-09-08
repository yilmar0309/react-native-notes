import React, { forwardRef, useEffect, useRef, useState } from 'react';
import { Animated, KeyboardTypeOptions, Pressable, ReturnKeyTypeOptions, Text, TextInput as TIR, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { ConfigEntity } from '@hooks/useConfigTheme';

import useStyles from './styles';

interface Props {
  value: string;
  label: string;
  name: string;
  keyboardType?: KeyboardTypeOptions;
  returnKeyType?: ReturnKeyTypeOptions;
  error: boolean;
  secureTextEntry?: boolean;
  withPass?: boolean;
  autoFocus?: boolean;
  ref?: any;
  marginVerticalContainer?: number | string;
  maxLength?: number;
  numberOfLines?: number;
  multiline?: boolean;
  onChangeText: (key: string, text: string) => void;
  onSubmitEditing?: () => void;
  handleToggleSecurity?: () => void;
  configTheme: ConfigEntity;
}

const TextInput: React.FC<Props> = forwardRef((props, ref: any) => {
  const {
    marginVerticalContainer,
    value,
    label,
    error,
    name,
    withPass,
    secureTextEntry,
    onChangeText,
    configTheme,
    onSubmitEditing,
    handleToggleSecurity,
  } = props;
  const styles = useStyles(configTheme);

  const animatedIsFocused = useRef(new Animated.Value(0)).current;
  const animated = useRef(new Animated.Value(0)).current;

  const [lineTextInput, setLineTextInput] = useState(false)
  const [isFocused, setIsFocused] = useState(false)

  useEffect(() => {
    Animated.timing(animatedIsFocused, {
      duration: 400,
      toValue: isFocused ? 1 : 0,
      useNativeDriver: false,
    }).start();
    Animated.timing(animated, {
      duration: 400,
      toValue: isFocused ? 0 : 1,
      useNativeDriver: false,
    }).start();
  }, [isFocused])

  const handleFocus = () => {
    setIsFocused(true)
    setLineTextInput(true)
  }
  const handleBlur = () => {
    setIsFocused(false)
    setLineTextInput(false)
  }

  const getLabelStyle = () => ({
    bottom: animatedIsFocused.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 5],
    }),
    color: error && !value ? '#ff0000' : configTheme.textPrimary,
    fontSize: isFocused && value ? 12 : !isFocused && value ? 12 : animatedIsFocused.interpolate({
      inputRange: [0, 1],
      outputRange: [16, 12],
    }),
    left: 0,
    top: isFocused && value ? 0 : !isFocused && value ? 0 : animatedIsFocused.interpolate({
      inputRange: [0, 1],
      outputRange: [25, 0],
    }),
    marginLeft: 0,
  });

  const getStylesBorderWithFocus = ({
    width: animatedIsFocused.interpolate({
      inputRange: [0, 1],
      outputRange: ['0%', lineTextInput ? '100%' : '0%'],
    }),
    height: animatedIsFocused.interpolate({
      inputRange: [0, 1],
      outputRange: [1, 2],
    }),
    backgroundColor: animatedIsFocused.interpolate({
      inputRange: [0, 1],
      outputRange: ['white', isFocused ? configTheme.secondary : '#606060'],
    }),
    zIndex: 999,
  })

  const getStylesBorderWith = ({
    width: '100%',
    height: 1,
    backgroundColor: '#606060',
  })

  const onChangeTextInput = (text: string) => onChangeText(name, text);

  const errorHandle = () => null;

  return (
    <View style={[styles.container, { marginVertical: marginVerticalContainer || 10 }]}>
      <Animated.Text style={[styles.title, getLabelStyle()]}>
        {label}
      </Animated.Text>
      <TIR
        {...props}
        onSubmitEditing={onSubmitEditing || errorHandle}
        ref={ref}
        style={styles.containerInput}
        onBlur={handleBlur}
        onFocus={handleFocus}
        onChangeText={onChangeTextInput}
      />
      {withPass && (
        <Pressable 
          onPress={handleToggleSecurity}
          style={({ pressed }) => [
            {
              opacity: pressed ? 0.5 : 1,
              position: 'absolute',
              right: 0,
              bottom: 0,
            }
          ]}
        >
          <MaterialCommunityIcons name={secureTextEntry ? 'eye' : 'eye-off'} color='black' size={30} />
        </Pressable>
      )}
      {error && name === 'email' && value ?
        <Text style={styles.textRequired}>Email no valido</Text>
        : null}
      {error && !value ?
        <Text style={styles.textRequired}>Campo requerido</Text>
        : null}
      <View style={styles.containerSeparator}>
        <Animated.View style={[styles.separator, getStylesBorderWithFocus]} />
        <Animated.View style={[styles.separator, getStylesBorderWith]} />
      </View>
    </View>
  )
})

export default TextInput;
