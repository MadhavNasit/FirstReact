// In App.js in a new project

import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../home-screen/home-screen';
import UserDetails from '../user-details/user-details';
import ShowDetails from '../show-details/show-details';

const Stack = createStackNavigator();

function StackNavigation() {
  return (
    // <NavigationContainer>
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#0000ff',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontSize: 24,
          fontWeight: 'bold',
        },
      }} >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="UserDetails"
        component={UserDetails}
        options={{ title: 'User Details' }}
      />
      <Stack.Screen
        name="ShowDetails"
        component={ShowDetails}
        options={{ title: 'Show Details' }}
      />
    </Stack.Navigator>
    // </NavigationContainer>
  );
}

export default StackNavigation;