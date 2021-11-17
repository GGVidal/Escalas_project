import React from 'react';
import {KeyboardType} from 'react-native';
import {TextInput} from './styles';

type Props = {
  labelValue: string;
  placeholderText: string;
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
}: Props) {
  return (
    <TextInput
      value={labelValue}
      numberOfLines={1}
      placeholder={placeholderText}
      placeholderTextColor="#666"
      onChangeText={text => onChangeText!(text)}
      keyboardType={keyboardType}
      autoCorrect={autoCorrect}
      secureTextEntry={secureTextEntry}
    />
  );
}
