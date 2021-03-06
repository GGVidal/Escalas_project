import React, { useState, useContext } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FormButton from '@components/FormButton/FormButton';
import FormInput from '@components/FormInput/FormInput';
import { Label } from '@components/Label/styles';
import { ErrorsSignup } from '@constants/ErrorMessages';
import { AuthContext } from '@navigation/AuthProvider';
import { Container, Text } from './styles';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStack } from '@navigation/routesTypes';
import { useNavigation } from '@react-navigation/native';
import Loader from '@components/Loader/Loader';
import { View } from 'react-native';
import { useTogglePasswordVisibility } from '@utils/hooks';

type Props = StackNavigationProp<RootStack, 'Auth'>;
type ValidationErrors =
    | 'EMAIL_IN_USE'
    | 'INVALID_EMAIL'
    | 'WEAK_PASSWORD'
    | null;

export default function SignupScreen() {
    const { passwordVisibility, rightIcon, handlePasswordVisibility } =
        useTogglePasswordVisibility();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [validateError, setValidateError] = useState<ValidationErrors>(null);
    const { register, loading } = useContext(AuthContext);
    const navigation = useNavigation<Props>();
    const validateSignIn = async () => {
        try {
            await register(email, password, username);
            if (!loading) {
                await navigation.navigate('Auth', { screen: 'Login' });
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
        <>
            <Container>
                <View>
                    <Label>Email</Label>
                    <FormInput
                        labelValue={email}
                        onChangeText={(userEmail) => setEmail(userEmail)}
                        keyboardType="email-address"
                        autoCorrect={false}
                    />
                    {validateError === 'EMAIL_IN_USE' ||
                    validateError === 'INVALID_EMAIL' ? (
                        <Text hasError>{ErrorsSignup[validateError]}</Text>
                    ) : null}
                </View>
                <View>
                    <Label>Usu??rio</Label>
                    <FormInput
                        labelValue={username}
                        onChangeText={(user) => setUsername(user)}
                        autoCorrect={false}
                        secureTextEntry={false}
                    />
                </View>

                <View>
                    <Label>Senha</Label>
                    <FormInput
                        labelValue={password}
                        onChangeText={(userPassword) =>
                            setPassword(userPassword)
                        }
                        secureTextEntry={passwordVisibility}
                        traillingIcon={<Icon name={rightIcon} size={28} />}
                        onPressTraillingIcon={handlePasswordVisibility}
                    />
                    {validateError === 'WEAK_PASSWORD' && (
                        <Text hasError>{ErrorsSignup[validateError]}</Text>
                    )}
                </View>
                <FormButton
                    buttonTitle="Criar conta"
                    onPress={() => validateSignIn()}
                />
                {loading && <Loader loading={loading} />}
            </Container>
        </>
    );
}
