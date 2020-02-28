import * as React from 'react';
import {Button, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {StyleSheet} from 'react-native';

import FlatlistExample from './screens/flatList';
import SectionListExample from './screens/sectionList';

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  red: {
    color: 'red',
  },
});

function HomeScreen({navigation}) {
  return (
    <View style={[styles.center]}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
      <Button
        title="Go to Flat List"
        onPress={() => navigation.navigate('FlatList')}
      />
      <Button
        title="Go to Section List"
        onPress={() => navigation.navigate('SectionList')}
      />
    </View>
  );
}

function DetailsScreen({navigation}) {
  return (
    <View style={styles.center}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push('Details')}
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="FlatList" component={FlatlistExample} />
        <Stack.Screen name="SectionList" component={SectionListExample} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;