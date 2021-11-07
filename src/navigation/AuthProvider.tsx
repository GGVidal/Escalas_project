import React, {createContext, useState, ReactNode} from 'react';
import auth from '@react-native-firebase/auth';
import {IAuthContext} from './typings';
import {addValueCollection, getCollection} from '../services/firestore';

/**
 * This provider is created
 * to access user in whole app
 */
type Props = {
  children: ReactNode;
};
export const AuthContext = createContext<IAuthContext>({});

export const AuthProvider = ({children}: Props) => {
  const [userAuth, setUserAuth] = useState<any>();

  return (
    <AuthContext.Provider
      value={{
        userAuth,
        setUserAuth,
        login: async (email: string, password: string) => {
          try {
            console.log('GABRIel auth', auth());
            await auth().signInWithEmailAndPassword(email, password);
          } catch (e) {
            console.log(e);
          }
        },
        register: async (email: string, password: string) => {
          try {
            const createdUser = await auth().createUserWithEmailAndPassword(
              email,
              password,
            );
            if (createdUser) {
              const {email: userEmail, uid: userUid} = createdUser.user;
              const data = await getCollection('Users');
              const userExists = data.docs.find(
                user => user.data().email === userEmail,
              );
              if (!userExists) {
                await addValueCollection('Users', {
                  email: userEmail,
                  uid: userUid,
                });
              }
            }
          } catch (e) {
            throw e;
          }
        },
        logout: async () => {
          try {
            await auth().signOut();
          } catch (e) {
            console.error(e);
          }
        },
      }}>
      {children}
    </AuthContext.Provider>
  );
};
