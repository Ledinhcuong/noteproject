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
  Button,
  ListView,
  TouchableOpacity,
  Image,
} from 'react-native';
import { FloatingAction } from 'react-native-floating-action';
import ActionButton from 'react-native-action-button';

export default class NoteScreen extends Component {
  constructor() {
    super();
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds.cloneWithRows(['note 1', 'note 2', 'note 3', 'note 4', 'note 5', 'note 6']),
    };
  }

  render() {
    return (
      <View style={{ flex: 1 }}>

      <Button title="Nút"
      onPress={()=>this.props.navigation.goBack(null)}></Button>

        <View style={styles.title}>
          <Text style={styles.textTitle}>Ghi Chú</Text>
        </View>

        <View style={styles.content}>
          <ListView
            dataSource={this.state.dataSource}
            renderRow={rowData => <NoteItem title="Tiêu đề" date="25/12/2018" content="Nội dung của nó"></NoteItem>}
          />

        </View>

        <ActionButton
          buttonColor="rgba(231,76,60,1)"
          onPress={() => this.props.navigation.navigate('NoteAdd')}
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
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

  floatButton: {
    display: 'flex',
  },
});
