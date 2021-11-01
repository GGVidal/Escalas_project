import React, {createContext, useState, ReactNode} from 'react';
import auth from '@react-native-firebase/auth';
import {IAuthContext} from './typings';

/**
 * This provider is created
 * to access user in whole app
 */
type Props = {
  children: ReactNode;
};
export const AuthContext = createContext<IAuthContext>({});

export const AuthProvider = ({children}: Props) => {
  const [userAuth, setUserAuth] = useState<Object>();

  return (
    <AuthContext.Provider
      value={{
        userAuth,
        setUserAuth,
        login: async (email: string, password: string) => {
          try {
            await auth().signInWithEmailAndPassword(email, password);
          } catch (e) {
            console.log(e);
          }
        },
        register: async (email: string, password: string) => {
          try {
            await auth().createUserWithEmailAndPassword(email, password);
          } catch (e) {
            console.log(e);
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
