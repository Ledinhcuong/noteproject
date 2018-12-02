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
  StatusBar,
  TouchableOpacity,
} from 'react-native';

export default class Home extends React.Component {
  render () {
    return (
      <View style={{flex: 1, backgroundColor: '#000'}}>

        <StatusBar
          backgroundColor="#000"
          animated={true}
          barStyle={'light-content'}
        />

        <View>
          <Text style={{color: '#fff', fontSize: 22, marginLeft: 20}}>Nhóm 1</Text>
        </View>

        <View style={styles.title}>
          <Text style={styles.textTitle}>Xin Chào</Text>

        </View>

        <View style={styles.content}>

          <Text
            style={{
              color: '#fff',
              marginBottom: 10,
              fontSize: 18,
              fontWeight: 'bold',
            }}
          >
            Hãy chọn chức năng bạn muốn
          </Text>

          <TouchableOpacity 
            onPress={() => this.props.navigation.navigate('Note')}
          >
            <View style={styles.contentIcon}>

              <View style={{padding: 10}}>
                <Image source={require ('./note.png')} />
              </View>

              <View style={{flex: 1}}>
                <Text style={{color: '#fff', fontSize: 18}}>Ghi Chú</Text>
                <Text style={{color: '#ceced2'}}>
                  Hiển thị danh sách ghi chú của bạn
                </Text>
              </View>
            </View>

          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.contentIcon}>

              <View style={{padding: 10}}>
                <Image source={require ('./reminder.png')} />
              </View>

              <View style={{flex: 1}}>
                <Text style={{color: '#fff', fontSize: 18}}>Nhắc việc</Text>
                <Text style={{color: '#ceced2'}}>
                  Hiển thị danh sách công việc của bạn
                </Text>
              </View>
            </View>

          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.contentIcon}>

              <View style={{padding: 10}}>
                <Image source={require ('./calendar.png')} />
              </View>

              <View style={{flex: 1}}>
                <Text style={{color: '#fff', fontSize: 18}}>Lịch</Text>
                <Text style={{color: '#ceced2'}}>
                  Hiển thị lịch và các công việc đã thêm
                </Text>
              </View>
            </View>

          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.contentIcon}>

              <View style={{padding: 10}}>
                <Image source={require ('./trash.png')} />
              </View>

              <View style={{flex: 1}}>
                <Text style={{color: '#fff', fontSize: 18}}>Thùng rác</Text>
                <Text style={{color: '#ceced2'}}>
                  Các ghi chú đã xóa sẽ hiển thị tại đây
                </Text>
              </View>
            </View>

          </TouchableOpacity>

          <View style={{justifyContent: 'center', flexDirection: 'row'}}>
            <Image source={require ('./bottom.png')} />
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

  contentIcon: {
    flexDirection: 'row',

    paddingTop: 15,
    paddingBottom: 15,
    borderRadius: 18,
    borderColor: '#fff',
    backgroundColor: '#5C5C5C',
    marginBottom: 15,
  },

  textTitle: {
    fontSize: 40,
    color: '#007aff',
  },

  content: {
    flex: 2,
    flexDirection: 'column',
    paddingLeft: 15,
    paddingRight: 15,
  },
});
