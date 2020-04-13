
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

export default class Preference extends Component {
  constructor(props) {
      super(props);
      console.log(props);
  }
  _onPressButton() {
  alert('You tapped the button!')
}

  render() {
    let ProductPref = [{
      value:'Tampon',
    }, {
      value:'Pad',
    }];
    let Flow = [{
      value:'Light',
    }, {
      value:'Medium',
    }, {
      value:'Heavy',
    }];
    let Brand = [{
      value:'Kotex',
    }, {
      value:'Tampax',
    }];
    return (
      <View style={styles.container}>
          <View style={styles.header}>
          <Text style={styles.headerContent}>Let us know your preferences!</Text>
          <Dropdown
            label='Product Preference'
            data={ProductPref}
          />
          <Dropdown
            label='Flow'
            data={Flow}
          />
          <Dropdown
            label='Brand Preference'
            data={Brand}
          />
          </View>

          <View style={styles.body}>
            <View style={styles.buttonContainer}>
              <Button
                onPress={() => alert('Your preferences have been saved!')}
                title="Save Preferences"
                color="#841584"
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
