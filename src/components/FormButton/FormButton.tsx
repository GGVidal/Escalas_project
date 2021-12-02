import React from 'react';
import {Container, Text} from './styles';

type Props = {
  buttonTitle: String;
  onPress: () => void;
};

export default function FormButton({buttonTitle, onPress}: Props) {
  return (
    <Container onPress={onPress}>
      <Text>{buttonTitle}</Text>
    </Container>
  );
}
