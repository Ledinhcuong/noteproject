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
  
  constructor (props) {
    super (props);

    // Props
    

    // State
    this.state = {
      dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    }

  }
 
  fetchData() {
    fetch("http://192.168.161.2:81/webservice/viewnote.php", {method: "POST", body: null})
    .then((response)=>response.json())
    .then((responseData)=> {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(responseData)
        });
    }).done()
  }

  componentDidMount() {
    this.fetchData();
  }

  render () {
    return (
      <View style={{flex: 1, backgroundColor: '#000'}}>
  
      <TouchableOpacity onPress={() => this.props.navigation.navigate ('Home')}>
        <Text style={{color: "#fff", fontSize: 18, marginLeft: 20}}> Màn Hình Chủ</Text>
      </TouchableOpacity>

        <View style={styles.title}>
        <Image style={{width: 56, height: 56, marginBottom: 5}} source={require ('./notei.png')} />
          <Text style={styles.textTitle}>Ghi Chú</Text>
        </View>

        <View style={styles.content}>
          <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
             
              <View style={styles.backGroundAction}>
                <TouchableOpacity style={styles.btnAction}
                onPress={()=> this.props.navigation.navigate ('Home')}>
                <Image source={require ('./homeicon.png')} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnAction}>
                <Image source={require ('./searchicon.png')} />
                </TouchableOpacity>

                 <TouchableOpacity style={styles.btnAction}>
                <Image source={require ('./upbuttonicon.png')} />
                </TouchableOpacity>

              </View>

          </View>
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
              <TouchableOpacity onPress={()=> {
              
              this.props.navigation.navigate ('DetailNote', {idSelect: rowData.Id, titleSelect: rowData.TitleNote , contentSelect: rowData.Content});}}>
                  <NoteItem
                title={rowData.TitleNote}
                date={rowData.Date}
                content={rowData.Content}
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

  backGroundAction: {
    flexDirection: 'row',
     backgroundColor: '#5C5C5C',
      borderRadius: 18,
       padding: 5
  },

  btnAction: {
    marginLeft: 3,
    marginRight: 3,
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
