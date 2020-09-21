/**
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';
import { AppRegistry, FlatList } from 'react-native';
import TabNavigation from './App/navigation/tab-navigation';
import { name as appName } from './app.json';

import { Provider } from 'mobx-react';
import store from './App/mobx/user-list-store';

// import applyDecoratedDescriptor from '@babel/runtime/helpers/esm/applyDecoratedDescriptor'
// import initializerDefineProperty from '@babel/runtime/helpers/esm/initializerDefineProperty'

// Object.assign(babelHelpers, {
//   applyDecoratedDescriptor,
//   initializerDefineProperty,
// });

const AppNav = () => {
  return (
    <Provider store={store}>
      <TabNavigation />
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => AppNav);
