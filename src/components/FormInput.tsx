import React from 'react';
import {KeyboardType, StyleSheet, TextInput} from 'react-native';
import {windowHeight, windowWidth} from '../utils/Dimensions';

type Props = {
  labelValue: string;
  placeholderText: string;
  rest?: Object;
  onChangeText?: (userEmail: any) => void;
  keyboardType?: KeyboardType;
  autoCorrect?: boolean;
  secureTextEntry?: boolean;
};

export default function FormInput({
  labelValue,
  placeholderText,
  onChangeText,
  keyboardType,
  autoCorrect,
  secureTextEntry,
  ...rest
}: Props) {
  return (
    <TextInput
      value={labelValue}
      style={styles.input}
      numberOfLines={1}
      placeholder={placeholderText}
      placeholderTextColor="#666"
      onChangeText={text => onChangeText!(text)}
      keyboardType={keyboardType}
      autoCorrect={autoCorrect}
      secureTextEntry={secureTextEntry}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    padding: 10,
    marginTop: 5,
    marginBottom: 10,
    width: windowWidth / 1.5,
    height: windowHeight / 15,
    fontSize: 16,
    borderRadius: 8,
    borderWidth: 1,
  },
});
