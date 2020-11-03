import * as React from 'react';
import { View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FlatList from '../flat-list/flat-list';
import { icons } from '../icons';
import FlexScreen from '../flex-practice/flex-screen';
import StackNavigation from './stack-navigation';
import TestAPI from '../api-test/api-test';
import usersWatermeloanDB from '../users-watermeloanDB/users-watermeloanDB';

const Tab = createBottomTabNavigator();
const tabItem = (screen, stack, source) => {
  return (
    <Tab.Screen
      options={{
        tabBarIcon: ({ focused }) => tabIcon(focused, source),
        // unmountOnBlur: true
      }}
      name={screen}
      component={stack}
    />
  );
};
function tabIcon(focused, source) {
  return (
    <View style={[TAB_VIEW, focused && { borderTopWidth: 1.5 }]}>
      <Image style={focused ? TAB_ICON : INACTIVE_TAB_ICON} source={source} />
    </View>
  );
}
const TAB_ICON = {
  height: 25,
  width: 25,
  tintColor: "#0000ff"
};
const INACTIVE_TAB_ICON = {
  ...TAB_ICON,
  tintColor: "#999999"
};
const TAB_VIEW = {
  borderTopColor: "#0000ff",
  borderTopWidth: 0,
  minWidth: "100%",
  justifyContent: 'center',
  flex: 1,
  alignItems: 'center',
  height: 35
};
export default function TabNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          style: {
            borderTopColor: 'gray',
            borderTopWidth: 1
          },
          labelStyle: {
            fontSize: 12
          },
          activeTintColor: '#0000ff',
          inactiveTintColor: '#999999',
        }}
      >
        {tabItem('Home', StackNavigation, icons.home)}
        {tabItem('User Details', usersWatermeloanDB, icons.menu)}
        {tabItem('API Test', TestAPI, icons.test)}
        {tabItem('FlexScreen', FlexScreen, icons.gallery)}
        {tabItem('flatList1', FlatList, icons.flatlist)}
      </Tab.Navigator>
    </NavigationContainer>
  );
}