import { TextProps, ViewProps } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity<ViewProps>`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: #f5f5f1;
`;

export const Text = styled.Text<TextProps>`
    font-size: 20px;
    color: #333333;
`;
