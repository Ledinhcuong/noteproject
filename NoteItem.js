/**
 * Tác giả: Lê Đình Cường
 * ListItem
 
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import DetailNote from './DetailNote';


export default class NoteItem extends React.Component {

    constructor(props) {
        super(props);
       
    }

  render() {
    return (
        <View style={styles.boxContent}>
            <View>
                <Text style={styles.TitleNote}>{this.props.title}</Text>
                <Text style={styles.date}> {this.props.date} </Text>
                <Text numberOfLines={3} style={{color:'#ceced2'}}> {this.props.content} </Text>

            </View>
        </View>
        
     
    );
  }
}

const styles = StyleSheet.create({
  TitleNote: {
   color: "#4527a0",
   fontWeight: "bold",
   fontSize: 16,

  },

  date: {
      marginBottom: 8,
      color: '#ceced2',



  },

  boxContent: {
    backgroundColor: '#5C5C5C',
      paddingTop: 15,
      paddingBottom: 15,
      paddingLeft: 5,
      borderRadius: 12,
      marginBottom: 10

    
  }

 
});
