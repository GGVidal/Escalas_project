import {ViewProps} from 'react-native';
import styled from 'styled-components/native';
import {
  Container as ContainerDefault,
  IText,
  Text as TextDefault,
} from '../styles';

export const Container = styled(ContainerDefault)<ViewProps>``;

export const Text = styled(TextDefault)<IText>``;
