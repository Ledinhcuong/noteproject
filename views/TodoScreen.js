import React, { Component } from 'react';
import { 
  AppRegistry, FlatList, StyleSheet, Text, View,
  ScrollView,
  TouchableOpacity, 
  ActivityIndicator } from 'react-native';
import ActionButton from 'react-native-action-button';
import { CheckBox } from 'react-native-elements';
//import DOMAIN from '../DataTeam/webservice/DBConfig';

// const dataSource2 = [
//   {key: 'Project Laravel'},
//   {key: 'Project React Native'},
//   {key: 'Project iOS'},
// ];
const DOMAIN = 'http://192.168.4.110:88'


var notDoneTasks = [];
var doneTasks =[];
export default class FlatListBasics extends Component {
  constructor(props){
    super(props);
 
    this.state ={
      isLoading: true,
      id: 0,
      state: false,
    }
 }


componentDidMount(){

  return fetch(DOMAIN + '/webservice/getTodo.php')
    .then((response) => response.json())
    .then((responseJson) => {

      this.setState({
        isLoading: false,
        notDoneTasks: responseJson.filter(item => item.state == 0),
        doneTasks: responseJson.filter(item => item.state == 1),
      }, function(){

      });

    })
    .catch((error) =>{
      console.error(error);
    });
}

// Phương thức thêm dữ liệu vào trong cơ sở dữ liệu
Update_Data_Into_MySQL = (id, state) => {
  this.setState(()=>
  {
    fetch(DOMAIN + '/webservice/editTodo.php', {
      method: 'POST',
      headers:
      {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: id,
        state: state,
      })
    }).then((response) => response.json()).then((responseJsonFromServer)=>{
    // alert(responseJsonFromServer);  // In thông báo từ server
      
      this.props.navigation.push('Todo');

    }).catch((error)=>{
      // In ra canh bao loi tu server
      alert(error)

    });
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
      <ScrollView>
        <View>
          <Text style={styles.header}>Todo</Text>
          <FlatList
            data={this.state.notDoneTasks}
            renderItem={
              ({item}) =>
              <View style={[styles.todoItemContainer, (item.priority == 1)? {backgroundColor: 'red'} : {backgroundColor: 'darkorange'}]}>
              <TouchableOpacity
              onPress={() => this.props.navigation.navigate('EditTodo', {
                id: item.IdTask,
                content: item.Content,
                state: item.state,
                priority: item.priority,
              })}>
                <Text style={styles.item}>{item.Content}</Text>
              </TouchableOpacity>
              <CheckBox
                right
                title={'Not done'}
                checked={this.state.state}
                onPress={ () => {this.Update_Data_Into_MySQL(item.IdTask, true); }}
              />
              </View>
            }
            keyExtractor={({IdTask}, index) => IdTask}
          />
        </View>
        <View style={{marginTop: 40}}>
          <Text style={styles.header}>Done tasks</Text>
          <FlatList
            data={this.state.doneTasks}
            renderItem={
              ({item}) =>
              <View style={styles.doneItemContainer}>
                <Text style={styles.item}>{item.Content}</Text>
              </View>
            }
          />
        </View>
        <ActionButton
          buttonColor="darkorange"
          onPress={() => this.props.navigation.navigate ('AddTodo')}
        />
      </ScrollView>
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
    width: 200,
    fontSize: 18,
    height: 44,
  },
})

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => FlatListBasics);
