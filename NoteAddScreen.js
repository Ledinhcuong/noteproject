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
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={text => this.setState ({text})}
            placeholder="Nhập tiêu đề"
          />

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
});
