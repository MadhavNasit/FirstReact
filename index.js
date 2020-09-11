/**
 * @format
 */
import 'react-native-gesture-handler';
import { AppRegistry, FlatList } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
// import HomeScreen from './App/home-screen/home-screen';
// import ContactMe from './App/contact-me/contact-me';
// import FlexScreen from './App/flex-practice/flex-screen';
// import FlatListScreen from './App/flat-list/flat-list';
// import UserDetails from './App/user-details/user-details';
// import UserDetailsClass from './App/user-details/user-details-class';
// if (__DEV__) {
//   import('./ReactotronConfig').then(() => console.log('Reactotron Configured'))
// }
// import Reactotron from 'reactotron-react-native';
// Reactotron.log('Reactron Works');
AppRegistry.registerComponent(appName, () => App);
