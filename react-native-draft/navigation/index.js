import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/home.js";
import ProductsScreen from "../screens/products.js";
import DetailsScreen from "../screens/details.js";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeIcon from "../components/icons/HomeIcon.js";
import CartIcon from "../components/icons/CartIcon.js";
import HeartIcon from "../components/icons/HeartIcon.js";
import UserIcon from "../components/icons/UserIcon.js";
import todoScreen from "../screens/TodoScreen.js";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const RouteNavigator = () => {
  return (
    // <Stack.Navigator initialRouteName="Details">
    //     <Stack.Screen name="Home" component={HomeScreen} />
    //     <Stack.Screen name="Details" component={DetailsScreen} />
    //     <Stack.Screen name="Products" component={ProductsScreen} />
    // </Stack.Navigator>
    <Tab.Navigator initialRouteName="Details">
      <Tab.Screen
        options={{ tabBarIcon: HomeIcon }}
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{ tabBarIcon: CartIcon }}
        name="Details"
        component={DetailsScreen}
      />
      <Tab.Screen
        options={{ tabBarIcon: HeartIcon }}
        name="Products"
        component={ProductsScreen}
      />
      <Tab.Screen
        options={{ tabBarIcon: UserIcon, tabBarActiveTintColor: "#e91e63" }}
        name="ToDo"
        component={todoScreen}
      />
    </Tab.Navigator>
  );
};

export default RouteNavigator;
