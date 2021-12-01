import React, {createContext, useState, ReactNode} from 'react';
import auth from '@react-native-firebase/auth';
import {IAuthContext} from './typings';
import {CollectionNames} from '../constants/FirestoreCollections';
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
  const [loading, setLoading] = useState<boolean>();
  return (
    <AuthContext.Provider
      value={{
        userAuth,
        setUserAuth,
        login: async (email: string, password: string) => {
          setLoading(true);
          try {
            await auth().signInWithEmailAndPassword(email, password);
            setLoading(false);
          } catch (e) {
            console.log(e);
            setLoading(false);
            throw e;
          }
        },
        register: async (email, password, username) => {
          try {
            setLoading(true);
            const createdUser = await auth().createUserWithEmailAndPassword(
              email,
              password,
            );
            auth().onAuthStateChanged(user => {
              if (user) {
                user.updateProfile({displayName: username}).then();
              }
            });
            if (createdUser) {
              const {email: userEmail, uid: userUid} = createdUser.user;
              const data = await getCollection(CollectionNames.USERS);
              const userExists = data?.docs.find(
                user => user.data().email === userEmail,
              );
              if (!userExists) {
                await addValueCollection(CollectionNames.USERS, {
                  email: userEmail,
                  uid: userUid,
                  username,
                });
                setLoading(false);
              }
            }
          } catch (error: any) {
            console.log(error);
            setLoading(false);
            throw error;
          }
        },
        logout: async () => {
          try {
            await auth().signOut();
          } catch (e) {
            console.error(e);
          }
        },
        loading,
        setLoading,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
