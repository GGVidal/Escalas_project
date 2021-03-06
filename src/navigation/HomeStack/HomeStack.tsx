import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '@screens/Home';
import { RootHomeStack } from './routeTypes';
const Stack = createStackNavigator<RootHomeStack>();

export default function HomeStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                options={{ headerLeft: () => null }}
                name="Home"
                component={HomeScreen}
            />
        </Stack.Navigator>
    );
}
