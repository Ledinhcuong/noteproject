import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation'; // Version can be specified in package.json
import HomeScreen from './HomeScreen';
import Home from './Home';
import NoteScreen from './NoteScreen';
import NoteAddScreen from './NoteAddScreen';
import DetailsScreen from './DetailsScreen';
import MuaHang from './MuaHang';
import TodoScreen from './views/TodoScreen';


const RootStack = createStackNavigator(
  {
    Home: Home,
    Note: NoteScreen,
    NoteAdd: NoteAddScreen,
    Details: DetailsScreen,
    MuaHang: MuaHang,
    Todo: TodoScreen
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
