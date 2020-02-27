import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

export default class HelloWorld extends Component {
  render() {
    return (
      <View style={styles.centerView}>
        <Text style={styles.red}>
          Hello Event{'\n'}
          <Greeting name="Joe" />
          <Greeting name="Dee" />
        </Text>
      </View>
    );
  }
}

class Greeting extends Component {
  render() {
    return (
      <Text>
        Hello {this.props.name}!{'\n'}
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  center: { alignItems: 'center'},
  red: { color: 'red'},
  centerView: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
});