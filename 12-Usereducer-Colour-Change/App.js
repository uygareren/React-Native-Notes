import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CoursesScreen from './src/screens/CoursesScreen';
import HomeScreen from './src/screens/HomeScreen';
import CoursesInformationScreen from './src/screens/CoursesInformationScreen';
import CounterScreen from './src/screens/CounterScreen';
import BoxScreen from './src/screens/BoxScreen';
import ColorChangeScreen from './src/screens/ColorChangeScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="CoursesScreen" component={CoursesScreen} />
      <Stack.Screen name="CoursesInformationScreen" component={CoursesInformationScreen} />
      <Stack.Screen name="CounterScreen" component={CounterScreen} />
      <Stack.Screen name="BoxScreen" component={BoxScreen} />
      <Stack.Screen name="ColorChangeScreen" component={ColorChangeScreen} />
    </Stack.Navigator>  
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  
});
