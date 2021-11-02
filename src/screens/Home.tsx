import React, {useContext, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import FormButton from '../components/FormButton';
import {AuthContext} from '../navigation/AuthProvider';
import firestore from '@react-native-firebase/firestore';

export default function HomeScreen() {
  const {userAuth, logout} = useContext(AuthContext);
  useEffect(() => {
    const firestoreSignUp = async () => {
      const {email, uid} = userAuth;
      const data = await usersCollection();
      const userExists = data.docs.find(user => user.data().email === email);
      if (!userExists) {
        firestore()
          .collection('Users')
          .add({
            email,
            uid,
          })
          .then(() => {
            console.log('User added!');
          });
      }
    };
    const usersCollection = async () => {
      const data = await firestore().collection('Users').get();
      return data;
    };
    firestoreSignUp();
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome user {userAuth?.uid}</Text>
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
