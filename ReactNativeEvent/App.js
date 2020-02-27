import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

export default class HelloWorld extends Component {
  render() {
    return (
      <View style={styles.center}>
        <Text style={styles.red}>
          Hello Event_Name
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  red: {
    color: 'red',
  },
  center: {
    alignItems: 'center',
    paddingTop: 30, // For iOS
  }
});