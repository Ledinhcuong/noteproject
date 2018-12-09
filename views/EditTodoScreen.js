
import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableHighlight,
  TextInput,
  Picker
} from 'react-native';
const DOMAIN = 'http://192.168.4.110:88'


export default class EditTodoScreen extends Component {
  constructor (props) {
    super (props);
    /* 2. Get the param, provide a fallback value if not available */
    const { navigation } = this.props;
    // let id = navigation.getParam('id');
    // let content = navigation.getParam('content');
    // let state = navigation.getParam('state');
    // let priority = navigation.getParam('priority');

    
    this.state = {
      text: 'Useless Placeholder',
      id: navigation.getParam('id'),
      content: navigation.getParam('content'),
      state: navigation.getParam('state'),
      priority: navigation.getParam('priority'),
    };
  }

 
  Update_Data_Into_MySQL = () => {
    this.setState(()=>
    {
    fetch(DOMAIN + '/webservice/todoAction.php', {
      method: 'POST',
      headers:
      {
        'Accept': 'application/json',
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        action: 'update',
        id: this.state.id,
        content: this.state.content,
        state: this.state.state,
        priority: this.state.priority,
      })
    }).then((response) => response.json()).then((responseJsonFromServer)=>{
     // alert(responseJsonFromServer);  // In thông báo từ server
     
      console.log(
        "\nid: " + this.state.id +
        "\ncontent: " + this.state.content + 
        "\nstate: " + this.state.state + 
        "\npriority: " + this.state.priority
      )
      
      this.props.navigation.push('Todo');

    }).catch((error)=>{
      // In ra canh bao loi tu server
      alert(error)

    });
  });

  }

  updateTaskState() {
    this.setState({
      state: true,
      disable: true,  
    });
  }


  // Phương thuc xoa dư lieu
 Delete_Task = () => {
  this.setState(()=>
  {
    fetch(DOMAIN + '/webservice/todoAction.php', {
      method: 'POST',
      headers:
      {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        action: "delete",
        id: this.state.id,
      })
    }).then((response) => response.json()).then((responseJsonFromServer)=>{  
      this.props.navigation.push ('Todo');
    }).catch((error)=>{
      alert (error);
    });
  });
}

  render () {
    return (
      <View style={{flex: 1, backgroundColor: "#111", padding: 40}}>

        <View>
          <Text style={[styles.h1, styles.white]}>Sửa nhiệm vụ</Text>
          <View style={[{ flexDirection: 'row' }, styles.distance,]}>
            <TouchableOpacity
              disable={false}
              onPress={() => this.updateTaskState()}
              style={[
                styles.button, (this.state.state == true)?
                  {backgroundColor: 'green'} : {backgroundColor: 'orange'},
                {width: 140, justifyContent: 'center',}
              ]}>
              <Text>
                Mark this as done
              </Text>
            </TouchableOpacity>
            <Picker
              selectedValue={this.state.priority}
              style={[{ height: 50, width: 140},
              (this.state.priority == 1)? {backgroundColor: 'red'} : {backgroundColor: 'orange'}]}
              onValueChange={(itemValue, itemIndex) => this.setState({priority: itemValue})}>
              <Picker.Item label="Cao" value="1" />
              <Picker.Item label="Trung bình" value="0" />
            </Picker>
          </View>
          <TextInput
            placeholder="Nhập nhiệm vụ"
            placeholderTextColor= "#aaa"
            defaultValue={this.state.content}
            onChangeText={ text => this.setState({content: text})}
            numberOfLines={10}
            maxLength={400}
            multiline={true}
            editable={true}
            scrollEnabled={true}
            style={[styles.textInputArea, styles.distance]}
          />

          <View style={[{ flexDirection: 'row', justifyContent: 'space-around'}, styles.distance]}>
            <TouchableOpacity
            onPress={this.Update_Data_Into_MySQL}>
              <Text style={styles.button}>
                Save
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
            onPress={this.Delete_Task}>
              <Text style={styles.button}>
                Delete
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
            onPress={() => this.props.navigation.goBack (null)}>
              <Text style={styles.button}>
                Hủy
              </Text>
            </TouchableOpacity>
          </View>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create ({
  h1: {fontSize: 30},
  distance: {marginTop: 40},
  white: {color: 'white'},
  greenbutton: {backgroundColor: 'green'},
  button: {
    backgroundColor: 'grey',
    width: 80,
    textAlign: 'center',
    padding: 10,
    borderWidth: 2,
    borderColor: '#ccc',
  },
  textInputArea: {
    textAlign: 'left',
    backgroundColor: 'rgba(255, 255, 255, .3)',
    color: 'white',
    fontSize: 20,
  }
});
