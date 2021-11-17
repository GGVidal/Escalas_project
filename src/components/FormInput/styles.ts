import {TextInputProps} from 'react-native';
import styled from 'styled-components/native';
import {windowHeight, windowWidth} from '../../utils/Dimensions';

export const TextInput = styled.Text<TextInputProps>`
  padding: 10px;
  margin-top: 5px;
  margin-bottom: 10px;
  width: ${windowWidth / 1.5};
  height: ${windowHeight / 15};
  font-size: 16px;
  border-radius: 8px;
  border-width: 1px;
`;
