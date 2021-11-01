import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Signup from '../screens/SignUp';
import Login from '../screens/Login';
import {RootStackHome} from './routesTypes';
const Stack = createStackNavigator<RootStackHome>();

export default function AuthStack() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={Login}
        options={{header: () => null}}
      />
      <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>
  );
}
