import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import FavouritesScreen from "../screens/FavouritesScreen";
import TicketsScreen from "../screens/TicketsScreen";
import BaseScreen from "../screens/BaseScreen";
import AppStackNavigator from "./AppStackNavigator";
import TicketIcon from "../components/icons/TicketsIcon";
import ProfileIcon from "../components/icons/ProfileIcon";
import HeartIcon from "../components/icons/HeartIcon";
import HomeIcon from "../components/icons/HomeIcon";
import WhiteHeartIcon from "../components/icons/WhiteHeartIcon";

const Tab = createBottomTabNavigator();

const AppTabNavigator = () => {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen name="Stack" component={AppStackNavigator} />
      <Tab.Screen
         options={{ tabBarIcon: HomeIcon }}
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
         options={{ tabBarIcon: TicketIcon }}
        name="Tickets"
        component={TicketsScreen}
      />
      <Tab.Screen
         options={{ tabBarIcon: WhiteHeartIcon }}
        name="Favourites"
        component={FavouritesScreen}
      />
      <Tab.Screen
         options={{ tabBarIcon: ProfileIcon }}
        name="Profile"
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
};

export default AppTabNavigator;
