import { TextProps, TouchableOpacityProps } from 'react-native';
import styled from 'styled-components/native';
import { windowHeight, windowWidth } from '../../utils/Dimensions';

export const Container = styled.TouchableOpacity<TouchableOpacityProps>`
    margin-top: 10px;
    width: ${windowWidth / 2 + 'px'};
    height: ${windowHeight / 15 + 'px'};
    background-color: #6646ee;
    padding: 10px;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
`;

export const Text = styled.Text<TextProps>`
    font-size: 28px;
    color: white;
`;
