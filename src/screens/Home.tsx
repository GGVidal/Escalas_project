import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import FormButton from '../components/FormButton/FormButton';
import {AuthContext} from '../navigation/AuthProvider';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStack} from '../navigation/routesTypes';
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
    <View style={styles.container}>
      <Text style={styles.text}>Welcome user {userAuth?.displayName}</Text>
      <FormButton buttonTitle="Logout" onPress={onLogout} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f1',
  },
  text: {
    fontSize: 20,
    color: '#333333',
  },
});
