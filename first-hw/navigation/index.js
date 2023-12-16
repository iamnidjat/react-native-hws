import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FrontPageScreen from '../src/screens/FrontPageScreen';
import LoginScreen from '../src/screens/LoginScreen';
import RegistrationScreen from '../src/screens/RegistrationScreen';

const Stack = createNativeStackNavigator();

const RouteNavigator = () => {
    return (
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen name='Home' component={FrontPageScreen}/>
            <Stack.Screen name='Login' component={LoginScreen}/>
            <Stack.Screen name='Registration' component={RegistrationScreen}/>
        </Stack.Navigator>
    );
};

export default RouteNavigator;