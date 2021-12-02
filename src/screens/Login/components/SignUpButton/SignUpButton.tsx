import React, {ReactNode} from 'react';
import {Container, Text} from './styles';

type Props = {
  children: ReactNode;
  onPress: () => void;
};
export default function SignUpButton({onPress, children}: Props) {
  return (
    <Container onPress={onPress}>
      <Text>{children}</Text>
    </Container>
  );
}
