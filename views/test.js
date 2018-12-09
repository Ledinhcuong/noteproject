import React, { Component } from 'react';
import { View } from 'react-native';
import { CheckBox } from 'react-native-elements';

export default class Test extends React.Component {
    constructor(props){
        super(props);
     
        this.state ={
          isLoading: true,
          checked: false
        }
    }

    render() {
        return (
        <View>
            <CheckBox
              right
              title={'Mark this done'}
              checked={this.state.checked}
              onPress={() => this.setState({checked: !this.state.checked})}
            />
            
            <CheckBox
              center
              title='Click Here'
              checkedIcon='dot-circle-o'
              uncheckedIcon='circle-o'
              checked={this.state.checked}
            />
        
        </View>
        );
    }

}