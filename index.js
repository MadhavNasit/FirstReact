/**
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import { Provider } from 'react-redux';

import configureStore from './App/redux/store/store';
import TabNavigation from './App/navigation/tab-navigation';

const store = configureStore();

const FirstApp = () =>
  <Provider store={store}>
    <TabNavigation />
  </Provider>

AppRegistry.registerComponent(appName, () => FirstApp);
