/**
 * Tacgia: Lê Đình Cường
 * Screen: NoteScreen
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import NoteItem from './NoteItem';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ToolbarAndroid,
  StatusBar,
  ListView,
  TouchableOpacity,
  Image,
} from 'react-native';
import { FloatingAction } from 'react-native-floating-action';
import ActionButton from 'react-native-action-button';

export default class DetailNote extends Component {
  constructor() {
    super();

  }

  render() {
    return (


      <View style={{ flex: 1, flexDirection: 'column' }}>

        <StatusBar backgroundColor="#fff"
          animated={true}
          barStyle={'dark-content'} />

        <ToolbarAndroid 
          style={styles.toolbar}
          title="Detail Note"
         // navIcon={require('./setting.png')}
          titleColor={'#007aff'}
          actions = {[{title: "Delete", show: "always",  icon: require('./deleteicon.png')}, 
          {title: "Edit", show: "always",  icon: require('./editicon.png')}]} 
          onActionSelected={this.onActionSelected} />

          <View style={styles.content}>
            <Text style={styles.title}>Tiêu đề</Text>

            <Text style={styles.contentNote}>Phần này là phần sẽ hiện thị toàn bộ nội dung của một ghi chú nội dung sẽ được cập nhật để 
              hiển thị ở các thành phần sau
            </Text>


          </View>
      </View>


    );


  }

  onActionSelected(position) {
    if (position == 0) {
      alert('Delete');
    }  else if (position == 1) {
      alert("Edit");
    }


  }


}

const styles = StyleSheet.create({

  title: {
    fontSize: 22,
    marginBottom: 15,
    marginTop: 15,
    color: "#ff3b30"
   
  },

  contentNote: {
    fontSize: 18,

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

  containerToolbar: {
    flex: 1,
    justifyContent: 'flex-start',
   
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF',
  },
  toolbar: {
    backgroundColor: '#e9eaed',
    height: 56,
  },
});
