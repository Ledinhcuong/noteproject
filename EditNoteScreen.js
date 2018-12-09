/**
 * Tacgia: Lê Đình Cường
 * Screen: NoteEditScreen
 *
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


export default class EditNoteScreen extends Component {

  // Hàm khởi tạo
  constructor (props) {
    super (props);

     
    // State
     this.state = {text: 'Useless Placeholder',
     idnote: this.props.navigation.state.params.idSelect,
     titlenote: this.props.navigation.state.params.titleSelect,
     contentnote: this.props.navigation.state.params.contentSelect,
  }
}


  // Phương thức thêm dữ liệu vào trong cơ sở dữ liệu
  Edit_Data_Into_MySQL = () => {
    this.setState(()=>
    {
    fetch('http://192.168.164.2:81/webservice/editnote.php', {
      method: 'POST',
      headers:
      {
        'Accept': 'application/json',
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        IdNote: this.state.idnote,
        TitleNote: this.state.titlenote,
        Content: this.state.contentnote
      })
    }).then((response) => response.json()).then((responseJsonFromServer)=>{
     // alert(responseJsonFromServer);  // In thông báo từ server

      // Trở về màn hình hiển thị các danh sách ghi chú
      this.props.navigation.push('Note');


    }).catch((error)=>{

      // In ra canh bao loi tu server
      alert('Đã xuất hiện lỗi khi sửa dữ liệu ):')
      //console.error(error);
    });
  });

  }


  render () {
    return (
      <View style={{flex: 1, backgroundColor: "#000"}}>

       <TouchableOpacity onPress={() => this.props.navigation.goBack (null)}>
         <Image style={{marginLeft: 20}} source={require ('./backicon.png')} /> 
       </TouchableOpacity>

        <View style={styles.title}>
        <Image style={{width: 56, height: 56, marginBottom: 5}} source={require ('./notei.png')} />
          <Text style={styles.textTitle}>Sửa Ghi Chú</Text>
        </View>

        <View style={styles.content}>
          <Text style={{color: "#fff", fontSize: 18, marginBottom: 15}}>Thay đổi những nội dung bạn muốn sửa</Text>
          <TextInput
            style={styles.inputTitle}
            onChangeText={text => this.setState ({titlenote: text})}
            placeholder="  Nhập tiêu đề"
            value={this.state.titlenote}
            maxLength={40}
            placeholderTextColor= "#7c4dff"
          />

          <TextInput
            style={styles.inputContent}
            onChangeText={ text => this.setState ({contentnote: text})}
            placeholder="  Nhập nội dung ghi chú"
            numberOfLines={5}
            multiline={true}
            editable={true}
            maxLength={75}
            value={this.state.contentnote}
            placeholderTextColor= "#03a9f4"
          />


          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
            }}
          >

            <TouchableOpacity style={{marginTop: 15}}
            onPress={this.Edit_Data_Into_MySQL}>
              <Text style={styles.btnAdd}>
                Lưu
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={{marginTop: 15}}
            onPress={() => this.props.navigation.goBack (null)}>
              <Text style={styles.btnCancel}>
                Hủy
              </Text>
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
    paddingLeft: 20,
    paddingRight: 20,
  },

  inputTitle: {
    height: 40,
    borderColor: '#fff',
    borderWidth: 1,
    marginBottom: 15,
    color: "#ffffff",
    borderRadius: 8,
    fontSize: 16,
    backgroundColor: '#5C5C5C'
  },

  inputContent: {
    borderColor: '#fff',
    borderWidth: 1,
    textAlign: 'left',
    borderRadius: 8,
    color: "#fff",
    fontSize: 16,
    backgroundColor: '#5C5C5C'
  },

  btnAdd: {
    backgroundColor: '#2e7d32',
    width: 120,
    paddingTop: 5,
    paddingBottom: 5,
    textAlign: 'center',
    color: '#fff',
    borderRadius: 8,
    fontSize: 20,
    marginRight: 40

  },

  btnCancel: {
    backgroundColor: '#ef6c00',
    width: 120,
    paddingTop: 5,
    paddingBottom: 5,
    textAlign: 'center',
    color: '#fff',
    borderRadius: 8,
    fontSize: 20,
  },
});
