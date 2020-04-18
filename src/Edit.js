import NumericInput from 'react-native-numeric-input';
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
} from 'react-native';
import {
 Dropdown }
 from 'react-native-material-dropdown';

export default class Edit extends Component {
  constructor(props) {
      super(props);
      console.log(props);
  }
  _onPressButton() {
  alert('You tapped the button!')
}

  render() {

    return (
      <View style={styles.container}>
          <View style={styles.header}>
          <Text style={styles.headerContent}>Please edit the availibility of items at this location</Text>
          <Text style={styles.headerContent}>Pads:</Text>
          <NumericInput type='up-down' onChange={value => console.log(value)} />

          <Text style={styles.headerContent}>Tampons:</Text>
          <NumericInput type='up-down' onChange={value => console.log(value)} />

          <Text style={styles.headerContent}>Panty Liners:</Text>
          <NumericInput type='up-down' onChange={value => console.log(value)} />

          <Button
            onPress={() => alert('Changes have been saved!')}
            title="Save Changes"
            color="#841584"
          />
          <Button
            onPress={() => this.props.navigation.navigate('UserList')}
            title="See Users Nearby"
            color="#841584"
          />


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
    paddingLeft:5,
    fontSize:18,
    marginTop:20,
    color: "#000000",
    flexDirection : 'row',
    fontWeight: 'bold',
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
    fontSize:22,
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
