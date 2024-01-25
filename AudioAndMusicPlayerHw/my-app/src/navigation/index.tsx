import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MusicPlayerScreen from "../screens/MusicPlayerScreen";
import AudioPlayerScreen from "../screens/AudioPlayerScreen";

const Stack = createNativeStackNavigator();

const RouteNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="AudioPlayer">
      <Stack.Screen name="MusicPlayer" component={MusicPlayerScreen} />
      <Stack.Screen name="AudioPlayer" component={AudioPlayerScreen} />
    </Stack.Navigator>
  );
};

export default RouteNavigator;
