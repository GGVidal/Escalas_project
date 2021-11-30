import React, {useState, useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import FormButton from '../components/FormButton/FormButton';
import FormInput from '../components/FormInput/FormInput';
import {ErrorsSignup} from '../constants/ErrorMessages';
import {AuthContext} from '../navigation/AuthProvider';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStack} from '../navigation/routesTypes';
import {useNavigation} from '@react-navigation/native';
type Props = StackNavigationProp<RootStack, 'Auth'>;
type ValidationErrors =
  | 'EMAIL_IN_USE'
  | 'INVALID_EMAIL'
  | 'WEAK_PASSWORD'
  | null;

export default function SignupScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [validateError, setValidateError] = useState<ValidationErrors>(null);
  const {register, loading} = useContext(AuthContext);
  const navigation = useNavigation<Props>();
  const validateSignIn = async () => {
    try {
      await register(email, password, username);
      if (!loading) {
        await navigation.navigate('Auth', {screen: 'Login'});
      }
    } catch (error: any) {
      if (error.code === 'auth/email-already-in-use') {
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
        <Text>{ErrorsSignup[validateError]}</Text>
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
        <Text>{ErrorsSignup[validateError]}</Text>
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
