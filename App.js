import React, { Component } from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {decode, encode} from 'base-64'

if (!global.btoa) {  global.btoa = encode }

if (!global.atob) { global.atob = decode }

import MapView, { Marker, Callout } from 'react-native-maps';
import MapPage from "./src/MapPage";
import Chat from "./src/Chat";
import Profile from "./src/Profile";
import Preference from "./src/Preference";
import AllUsers from "./src/AllUsers";
import UserArray from "./src/UserArray";
import UserList from "./src/UserList";
import Edit from "./src/Edit";
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
        <Stack.Navigator initialRouteName="MapPage">
          <Stack.Screen
              name="Map"
              component={MapPage}
          />
          <Stack.Screen
              name="Message"
              component={Chat}
          />
          <Stack.Screen
              name="Profile"
              component={Profile}
          />
          <Stack.Screen
              name="Preference"
              component={Preference}
          />
          <Stack.Screen
              name="AllUsers"
              component={AllUsers}
          />
          <Stack.Screen
              name="Edit"
              component={Edit}
          />
          <Stack.Screen
              name="UserList"
              component={UserList}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
