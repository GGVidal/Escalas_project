import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import FormButton from '../components/FormButton/FormButton';
import {AuthContext} from '../navigation/AuthProvider';

export default function HomeScreen() {
  const {userAuth, logout} = useContext(AuthContext);
  console.log('GG user', userAuth);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome user {userAuth?.displayName}</Text>
      <FormButton buttonTitle="Logout" onPress={logout!} />
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
