import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../../screens/Home/Home';
import {RootHomeStack} from './routeTypes';
const Stack = createStackNavigator<RootHomeStack>();

export default function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerLeft: () => null}}
      />
    </Stack.Navigator>
  );
}
