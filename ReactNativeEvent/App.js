import React, {Component} from 'react';
import {ScrollView, Image, Text, StyleSheet} from 'react-native';

export default class IScrolledDownAndWhatHappenedNextShockedMe extends Component {
  render() {
    //let uri = 'https://www.josephguadagno.net/assets/icons/favicon-96x96.png';
    let uri = require('./img/favicon-96x96.png');
    return (
      <ScrollView>
        <Text style={styles.largeFont}>This might go on for a bit</Text>
        <Image source={uri} style={styles.image} />
        <Image source={uri} style={styles.image} />
        <Image source={uri} style={styles.image} />
        <Image source={uri} style={styles.image} />
        <Image source={uri} style={styles.image} />
        <Text style={styles.largeFont}>If you like</Text>
        <Image source={uri} style={styles.image} />
        <Image source={uri} style={styles.image} />
        <Image source={uri} style={styles.image} />
        <Image source={uri} style={styles.image} />
        <Image source={uri} style={styles.image} />
        <Text style={styles.largeFont}>Scrolling down</Text>
        <Image source={uri} style={styles.image} />
        <Image source={uri} style={styles.image} />
        <Image source={uri} style={styles.image} />
        <Image source={uri} style={styles.image} />
        <Image source={uri} style={styles.image} />
        <Text style={styles.largeFont}>and see me...</Text>
        <Image source={uri} style={styles.image} />
        <Image source={uri} style={styles.image} />
        <Image source={uri} style={styles.image} />
        <Image source={uri} style={styles.image} />
        <Image source={uri} style={styles.image} />
        <Text style={styles.largeFont}>you are in the right place</Text>
        <Image source={uri} style={styles.image} />
        <Image source={uri} style={styles.image} />
        <Image source={uri} style={styles.image} />
        <Image source={uri} style={styles.image} />
        <Image source={uri} style={styles.image} />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  largeFont: {
    fontSize: 96,
  },
  image: {
    width: 96,
    height: 96,
  },
});
