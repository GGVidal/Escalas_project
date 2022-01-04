import { TextProps, TouchableOpacityProps } from 'react-native';
import styled from 'styled-components/native';
import { windowHeight, windowWidth } from '@utils/Dimensions';

export const Container = styled.TouchableOpacity<TouchableOpacityProps>`
    margin-top: 10px;
    width: ${windowWidth / 1.2 + 'px'};
    height: ${windowHeight / 14 + 'px'};
    background-color: #0959ec;
    padding: 15px;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
`;

export const Text = styled.Text<TextProps>`
    font-size: 20px;
    color: white;
    font-weight: bold;
`;
