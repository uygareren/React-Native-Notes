import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Member from './screens/member/Member';
import MemberDetail from './screens/member/MemberDetail';

import Profile from './screens/profile/Profile';
import ProfileDetail from './screens/profile/ProfileDetail';
import ProfileUpdate from './screens/profile/ProfileUpdate';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MemberStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Member' component={Member}/>
      <Stack.Screen name='MemberDetail' component={MemberDetail}/>
    </Stack.Navigator>
  );
}

const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Profile' component={Profile}/>
      <Stack.Screen name='ProfileDetail' component={ProfileDetail}/>
      <Stack.Screen name='ProfileUpdate' component={ProfileUpdate}/>
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator >
        <Tab.Screen name="MemberStack" component={MemberStack} options={{headerShown: false}} />  
        <Tab.Screen name="ProfileStack" component={ProfileStack} options={{headerShown: false}}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
