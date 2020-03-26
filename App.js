import React, { Component } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, Text, View, Button, CheckBox, Dimensions, TouchableOpacity, AlertIOS,} from 'react-native';
// import {REACT_APP_GMAPS_KEY} from 'react-native-dotenv';


const {width, height} = Dimensions.get('window')

const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

export default class App extends Component {

  constructor(props) {
    super(props);
    this.center = [0,0];
    this.state = {
      longitude: 37.600425,
      latitude: -122.385861,
      error: null,
    };
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(position => {
      this.setState({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        error: null
      });
    },
    error => this.setState({error: error.message}),
    { enableHighAccuracy: true, timeout: 2000, maximumAge: 2000}
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          region={{
            latitude: this.state.latitude,
            longitude: this.state.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker coordinate = {this.state} />
        </MapView>
  
        <Text style={styles.titleText}> Nearest Feminine Products </Text>
        <Text>Click button below to generate nearest location</Text>

        {/* <Button title = "Generate" onPress={() => alert('Your epicenter is 168 Matthews Farm Rd')}/> */}
        <Button title = "Generate" onPress={() => alert('The nearst product is the Student Center womens bathroom on level 1')}/>
      
      </View>
    );
  }
}

const SCREEN_HEIGHT = height
const SCREEN_WIDTH = width

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#add8e6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 30,
  },
  map: {
    position: 'absolute',
    height : SCREEN_HEIGHT,
    width : SCREEN_WIDTH,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});