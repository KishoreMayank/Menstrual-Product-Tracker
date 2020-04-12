
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
  _onPressButton() {
  alert('You tapped the button!')
}

  render() {
    return (
      <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.headerContent}>
                <Image style={styles.avatar}
                  source={{uri: 'https://bootdey.com/img/Content/avatar/avatar5.png'}}/>
                <Text style={styles.name}>Amy Cohen</Text>
                <Text style={styles.userInfo}>acohen@gmail.com </Text>
                <Text style={styles.userInfo}>Florida </Text>
            </View>
          </View>

          <View style={styles.body}>
            <View style={styles.buttonContainer}>
              <Button
                onPress={this._onPressButton}
                title="Go to Map"
                color="#841584"
              />
            </View>
            <View style={styles.item}>
              <Text style={styles.item}>Birthday:</Text>
              <View style={styles.infoContent}>
                <Text style={styles.info}> 05/02/2001</Text>
              </View>
            </View>

            <View style={styles.item}>
              <Text style={styles.item}>Landmark Preference:</Text>
              <View style={styles.infoContent}>
                <Text style={styles.info}> Student Center</Text>
              </View>
            </View>

            <View style={styles.item}>
              <Text style={styles.item}>Distance to Travel:</Text>
              <View style={styles.infoContent}>
                <Text style={styles.info}> 0.5 miles</Text>
              </View>
            </View>

            <View style={styles.item}>
            <Text style={styles.item}>Date of Start of Next Cycle:</Text>
              <View style={styles.infoContent}>
                <Text style={styles.info}> 05/14/2020</Text>
              </View>
            </View>

            <View style={styles.item}>
            <Text style={styles.item}>Friends With:</Text>
              <View style={styles.infoContent}>
                <Text style={styles.info}>Marie, Lucy, Cameron, and Fiona</Text>
              </View>
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
