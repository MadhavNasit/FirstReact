// In App.js in a new project

import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './App/home-screen/home-screen';
import UserDetails from './App/user-details/user-details';
import ShowDetails from './App/show-details/show-details';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#0000ff',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontSize: 18,
            fontWeight: 'bold',
          },
        }} >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Home',
            headerRight: () => (
              <Button
                onPress={() => alert('This is a button!')}
                title="Info"
                color="#fff"
              />
            )
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
    </NavigationContainer>
  );
}

export default App;