/**
 * Tacgia: Lê Đình Cường
 * Screen: NoteAddScreen
 *
 * @format
 * @flow
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

import {FloatingAction} from 'react-native-floating-action';
import ModalDropdown from 'react-native-modal-dropdown';

export default class EditNoteScreen extends Component {
  constructor (props) {
    super (props);
    this.state = {text: 'Useless Placeholder'};
  }

  render () {
    return (
      <View style={{flex: 1, backgroundColor: "#000"}}>

       <TouchableOpacity>
         <Image style={{marginLeft: 20}} source={require ('./backicon.png')} /> 
       </TouchableOpacity>

        <View style={styles.title}>
        <Image style={{width: 56, height: 56, marginBottom: 5}} source={require ('./notei.png')} />
          <Text style={styles.textTitle}>Sửa Ghi Chú</Text>
        </View>

        <View style={styles.content}>
          <Text style={{color: "#fff", fontSize: 18, marginBottom: 15}}>Thay đổi thông tin mà bạn muốn sửa</Text>
          <TextInput
            style={styles.inputTitle}
            onChangeText={text => this.setState ({text})}
            placeholder="  Nhập tiêu đề"
            placeholderTextColor= "#7c4dff"
          />

          <TextInput
            style={styles.inputContent}
            onChangeText={text => this.setState ({text})}
            placeholder="  Nhập nội dung ghi chú"
            numberOfLines={5}
            multiline={true}
            editable={true}
            placeholderTextColor= "#03a9f4"
          />


          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingLeft: 40,
              paddingRight: 40,
            }}
          >

            <TouchableOpacity style={{marginTop: 15}}>
              <Text style={styles.btnAdd}>
                Lưu
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={{marginTop: 15}}>
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
    color: "#ffffff",
    borderRadius: 8,
    fontSize: 16,
    backgroundColor: '#5C5C5C'
  },

  inputContent: {
    borderColor: '#fff',
    borderWidth: 1,
    textAlign: 'left',
    borderRadius: 8,
    color: "#fff",
    fontSize: 16,
    backgroundColor: '#5C5C5C'
  },

  btnAdd: {
    backgroundColor: '#4cd964',
    width: 120,
    paddingTop: 5,
    paddingBottom: 5,
    textAlign: 'center',
    color: '#fff',
    borderRadius: 8,
    fontSize: 20,
  },

  btnCancel: {
    backgroundColor: '#ff3b30',
    width: 120,
    paddingTop: 5,
    paddingBottom: 5,
    textAlign: 'center',
    color: '#fff',
    borderRadius: 8,
    fontSize: 20,
  },
});