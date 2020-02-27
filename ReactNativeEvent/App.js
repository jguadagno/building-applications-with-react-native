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
        <Text style={styles.red}>Hello Event Name</Text>
      </View>
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