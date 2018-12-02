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
      <View style={{ flex: 1 }}>


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
