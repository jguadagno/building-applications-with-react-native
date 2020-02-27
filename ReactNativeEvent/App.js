import React, {Component} from 'react';
import {Text, TextInput, View} from 'react-native';

export default class FlagTranslator extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    return (
      <View style={{padding: 50}}>
        <TextInput
          style={{height: 40}}
          placeholder="Type here to translate!"
          onChangeText={text => this.setState({text})}
          value={this.state.text}
        />
        <Text style={{padding: 10, fontSize: 42}}>
          {this.state.text
            .split(' ')
            .map(word => word && '🇮🇳')
            .join(' ')}
        </Text>
      </View>
    );
  }
}