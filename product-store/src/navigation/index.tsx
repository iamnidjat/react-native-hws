import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import VegetablesScreen from '../screens/VegetablesScreen';
import CartScreen from '../screens/CartScreen';
import ProfileScreen from '../screens/ProfileScreen';
import CartIcon from '../components/icons/CartIcon';
import HeartIcon from '../components/icons/HeartIcon';
import GridIcon from '../components/icons/GridIcon';

const Tab = createBottomTabNavigator();

const RouteNavigator = () => {
    return (
        <Tab.Navigator initialRouteName="Vegetables">
        <Tab.Screen
          options={{ tabBarIcon: GridIcon, tabBarActiveTintColor: "#7203FF" }}
          name="Vegetables"
          component={VegetablesScreen}
        />
        <Tab.Screen
          options={{ tabBarIcon: CartIcon, tabBarActiveTintColor: "#7203FF" }}
          name="Cart"
          component={CartScreen}
        />
        <Tab.Screen
          options={{ tabBarIcon: HeartIcon, tabBarActiveTintColor: "#7203FF" }}
          name="Profile"
          component={ProfileScreen}
        />
      </Tab.Navigator>
    );
};

export default RouteNavigator;