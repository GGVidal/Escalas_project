import React, {useState, useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import FormButton from '../components/FormButton/FormButton';
import FormInput from '../components/FormInput/FormInput';
import {AuthContext} from '../navigation/AuthProvider';

export default function SignupScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const {register} = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Crie sua conta</Text>
      <FormInput
        labelValue={email}
        placeholderText="E-mail"
        onChangeText={userEmail => setEmail(userEmail)}
        keyboardType="email-address"
        autoCorrect={false}
      />
      <FormInput
        labelValue={username}
        placeholderText="Nome"
        onChangeText={user => setUsername(user)}
        autoCorrect={false}
      />
      <FormInput
        labelValue={password}
        placeholderText="Senha"
        onChangeText={userPassword => setPassword(userPassword)}
        secureTextEntry={true}
      />
      <FormButton
        buttonTitle="Registrar-se"
        onPress={() => register!(email, password, username)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    marginBottom: 10,
  },
});
