/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import HomeScreen from './App/home-screen/home-screen';
import ContactMe from './App/contact-me/contact-me';
import FlexScreen from './App/flex-practice/flex-screen';

AppRegistry.registerComponent(appName, () => FlexScreen);
