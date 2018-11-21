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

export default class NoteScreen extends Component {
  constructor (props) {
    super (props);
    this.state = {text: 'Useless Placeholder'};
  }

  render () {
    return (
      <View style={{flex: 1}}>

        <View style={styles.title}>
          <Text style={styles.textTitle}>Thêm Ghi Chú</Text>
        </View>

        <View style={styles.content}>

          <TextInput
            style={styles.inputTitle}
            onChangeText={text => this.setState ({text})}
            placeholder="Nhập tiêu đề"
          />

          <TextInput
            style={styles.inputContent}
            onChangeText={text => this.setState ({text})}
            placeholder="Nhập nội dung ghi chú"
            numberOfLines={5}
            multiline={true}
            editable={true}
          />

          <ModalDropdown

            options={['Màu 1', 'Màu 2', 'Màu 3']}
            style={{width: 120,marginTop: 10, marginBottom: 10}}
            defaultValue="Chọn màu sắc cho ghi chú"
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
                Thêm
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
    paddingLeft: 45,
    paddingRight: 45,
  },

  inputTitle: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
  },

  inputContent: {
    borderColor: 'gray',
    borderWidth: 1,
    textAlign: 'left',
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
