import React, {useState, useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import FormButton from '../components/FormButton/FormButton';
import FormInput from '../components/FormInput/FormInput';
import {ErrosLogin} from '../constants/ErrorMessages';
import {AuthContext} from '../navigation/AuthProvider';
import {validateUsername} from '../utils/Validations';
type ValidationErros =
  | 'EMAIL_IN_USE'
  | 'INVALID_EMAIL'
  | 'WEAK_PASSWORD'
  | null;

export default function SignupScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [validateError, setValidateError] = useState<ValidationErros>(null);
  const {register} = useContext(AuthContext);

  const validateSignIn = async () => {
    try {
      const data = await validateUsername(username);
      console.log('GG', data);
      await register(email, password, username);
    } catch (error: any) {
      if (error.code === 'auth/email-already-in-use') {
        console.log('GG ENTROU AQUI2');
        setValidateError('EMAIL_IN_USE');
      }
      if (error.code === 'auth/invalid-email') {
        setValidateError('INVALID_EMAIL');
      }
      if (error.code === 'auth/weak-password') {
        setValidateError('WEAK_PASSWORD');
      }
    }
  };
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
      {validateError === 'EMAIL_IN_USE' || validateError === 'INVALID_EMAIL' ? (
        <Text>{ErrosLogin[validateError]}</Text>
      ) : null}
      <FormInput
        labelValue={username}
        placeholderText="Nome"
        onChangeText={user => setUsername(user)}
        autoCorrect={false}
        secureTextEntry={false}
      />
      <FormInput
        labelValue={password}
        placeholderText="Senha"
        onChangeText={userPassword => setPassword(userPassword)}
        secureTextEntry={true}
      />
      {validateError === 'WEAK_PASSWORD' && (
        <Text>{ErrosLogin[validateError]}</Text>
      )}
      <FormButton buttonTitle="Registrar-se" onPress={() => validateSignIn()} />
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
