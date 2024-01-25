import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import RouteNavigator from "./src/navigation/index";

export default function App() {
  return (
    <NavigationContainer>
      <RouteNavigator />
    </NavigationContainer>
  );
}
