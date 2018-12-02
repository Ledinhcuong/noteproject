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
  ToolbarAndroid,
  StatusBar,
  View,
  Button,
  ListView,
  TouchableOpacity,
  Image,
} from 'react-native';
import {FloatingAction} from 'react-native-floating-action';
import ActionButton from 'react-native-action-button';

export default class NoteScreen extends Component {
  constructor () {
    super ();
    const ds = new ListView.DataSource ({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows ([
        'note 1',
        'note 2',
        'note 3',
        'note 4',
        'note 5',
        'note 6',
      ]),
    };
  }

  render () {
    return (
      <View style={{flex: 1, backgroundColor: '#000'}}>
  
      <TouchableOpacity onPress={() => this.props.navigation.goBack (null)}>
        <Text style={{color: "#fff", fontSize: 18, marginLeft: 20}}>  Back Home</Text>
      </TouchableOpacity>

        <View style={styles.title}>
        <Image style={{width: 56, height: 56, marginBottom: 5}} source={require ('./notei.png')} />
          <Text style={styles.textTitle}>Ghi Chú</Text>
        </View>

        <View style={styles.content}>
          <Text
            style={{
              color: '#fff',
              fontSize: 22,
              marginBottom: 15,
            }}
          >
            Các ghi chú của bạn
          </Text>
          <ListView
            dataSource={this.state.dataSource}
            renderRow={rowData => (
              <TouchableOpacity onPress={()=> this.props.navigation.navigate ('DetailNote')}>
                  <NoteItem
                title="Tiêu đề"
                date="25/12/2018"
                content="Nội dung của nó"
              />
              </TouchableOpacity>
              
            )}
          />

        </View>

        <ActionButton
          buttonColor="#7c4dff"
          onPress={() => this.props.navigation.navigate ('NoteAdd')}
        />

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

  floatButton: {
    display: 'flex',
  },
});
