import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import FavouritesScreen from "../screens/FavouritesScreen";
import TicketsScreen from "../screens/TicketsScreen";
import BaseScreen from "../screens/BaseScreen";
import RegistrationPage from "../screens/RegistrationScreen";
import LoginScreen from "../screens/LoginScreen";
import BookNowScreen from "../screens/BookNowScreen";

const Stack = createNativeStackNavigator();

const AppStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Base">
      <Stack.Screen name="Base" component={BaseScreen} />
      <Stack.Screen name="Registration" component={RegistrationPage} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="BookNow" component={BookNowScreen} />
    </Stack.Navigator>
  );
};

export default AppStackNavigator;
