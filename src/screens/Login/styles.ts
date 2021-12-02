import {TextProps, ViewProps} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View<ViewProps>`
  background-color: #f5f5f5;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.Text<TextProps>`
  font-size: 24px;
  margin-bottom: 10px;
`;
