import * as React from 'react';
import { Button, View, useWindowDimensions, Text, SafeAreaView } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import FlexScreen from '../flex-practice/flex-screen';
import FlatListScreen from '../flat-list/flat-list';
import CustomHeader from '../component/custom-header';
import HomeScreen from '../home-screen/home-screen';
import StackNavigation from './stack-navigation';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  const dimensions = useWindowDimensions();
  const isLargeScreen = dimensions.width >= 400;
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Feed"
        drawerType={dimensions.width >= 768 ? 'permanent' : 'slide'}
        hideStatusBar={true}>
        <Drawer.Screen
          name="Home"
          component={StackNavigation}
          options={{ drawerLabel: 'Home' }}
        />
        <Drawer.Screen
          name="Notifications"
          component={FlexScreen}
          options={{ drawerLabel: 'FlexScreen' }}
        />
        <Drawer.Screen
          name="Profile"
          component={FlatListScreen}
          options={{ drawerLabel: 'FlatList' }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default DrawerNavigation;