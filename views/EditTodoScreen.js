
import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';



export default class EditTodoScreen extends Component {
  constructor (props) {
    super (props);
    this.state = {text: 'Useless Placeholder'};
  }

  render () {
    /* 2. Get the param, provide a fallback value if not available */
    const { navigation } = this.props;
    const content = navigation.getParam('todoContent');

    return (
      <View style={{flex: 1, backgroundColor: "#111", padding: 10}}>

        <View>
          <Text style={[styles.h1, styles.white]}>Sửa nhiệm vụ</Text>
          <TextInput
            placeholder="Nhập nhiệm vụ"
            placeholderTextColor= "#fff"
            defaultValue={content}
            numberOfLines={10}
            maxLength={400}
            multiline={true}
            editable={true}
            scrollEnabled={true}
            style={[styles.textInputArea, styles.distance]}
          />

          <View style={[{ flexDirection: 'row', justifyContent: 'space-around'}, styles.distance]}>
            <TouchableOpacity>
              <Text style={styles.button}>
                Save
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
            onPress={() => this.props.navigation.goBack (null)}>
              <Text style={styles.button}>
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
  h1: {fontSize: 30},
  distance: {marginTop: 40},
  white: {color: 'white'},
  button: {
    backgroundColor: 'grey',
    width: 120,
    textAlign: 'center',
    padding: 10
  },
  textInputArea: {
    textAlign: 'left',
    backgroundColor: 'rgba(255, 255, 255, .3)',
    color: 'white',
    fontSize: 20,
  }
});
