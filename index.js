/**
 * @format
 */

import { AppRegistry, FlatList } from 'react-native';
import { name as appName } from './app.json';
// import App from './App';
// import HomeScreen from './App/home-screen/home-screen';
// import ContactMe from './App/contact-me/contact-me';
// import FlexScreen from './App/flex-practice/flex-screen';
// import FlatListScreen from './App/flat-list/flat-list';
import UserDetails from './App/user-details/user-details';

AppRegistry.registerComponent(appName, () => UserDetails);
