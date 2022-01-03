import React, { ReactNode } from 'react';
import { KeyboardType, Pressable } from 'react-native';
import { TextInput, ContainerInput } from './styles';

type Props = {
    labelValue: string;
    onChangeText?: (userEmail: any) => void;
    keyboardType?: KeyboardType;
    autoCorrect?: boolean;
    secureTextEntry?: boolean;
    traillingIcon?: ReactNode;
};

export default function FormInput({
    labelValue,
    onChangeText,
    keyboardType,
    autoCorrect,
    secureTextEntry,
    traillingIcon
}: Props) {
    return (
        <ContainerInput>
            <TextInput
                value={labelValue}
                autoCapitalize="none"
                numberOfLines={1}
                placeholderTextColor="#666"
                onChangeText={(text) => onChangeText!(text)}
                keyboardType={keyboardType}
                autoCorrect={autoCorrect}
                secureTextEntry={secureTextEntry}
            />
            <Pressable>{traillingIcon}</Pressable>
        </ContainerInput>
    );
}
