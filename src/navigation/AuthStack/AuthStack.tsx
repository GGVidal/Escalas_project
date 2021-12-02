import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Signup from '../../screens/SignUp';
import Login from '../../screens/Login/Login';
import {RootAuthStack} from './routeTypes';
const Stack = createStackNavigator<RootAuthStack>();

export default function AuthStack() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={Login}
        options={{header: () => null}}
      />
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{header: () => null}}
      />
    </Stack.Navigator>
  );
}
