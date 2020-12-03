import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import styles from './styles';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'

import HomeScreen from './screens/HomeScreen';
import ListView from './screens/ListView';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="List View" component={ListView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}