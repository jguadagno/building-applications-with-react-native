import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Platform,
  SectionList,
} from 'react-native';

require('./services/array-extensions');

export default class SectionListBasics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      isError: false,
      userList: null,
      groupedUserList: null,
    };
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={[styles.container, styles.horizontal]}>
          <ActivityIndicator size="large" />
        </View>
      );
    }

    if (this.state.isError) {
      return (
        <View style={[styles.container, styles.horizontal]}>
          <Text style={styles.red}>Failed to connect to the service.</Text>
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <SectionList
          sections={this.state.groupedUserList}
          keyExtractor={(item, index) => item + index}
          renderItem={({item}) => (
            <Text style={styles.item}>
              {item.name.last}, {item.name.first}
            </Text>
          )}
          renderSectionHeader={({section: {title}}) => (
            <Text style={styles.header}>{title}</Text>
          )}
        />
      </View>
    );
  }

  componentDidMount() {
    // If Android 10.0.2.2 is not working
    // https://stackoverflow.com/questions/6760585/accessing-localhostport-from-android-emulator/56769746#56769746
    var uri =
      Platform.OS === 'android' ? 'http://10.0.2.2' : 'http://localhost';
    uri = uri + ':3000/results';
    fetch(uri)
      .then(response => response.json())
      .then(results => {
        var sortedArray = results.map(x => x).sortByName();
        sortedArray.forEach(user => {
          user.lastInitial = user.name.last.charAt(0);
        });

        var sectionListArray = sortedArray
          .map(x => x)
          .groupByIntoArray(user => user.lastInitial);

        this.setState(
          {
            isLoading: false,
            userList: sortedArray,
            groupedUserList: sectionListArray,
          },
          function() {},
        );
      })
      .catch(error => {
        this.setState({isLoading: false, isError: true});
      });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  red: {
    color: 'red',
  },
  item: {
    backgroundColor: 'white',
  },
  header: {
    fontSize: 32,
    backgroundColor: 'azure',
    paddingBottom: 5,
    paddingTop: 10,
  },
});