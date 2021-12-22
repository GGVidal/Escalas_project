import { TextProps, ViewProps } from 'react-native';
import styled from 'styled-components/native';
import {
    Container as ContainerDefault,
    Text as TextDefault,
    IText
} from '../styles';

export const Container = styled(ContainerDefault)<ViewProps>`
    margin-bottom: 70px;
    background-color: white;
`;

export const Text = styled(TextDefault)<IText>`
    align-self: center;
    margin-top: 30px;
`;
