import React, { Component } from 'react';
import { 
  AppRegistry, FlatList, StyleSheet, Text, View, CheckBox,
  TouchableOpacity, 
  ActivityIndicator } from 'react-native';
import ActionButton from 'react-native-action-button';
import DOMAIN from '../DataTeam/webservice/DBConfig';

const dataSource2 = [
  {key: 'Project Laravel'},
  {key: 'Project React Native'},
  {key: 'Project iOS'},
];


var dataSource = [];
export default class FlatListBasics extends Component {
  constructor(props){
    super(props);
 
    this.state ={ isLoading: true}
 }


componentDidMount(){
  return fetch(DOMAIN + '/NoteWebService/getTodo.php')
    .then((response) => response.json())
    .then((responseJson) => {

      this.setState({
        isLoading: false,
        dataSource: responseJson,
      }, function(){

      });

    })
    .catch((error) =>{
      console.error(error);
    });
}

  render() {
    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }
    return (
      <View>
        <View>
          <Text style={styles.header}>Todo</Text>
          <FlatList
            data={this.state.dataSource}
            renderItem={
              ({item}) =>
              <View style={styles.todoItemContainer}>
              <TouchableOpacity
              onPress={() => this.props.navigation.navigate('EditTodo', {
                todoContent: item.Content
              })}>
                <Text style={styles.item}>{item.Content}</Text>
              </TouchableOpacity>
                <CheckBox
                  title='Mark this task as Done'
                  checked={this.state.checked}
                />
              </View>
            }
            keyExtractor={({IdTask}, index) => IdTask}
          />
        </View>
        <View style={{marginTop: 40}}>
          <Text style={styles.header}>Done tasks</Text>
          <FlatList
            data={dataSource2}
            renderItem={
              ({item}) =>
              <View style={styles.doneItemContainer}>
                <Text style={styles.item}>{item.key}</Text>
              </View>
            }
          />
        </View>
        <ActionButton
          buttonColor="darkorange"
          onPress={() => this.props.navigation.navigate ('AddTodo')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    fontSize: 40,
    textAlign: 'center',
  },
  todoItemContainer: {
   flex: 1,
   flexDirection: 'row',
   justifyContent: 'space-between',
   backgroundColor: 'darkorange',
   borderBottomWidth: 1,
   borderBottomColor: 'grey',
  },
  doneItemContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'darkgreen',
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
   },
  item: {
    padding: 10,
    width: 300,
    fontSize: 18,
    height: 44,
  },
})

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => FlatListBasics);
