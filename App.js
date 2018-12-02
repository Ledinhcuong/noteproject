import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation'; 
import HomeScreen from './HomeScreen';
import Home from './Home';
import NoteScreen from './NoteScreen';
import NoteAddScreen from './NoteAddScreen';
import DetailsScreen from './DetailsScreen';
import MuaHang from './MuaHang';
import TodoScreen from './TodoScreen';


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
    headerMode: 'none',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
