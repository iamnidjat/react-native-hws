import MainScreen from "./src/screens/MainScreen";
import { StyleSheet, Text, View } from 'react-native'

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <MainScreen />
    </View>
  );
}
