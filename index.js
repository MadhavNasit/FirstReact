/**
 * @format
 */

import { AppRegistry, FlatList } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import HomeScreen from './App/home-screen/home-screen';
import ContactMe from './App/contact-me/contact-me';
import FlexScreen from './App/flex-practice/flex-screen';
import FlatListScreen from './App/flat-list/flat-list';

AppRegistry.registerComponent(appName, () => FlatListScreen);
