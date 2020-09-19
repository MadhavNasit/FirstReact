import * as React from 'react';
import { Text, View, Button, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../home-screen/home-screen';
import FlatList from '../flat-list/flat-list';
import { icons } from '../icons';
import FlatListScreen from '../flat-list/flat-list';
import UserDetails from '../user-details/user-details';
import FlexScreen from '../flex-practice/flex-screen';
import App from '../../App';
import StackNavigation from './stack-navigation';
import UsersRedux from '../users-redux/users-redux';

// function HomeScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Home!</Text>
//       <Button
//         title="Go to Settings"
//         onPress={() => navigation.navigate('Settings')}
//       />
//     </View>
//   );
// }

// function SettingsScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Settings!</Text>
//       <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
//     </View>
//   );
// }

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
  tintColor: "red"
};
const INACTIVE_TAB_ICON = {
  ...TAB_ICON,
  tintColor: "black"
};
const TAB_VIEW = {
  borderTopColor: "red",
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
      <Tab.Navigator>
        {tabItem('Home', StackNavigation, icons.home)}
        {tabItem('UserDetails', UsersRedux, icons.menu)}
        {tabItem('FlexScreen', FlexScreen, icons.gallery)}
        {tabItem('flatList1', FlatList, icons.flatlist)}
      </Tab.Navigator>
    </NavigationContainer>
  );
}