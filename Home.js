/**
 * TacGia: Lê Đình Cường
 * Screen: Home App
 */

import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

export default class Home extends React.Component {
  render () {
    return (
      <View style={{flex: 1}}>

        <View style={styles.title}>
          <Text style={styles.textTitle}>Xin Chào</Text>
        </View>

        <View style={styles.content}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Note')}>
              <Image source={require ('./assets/noteicon.png')} />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Todo')}>
              <Image source={require ('./assets/todoicon.png')} />
            </TouchableOpacity>

          </View>

           <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 25}}>
           
            <TouchableOpacity>
              <Image source={require ('./assets/calendaricon.png')} />
            </TouchableOpacity>

            <TouchableOpacity>
              <Image source={require ('./assets/trashicon.png')} />
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
});
