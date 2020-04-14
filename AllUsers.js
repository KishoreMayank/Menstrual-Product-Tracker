console.log(require('./UserArray'));
var mod = require('./UserArray');
// console.log(mod);
//
// console.log(mod[0]);
// console.log(mod[1]);
// console.log(mod[2]);


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
    //console.log(require('./UserArray'));
    var mod = require('./UserArray');
    return (
      <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.headerContent}>
                <Text style={styles.name}>User List</Text>
            </View>
          </View>

          <View style={styles.body}>
            <View style={styles.item}>
              <Text style={styles.item}>User 1:</Text>
              <View style={styles.infoContent}>
                <Text style={styles.info}> {mod[0][0]} {mod[0][1]}</Text>
              </View>
              <Button
                onPress={() => this.props.navigation.navigate('Message')}
                title="Message User"
                color="#D3D3D3"
              />
            </View>

            <View style={styles.item}>
              <Text style={styles.item}>User 2:</Text>
              <View style={styles.infoContent}>
                <Text style={styles.info}> {mod[1][0]} {mod[1][1]}</Text>
              </View>
              <Button
                onPress={() => this.props.navigation.navigate('Message')}
                title="Message User"
                color="#D3D3D3"
              />
            </View>

            <View style={styles.item}>
              <Text style={styles.item}>User 3:</Text>
              <View style={styles.infoContent}>
                <Text style={styles.info}> {mod[2][0]} {mod[2][1]}</Text>
              </View>
              <Button
                onPress={() => this.props.navigation.navigate('Message')}
                title="Message User"
                color="#D3D3D3"
              />
            </View>

            <View style={styles.item}>
            <Text style={styles.item}>User 4:</Text>
              <View style={styles.infoContent}>
                <Text style={styles.info}> {mod[3][0]} {mod[3][1]}</Text>
              </View>
              <Button
                onPress={() => this.props.navigation.navigate('Message')}
                title="Message User"
                color="#D3D3D3"
              />
            </View>

            <View style={styles.item}>
            <Text style={styles.item}>User 5:</Text>
              <View style={styles.infoContent}>
                <Text style={styles.info}> {mod[4][0]} {mod[4][1]}</Text>
              </View>
              <Button
                onPress={() => this.props.navigation.navigate('Message')}
                title="Message User"
                color="#D3D3D3"
              />
            </View>

          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    margin: 20
  },
  header:{
    backgroundColor: "#DCDCDC",
  },
  headerContent:{
    padding:30,
    alignItems: 'center',
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
  },
  name:{
    fontSize:36,
    color:"#000000",
    fontWeight:'600',
  },
  userInfo:{
    fontSize:16,
    color:"#778899",
    fontWeight:'600',
  },
  body:{
    backgroundColor: "#778899",
    height:500,
    alignItems:'center',
  },
  item:{
    paddingLeft:5,
    fontSize:18,
    marginTop:20,
    color: "#add8e6",
    flexDirection : 'row',
    fontWeight: 'bold',
  },
  infoContent:{
    flex:1,
    alignItems:'flex-start',
    paddingLeft:5
  },
  iconContent:{
    flex:1,
    alignItems:'flex-end',
    paddingRight:5,
  },
  icon:{
    width:30,
    height:30,
    marginTop:20,
  },
  info:{
    fontSize:18,
    marginTop:20,
    color: "#FFFFFF",
  }
});
