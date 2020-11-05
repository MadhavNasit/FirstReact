/**
 * @format
 */
import 'react-native-gesture-handler';
import 'es6-symbol/implement';
import React from 'react';
import { AppRegistry } from 'react-native';
import TabNavigation from './App/navigation/tab-navigation';
import { name as appName } from './app.json';

import { Provider } from 'mobx-react';
import store from './App/mobx/user-list-store';

const AppNav = () => {
  return (
    <Provider store={store}>
      <TabNavigation />
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => AppNav);
