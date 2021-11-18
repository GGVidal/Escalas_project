import React, {useState, useContext} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import FormButton from '../components/FormButton/FormButton';
import FormInput from '../components/FormInput/FormInput';
import {AuthContext} from '../navigation/AuthProvider';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackHome} from '../navigation/routesTypes';
import {useNavigation} from '@react-navigation/native';
type Props = StackNavigationProp<RootStackHome, 'Login'>;

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {login} = useContext(AuthContext);
  const navigation = useNavigation<Props>();
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
      <FormInput
        labelValue={password}
        placeholderText="Senha"
        onChangeText={userPassword => setPassword(userPassword)}
        secureTextEntry={true}
      />
      <FormButton buttonTitle="Login" onPress={() => login!(email, password)} />
      <TouchableOpacity
        style={styles.navButton}
        onPress={() => navigation.navigate('Signup')}>
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
