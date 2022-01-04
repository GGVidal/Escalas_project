import React, { useContext, useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import { createStackNavigator } from '@react-navigation/stack';
import AuthStack from './AuthStack';
import HomeStack from './HomeStack';
import { AuthContext } from './AuthProvider';
import { RootStack } from './routesTypes';
const Stack = createStackNavigator<RootStack>();
export default function Routes() {
    const { setUserAuth } = useContext(AuthContext);
    const [loading, setLoading] = useState(true);
    const [initializing, setInitializing] = useState(true);

    // Handle user state changes
    function onAuthStateChanged(user: any) {
        setUserAuth!(user);
        if (initializing) {
            setInitializing(false);
        }
        setLoading(false);
    }

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
    });

    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Auth"
                screenOptions={{ headerShown: false }}
            >
                <Stack.Screen name="Auth" component={AuthStack} />
                <Stack.Screen name="HomeScreen" component={HomeStack} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
