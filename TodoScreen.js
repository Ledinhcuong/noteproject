
import React from 'react';
import { Button, View, Text, ListView, CheckBox } from 'react-native';

export default class TodoScreen extends React.Component {
  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(['row 1', 'row 2']),
    };
  }

  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={
          (rowData) =>
            <View>
              <Text>{rowData}</Text>
              <CheckBox
                title='Click Here'
                checked={this.state.checked}
              />
            </View>
        }
      />
    );
  }
}
