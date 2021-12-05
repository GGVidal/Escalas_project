import { TextProps, TouchableOpacityProps } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity<TouchableOpacityProps>`
    margin-top: 15px;
`;

export const Text = styled.Text<TextProps>`
    font-size: 20px;
    color: #6646ee;
`;
