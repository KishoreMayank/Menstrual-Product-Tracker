import React, { Component } from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import MapView, { Marker, Callout } from 'react-native-maps';
import MapPage from "./MapPage";
import Chat from "./Chat";
import { StyleSheet, Text, View, Button, CheckBox, Dimensions, TouchableOpacity, AlertIOS,} from 'react-native';

const {width, height} = Dimensions.get('window')

const ASPECT_RATIO = width / height;

const Stack = createStackNavigator();


export default class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Map">
          <Stack.Screen
              name="Map"
              component={MapPage}
          />
          <Stack.Screen
              name="Message"
              component={Chat}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
