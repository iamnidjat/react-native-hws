import { NavigationContainer } from '@react-navigation/native';
import RouteNavigator from './navigation/index.js';

export default function App() {
  return (
    <NavigationContainer>
      <RouteNavigator/>
    </NavigationContainer>
  );
}