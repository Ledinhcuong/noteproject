import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation'; 
import HomeScreen from './HomeScreen';
import Home from './Home';
import NoteScreen from './NoteScreen';
import NoteAddScreen from './NoteAddScreen';
import DetailsScreen from './DetailsScreen';
import EditNoteScreen from './EditNoteScreen';
import DetailNote from './DetailNote';
import NoteItem from './NoteItem';
import MuaHang from './MuaHang';
import TodoScreen from './views/TodoScreen';
import AddTodoScreen from './views/AddTodoScreen';
import EditTodoScreen from './views/EditTodoScreen';

const RootStack = createStackNavigator(
  {
    Home: Home,
    Note: NoteScreen,
    NoteAdd: NoteAddScreen,
    Details: DetailsScreen,
    DetailNote: DetailNote,
    EditNoteScreen: EditNoteScreen,
    NoteItem: NoteItem,
    Todo: TodoScreen,
    AddTodo: AddTodoScreen,
    EditTodo: EditTodoScreen,
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
