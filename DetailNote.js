/**
 * Tacgia: Lê Đình Cường
 * Screen: NoteScreen
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import NoteItem from './NoteItem';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ToolbarAndroid,
  StatusBar,
  ScrollView,
  Button,
  ListView,
  TouchableOpacity,
  Image,
} from 'react-native';
import {FloatingAction} from 'react-native-floating-action';
import ActionButton from 'react-native-action-button';

export default class DetailNote extends Component {
  constructor () {
    super ();
  }

  render () {
    return (
      <View style={{flex: 1, flexDirection: 'column', backgroundColor: '#000'}}>

        <StatusBar
          backgroundColor="#000"
          animated={true}
          barStyle={'light-content'}
        />

        <ToolbarAndroid
          style={styles.toolbar}
          title="Chi Tiết"
          // navIcon={require('./setting.png')}
          titleColor={'#007aff'}
          actions={[
            {
              title: 'Delete',
              show: 'always',
              icon: require ('./deleteicon.png'),
            },
            {title: 'Edit', show: 'always', icon: require ('./editicon.png')},
            {title: 'Close', show: 'always', icon: require ('./close.png')},
          ]}
          onActionSelected={this.onActionSelected}
        />

        <View style={styles.content}>
          <ScrollView>
            <Text style={styles.title}>Đây là phần tiêu đề của ghi chú</Text>

            <Text style={styles.contentNote}>
              Phần này là phần sẽ hiện thị toàn bộ nội dung của một ghi chú nội dung sẽ được cập nhật để
              hiển thị ở các thành phần sau
            </Text>
          
          </ScrollView>
          <Button title="Trở về trang trước" onPress={() => this.props.navigation.goBack (null)}/>
         

        </View>
      </View>
    );
  }

  onActionSelected (position) {
    if (position == 0) {
      alert ('Delete');
    } else if (position == 1) {
      alert ('Edit');
    } else if (position == 2 ) {
      ()=>{this.props.navigation.goBack (null)};
    }
  }
}

const styles = StyleSheet.create ({
  title: {
    fontSize: 22,
    marginBottom: 15,
    marginTop: 15,
    color: '#fff',
  },

  contentNote: {
    fontSize: 18,
    color: '#fff',
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
    backgroundColor: '#000',
    height: 56,
  },
});
