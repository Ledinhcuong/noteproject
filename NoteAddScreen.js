/**
 * Tacgia: Lê Đình Cường
 * Screen: NoteAddScreen
 
 */

import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';



export default class NoteScreen extends Component {
  constructor (props) {
    super (props);

    // State
    this.state = {
      titlenote: '',
      contentnote: '',
    };
  }

  // Phương thức thêm dữ liệu vào trong cơ sở dữ liệu
  Insert_Data_Into_MySQL = () => {
    this.setState (() => {
      fetch ('http://192.168.164.2:81/webservice/addnote.php', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify ({
          TitleNote: this.state.titlenote,
          Content: this.state.contentnote,
        }),
      })
        .then (response => response.json ())
        .then (responseJsonFromServer => {
          // alert(responseJsonFromServer);  // In thông báo từ server

          // Trở về màn hình hiển thị các danh sách ghi chú
          
          this.props.navigation.push('Note');
         
          
         
        })
        .catch (error => {
          // In ra thông báo lỗi
          alert('Đã xuất hiện lỗi ngoài mong muốn :(')
          //console.error (error);
        });
    });
  };

  render () {
    return (
      <View style={{flex: 1, backgroundColor: '#000'}}>

        <TouchableOpacity onPress={() => this.props.navigation.goBack (null)}>
          <Image style={{marginLeft: 20}} source={require ('./backicon.png')} />
        </TouchableOpacity>

        <View style={styles.title}>
          <Image
            style={{width: 56, height: 56, marginBottom: 5}}
            source={require ('./notei.png')}
          />
          <Text style={styles.textTitle}>Thêm Ghi Chú</Text>
        </View>

        <View style={styles.content}>

          <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>

            <View style={styles.backGroundAction}>
              <TouchableOpacity
                style={styles.btnAction}
                onPress={() => this.setState({titlenote: ' ', contentnote: ' '})}
              >
                <Image source={require ('./refresh.png')} />
              </TouchableOpacity>

              
            </View>

          </View>

          <Text style={{color: '#fff', fontSize: 18, marginBottom: 15}}>
            Vui lòng điền đủ các thông tin sau
          </Text>
          <TextInput
            style={styles.inputTitle}
            onChangeText={text => this.setState ({titlenote: text})}
            value= {this.state.titlenote}
            placeholder="  Nhập tiêu đề"
            placeholderTextColor="#7c4dff"
            maxLength={40}
          />

          <TextInput
            style={styles.inputContent}
            onChangeText={text => this.setState ({contentnote: text})}
            placeholder="  Nhập nội dung ghi chú"
            numberOfLines={5}
            value={this.state.contentnote}
            multiline={true}
            editable={true}
            maxLength={75}
            placeholderTextColor="#03a9f4"
          />

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
            }}
          >

            <TouchableOpacity
              style={{marginTop: 15}}
              onPress={this.Insert_Data_Into_MySQL}
            >
              <Text style={styles.btnAdd}>
                Thêm
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{marginTop: 15}}
              onPress={() => {
                // Trở về màn hình hiển thị các danh sách ghi chú
                this.props.navigation.navigate ('Note')
                
              } }
            >
              <Text style={styles.btnCancel}>
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
  title: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  textTitle: {
    fontSize: 40,
    color: '#007aff',
  },

  content: {
    flex: 2,
    flexDirection: 'column',
    paddingLeft: 20,
    paddingRight: 20,
  },

  inputTitle: {
    height: 40,
    borderColor: '#fff',
    borderWidth: 1,
    marginBottom: 15,
    color: '#ffffff',
    borderRadius: 8,
    fontSize: 16,
    backgroundColor: '#5C5C5C',
  },

  inputContent: {
    borderColor: '#fff',
    borderWidth: 1,
    textAlign: 'left',
    borderRadius: 8,
    color: '#fff',
    fontSize: 16,
    backgroundColor: '#5C5C5C',
  },

  btnAdd: {
    backgroundColor: '#2e7d32',
    width: 120,
    paddingTop: 5,
    paddingBottom: 5,
    textAlign: 'center',
    color: '#fff',
    borderRadius: 8,
    fontSize: 20,
    marginRight: 40,
  },

  btnCancel: {
    backgroundColor: '#ef6c00',
    width: 120,
    paddingTop: 5,
    paddingBottom: 5,
    textAlign: 'center',
    color: '#fff',
    borderRadius: 8,
    fontSize: 20,
  },
  backGroundAction: {
    flexDirection: 'row',
    backgroundColor: '#5C5C5C',
    borderRadius: 18,
    padding: 5,
  },

  btnAction: {
    marginLeft: 3,
    marginRight: 3,
  },
});
