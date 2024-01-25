import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import RouteNavigator from "./src/navigation/index";
import { Portal, PortalHost, PortalProvider } from '@gorhom/portal';
import { DatabaseContextProvider } from "./src/contexts/DatabaseContext";

export default function App() {
  return (
    <DatabaseContextProvider>
      <NavigationContainer>
        <RouteNavigator />
      </NavigationContainer>
    </DatabaseContextProvider>
  );
}
