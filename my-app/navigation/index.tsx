import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RegistrationPage from '../src/screens/RegistrationPage';
import LoginPage from '../src/screens/LoginPage';

const Stack = createNativeStackNavigator();

const RouteNavigator = () => {
    return (
        <Stack.Navigator initialRouteName='Registration'>
            <Stack.Screen name='Registration' component={RegistrationPage}/>
            <Stack.Screen name='Login' component={LoginPage}/>
        </Stack.Navigator>
    );
};

export default RouteNavigator;