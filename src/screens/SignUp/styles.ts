import {TextProps, ViewProps} from 'react-native';
import styled from 'styled-components/native';

interface IText extends TextProps {
  hasError?: boolean;
}

export const Container = styled.View<ViewProps>`
  background-color: #f5f5f5;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.Text<IText>`
  font-size: 18px;
  margin-bottom: 5px;
  color: ${({hasError}) => (hasError ? 'red' : 'white')}; ;
`;
