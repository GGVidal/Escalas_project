import React, { useState, useContext } from 'react';
import FormButton from '../../components/FormButton/FormButton';
import FormInput from '../../components/FormInput/FormInput';
import { AuthContext } from '../../navigation/AuthProvider';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStack } from '../../navigation/routesTypes';
import { useNavigation } from '@react-navigation/native';
import { ErrorsLogin } from '../../constants/ErrorMessages';
import { Container, Text } from './styles';
import SignUpButton from './components/SignUpButton';
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
    const { login, loading } = useContext(AuthContext);
    const navigation = useNavigation<Props>();

    const validateLogin = async () => {
        try {
            const { navigate } = navigation;
            await login!(email, password);
            if (!loading) {
                navigate('HomeScreen', { screen: 'Home' });
            }
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
        <Container>
            <Text isTitle>Bem-vindo ao app de escalas!</Text>
            <FormInput
                labelValue={email}
                placeholderText="E-mail"
                onChangeText={(userEmail) => setEmail(userEmail)}
                keyboardType="email-address"
                autoCorrect={false}
            />
            {validateError === 'INVALID_EMAIL' ||
            validateError === 'USER_DISABLED' ||
            validateError === 'USER_NOT_FOUND' ? (
                <Text hasError>{ErrorsLogin[validateError]}</Text>
            ) : null}
            <FormInput
                labelValue={password}
                placeholderText="Senha2"
                onChangeText={(userPassword) => setPassword(userPassword)}
                secureTextEntry={true}
            />
            {validateError === 'WRONG_PASSWORD' && (
                <Text hasError>{ErrorsLogin[validateError]}</Text>
            )}
            <FormButton buttonTitle="Login" onPress={() => validateLogin()} />
            <SignUpButton
                onPress={() =>
                    navigation.navigate('Auth', { screen: 'Signup' })
                }
            >
                Novo Usuário? Cadastre-se aqui
            </SignUpButton>
        </Container>
    );
}
