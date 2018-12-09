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
  constructor (props) {
    super (props);
    

  }

  
  // Phương thuc xoa dư lieu
  Delete_Note = () => {
    this.setState(()=>
    {
    fetch('http://192.168.164.2:81/webservice/deletenote.php', {
      method: 'POST',
      headers:
      {
        'Accept': 'application/json',
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        IdNote: this.props.navigation.state.params.idSelect
      })
    }).then((response) => response.json()).then((responseJsonFromServer)=>{
     
     // alert(responseJsonFromServer);  // In thông báo từ server

      // Trở về màn hình hiển thị các danh sách ghi chú
      this.props.navigation.push ('Note');


    }).catch((error)=>{

      alert('Đã xuất hiện lỗi trong quá trình xóa ): ')
      
     // console.error(error);
    });
  });
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
          navIcon={require ('./note.png')}
          titleColor={'#007aff'}

          /* actions={[
            {
              title: 'Delete',
              show: 'always',
              icon: require ('./deleteicon.png'),
            },
            {title: 'Edit', show: 'always', icon: require ('./editicon.png')},
            {title: 'Close', show: 'always', icon: require ('./close.png')},
          ]}
          //onActionSelected={this.onActionSelected} 
         */
        />

        <View style={{flexDirection: "row", justifyContent: 'flex-end', marginRight: 20}}>
          
          <View style={styles.backGroundAction}>
            <TouchableOpacity style={styles.bntAction}
            onPress={()=> {
              this.props.navigation.navigate ('EditNoteScreen', {titleSelect: this.props.navigation.state.params.titleSelect,
              contentSelect: this.props.navigation.state.params.contentSelect,
            idSelect:  this.props.navigation.state.params.idSelect} );
              
              }}>
              <Image source={require ('./editicon.png')} />
            </TouchableOpacity>

             <TouchableOpacity style={styles.bntAction}
             onPress={this.Delete_Note}>
              <Image source={require ('./deleteicon.png')} />
            </TouchableOpacity>

             <TouchableOpacity style={styles.bntAction}
             onPress={() => this.props.navigation.goBack (null)}>
              <Image source={require ('./close.png')} />
            </TouchableOpacity>
          </View>

        </View>

        <View style={styles.content}>
          <ScrollView>
            <Text style={styles.title}> {this.props.navigation.state.params.titleSelect}</Text>

            <Text style={styles.contentNote}>
              {this.props.navigation.state.params.contentSelect}
            </Text>

          </ScrollView>
          <Button
            title="Trở về trang trước"
            onPress={() => this.props.navigation.goBack (null)}
          />

        </View>
      </View>
    );
  }

  /*

  onActionSelected (position, props = this.props) {
    if (position == 0) {
      alert ('Delete');
    } else if (position == 1) {
      alert ('Edit');
      this.props.navigation.navigate ('EditNoteScreen');
    } else if (position == 2 ) {
      alert('Back');  
      
    }
  }
  */
}

const styles = StyleSheet.create ({
  title: {
    fontSize: 22,
    marginBottom: 15,
    marginTop: 15,
    color: '#ff9100',
  },

  backGroundAction: {
    flexDirection: 'row',
     backgroundColor: "#5C5C5C",
      padding: 5,
       borderRadius: 18
  },

  bntAction: {
    marginLeft: 3,
     marginRight: 3,
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
