/**
 * Tác giả: Lê Đình Cường
 * ListItem
 
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';


export default class NoteItem extends Component {

    constructor(props) {
        super(props);
       
    }

  render() {
    return (
        <TouchableOpacity style={styles.boxContent}>
            <View>
                <Text style={styles.TitleNote}>{this.props.title}</Text>
                <Text style={styles.date}> {this.props.date} </Text>
                <Text numberOfLines={3}> {this.props.content} </Text>

            </View>
        </TouchableOpacity>
        
     
    );
  }
}

const styles = StyleSheet.create({
  TitleNote: {
   color: "#ff3b30",
   fontWeight: "bold",
   fontSize: 18,

  },

  date: {
      marginBottom: 8,


  },

  boxContent: {
      backgroundColor: "#9FA0A4",
      paddingTop: 15,
      paddingBottom: 15,
      paddingLeft: 5,
      borderRadius: 8,
      marginBottom: 10

    


  }

 
});
