import React from 'react';
import {StyleSheet} from 'react-native';
import {Container, Text} from './styles';

type Props = {
  buttonTitle: String;
  onPress: () => void;
};

export default function FormButton({buttonTitle, onPress}: Props) {
  return (
    <Container onPress={onPress}>
      <Text style={styles.buttonText}>{buttonTitle}</Text>
    </Container>
  );
}

const styles = StyleSheet.create({
  buttonText: {
    fontSize: 28,
    color: '#ffffff',
  },
});
