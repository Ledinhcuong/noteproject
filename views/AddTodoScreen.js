
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
const DOMAIN = 'http://192.168.4.110:88'

export default class AddTodoScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      text: 'Useless Placeholder',
      content: ''
    };
  }

  // Phương thức thêm dữ liệu vào trong cơ sở dữ liệu
  Insert_Data_Into_MySQL = () => {
    this.setState(() => {
      fetch(DOMAIN + '/webservice/addTodo.php', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          Content: this.state.content,
        }),
      })
        .then(response => response.json())
        .then(responseJsonFromServer => {
          // alert(responseJsonFromServer);  // In thông báo từ server

          // Trở về màn hình hiển thị các danh sách ghi chú

          this.props.navigation.push('Todo');

        })
        .catch(error => {
          // In ra thông báo lỗi
          alert(error)
        });
    });
  };

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#111", padding: 10 }}>

        <View>
          <Text style={[styles.h1, styles.white]}>Thêm nhiệm vụ</Text>
          <TextInput
            placeholder="Nhập nhiệm vụ . . ."
            placeholderTextColor="#aaa"
            onChangeText={text => this.setState ({content: text})}
            value={this.state.content}
            numberOfLines={10}
            maxLength={400}
            multiline={true}
            editable={true}
            scrollEnabled={true}
            style={[styles.textInputArea, styles.distance]}
          />

          <View style={[{ flexDirection: 'row', justifyContent: 'space-around' }, styles.distance]}>
            <TouchableOpacity
              onPress={this.Insert_Data_Into_MySQL}>
              <Text style={styles.button}>
                Thêm
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => this.props.navigation.goBack(null)}>
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

const styles = StyleSheet.create({
  h1: { fontSize: 30 },
  distance: { marginTop: 40 },
  white: { color: 'white' },
  button: {
    backgroundColor: 'grey',
    width: 120,
    textAlign: 'center',
    padding: 10
  },
  textInputArea: {
    textAlign: 'left',
    backgroundColor: 'rgba(255, 255, 255, .3)',
    color: 'white',
    fontSize: 20,
  }
});
