import React, {useContext} from 'react';
import {Container, Text} from './styles';
import FormButton from '../../components/FormButton/FormButton';
import {AuthContext} from '../../navigation/AuthProvider';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStack} from '../../navigation/routesTypes';
import {useNavigation} from '@react-navigation/native';

type Props = StackNavigationProp<RootStack, 'Auth'>;

export default function HomeScreen() {
  const {userAuth, logout} = useContext(AuthContext);
  const navigation = useNavigation<Props>();
  const {navigate} = navigation;
  const onLogout = async () => {
    await logout!();
    navigate('Auth', {screen: 'Login'});
  };
  return (
    <Container>
      <Text>Welcome user {userAuth?.displayName}</Text>
      <FormButton buttonTitle="Logout" onPress={onLogout} />
    </Container>
  );
}
