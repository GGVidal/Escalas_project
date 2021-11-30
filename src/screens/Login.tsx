import React, {useState, useContext} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import FormButton from '../components/FormButton/FormButton';
import FormInput from '../components/FormInput/FormInput';
import {AuthContext} from '../navigation/AuthProvider';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStack} from '../navigation/routesTypes';
import {useNavigation} from '@react-navigation/native';
import {ErrorsLogin} from '../constants/ErrorMessages';
type Props = StackNavigationProp<RootStack, 'Auth'>;
type ValidationErrors =
  | 'USER_DISABLED'
  | 'INVALID_EMAIL'
  | 'USER_NOT_FOUND'
  | 'WRONG_PASSWORD'
  | null;

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [validateError, setValidateError] = useState<ValidationErrors>(null);
  const {login} = useContext(AuthContext);
  const navigation = useNavigation<Props>();

  const validateLogin = async () => {
    try {
      await login!(email, password);
    } catch (error: any) {
      if (error.code === 'auth/invalid-email') {
        setValidateError('INVALID_EMAIL');
      }
      if (error.code === 'auth/user-disabled') {
        setValidateError('USER_DISABLED');
      }
      if (error.code === 'auth/user-not-found') {
        setValidateError('USER_NOT_FOUND');
      }
      if (error.code === 'auth/wrong-password') {
        setValidateError('WRONG_PASSWORD');
      }
      console.log(error);
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bem-vindo ao app de escalas!</Text>
      <FormInput
        labelValue={email}
        placeholderText="E-mail"
        onChangeText={userEmail => setEmail(userEmail)}
        keyboardType="email-address"
        autoCorrect={false}
      />
      {validateError === 'INVALID_EMAIL' ||
      validateError === 'USER_DISABLED' ||
      validateError === 'USER_NOT_FOUND' ? (
        <Text>{ErrorsLogin[validateError]}</Text>
      ) : null}
      <FormInput
        labelValue={password}
        placeholderText="Senha"
        onChangeText={userPassword => setPassword(userPassword)}
        secureTextEntry={true}
      />
      {validateError === 'WRONG_PASSWORD' && (
        <Text>{ErrorsLogin[validateError]}</Text>
      )}
      <FormButton buttonTitle="Login" onPress={() => validateLogin()} />
      <TouchableOpacity
        style={styles.navButton}
        onPress={() => navigation.navigate('Auth', {screen: 'Signup'})}>
        <Text style={styles.navButtonText}>Novo Usuário? Cadastre-se aqui</Text>
      </TouchableOpacity>
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
  navButton: {
    marginTop: 15,
  },
  navButtonText: {
    fontSize: 20,
    color: '#6646ee',
  },
});
