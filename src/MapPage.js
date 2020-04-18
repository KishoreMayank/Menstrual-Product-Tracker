import React, { Component } from 'react';
import 'react-native-gesture-handler';
import MapView, { Marker, Callout } from 'react-native-maps';
import { StyleSheet, Text, View, Button, CheckBox, Dimensions, TouchableOpacity, AlertIOS,} from 'react-native';

const {width, height} = Dimensions.get('window')

const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

export default class MapPage extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.center = [0,0];
        this.state = {
            longitude: 37.600425,
            latitude: -122.385861,
            error: null,
            coordsLoc: [[33.773540, -84.398209], [33.774195, -84.398672], [33.774458, -84.396374], [33.776896, -84.396139]]
        };
    }

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(position => {
                this.setState({
                    latitude: position.coords.coordsLoc[0][0],
                    longitude: position.coords.coordsLoc[0][1],
                    error: null
                });
            },
            error => this.setState({error: error.message}),
            { enableHighAccuracy: true, timeout: 2000, maximumAge: 2000}
        );

        this.props.navigation.setOptions({
            headerRight: () => (
                <Button
                    onPress={() => alert('The nearest product is at: Student' +
                        ' Center Bathroom Level 1')}
                    title="Find Product"
                    color="#0a84ff"
                />
            ),
            headerLeft: () => (
                <Button
                    onPress={() => this.props.navigation.navigate('Profile')}
                    title="Profile"
                    color="#0a84ff"
                />
            ),
        });
    }

    openChat(key) {
        this.props.navigation.navigate('Edit')
    }

    render() {
        return (
            <View style={styles.container}>
                <MapView
                    style={styles.map}
                    region={{
                        latitude: this.state.coordsLoc[0][0],
                        longitude: this.state.coordsLoc[0][1],
                        latitudeDelta: 0.0022,
                        longitudeDelta: 0.0121,
                    }}
                >
                    <Marker coordinate = {this.state} />
                    {this.state.coordsLoc[0] != null && this.state.coordsLoc.map((marker, index) => (
                        <Marker
                            key = {index}
                            coordinate = {{
                                latitude: marker[0],
                                longitude: marker[1]
                            }}
                            onCalloutPress={() => this.openChat(index)}
                            title={marker[2]}
                        >
                            <Callout tooltip>
                                <View style={styles.bubble} >
                                    <Button title = "More Details"/>
                                </View>
                            </Callout>
                        </Marker>
                    ))}
                </MapView>
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
        paddingTop: 200,
        justifyContent: 'flex-start',
    },
    titleText: {
        fontSize: 30,
        backgroundColor: 'white',
        opacity: 0.75,
    },
    buttonContainer: {
        margin: 20,
    },
    bubble: {
        flex: 1,
        backgroundColor: 'rgba(255,255,255,0.7)',
        paddingHorizontal: 18,
        paddingVertical: 12,
        borderRadius: 20,
    },
    map: {
        position: 'absolute',
        height : SCREEN_HEIGHT,
        width : SCREEN_WIDTH,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
});
