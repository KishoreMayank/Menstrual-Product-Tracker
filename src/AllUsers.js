import UserList from "./UserList";

console.log(require('./UserArray'));
var mod = require('./UserArray');

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
} from 'react-native';

export default class Profile extends Component {
  constructor(props) {
      super(props);
      console.log(props);
  }

  render() {
    return (
      <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.headerContent}>
                <Text style={styles.name}>User List</Text>
            </View>
          </View>
          <View style={styles.body}>
            <UserList navigation={this.props.navigation}/>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header:{
    backgroundColor: "#DCDCDC",
  },
  headerContent:{
    padding:30,
    alignItems: 'center',
  },
  name:{
    fontSize:36,
    color:"#000000",
    fontWeight:'600',
  },
  body:{
    backgroundColor: "#778899",
    minHeight:1000,
    alignItems:'center',
  },
});
