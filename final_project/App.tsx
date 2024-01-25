import { NavigationContainer } from "@react-navigation/native";
import AppTabNavigator from "./src/navigation/AppTabNavigator";
import { AuthProvider } from "./src/contexts/AuthContext";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

import { useState } from "react";

// Function to load custom font
const fetchFonts = () => {
  return Font.loadAsync({
    "Hiatus": require("./assets/fonts/Hiatus.ttf"),
    // You can add more font weights or styles if needed
  });
};

export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={(error: any) => console.error(error)}
      />
    );
  }
  return (
    <AuthProvider>
      <NavigationContainer>
        <AppTabNavigator />
      </NavigationContainer>
    </AuthProvider>
  );
}
