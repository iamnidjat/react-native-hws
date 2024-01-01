import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import RouteNavigator from './navigation/index';
import { AuthProvider } from './src/contexts/AuthContext';

export default function App() {
  return (

    <AuthProvider>
      <NavigationContainer>
        <RouteNavigator/>
      </NavigationContainer>
    </AuthProvider>
  );
}
