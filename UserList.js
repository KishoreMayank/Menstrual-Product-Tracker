import React, { Component } from 'react';
import {Button, StyleSheet, Text, View} from "react-native";
import {getAllUsers} from "./FirebaseDB";

export default class UserList extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        //getAllUsers().then( r => console.log(r)).catch(e => console.log(e));
        this.state = {
            users: []
        }
    };

    componentDidMount() {

    }
    render() {
        let userItemComponent =
            <View style={styles.item}>
                <Text style={styles.item}>User 1:</Text>
                <View style={styles.infoContent}>
                    <Text style={styles.info}> Person 1 </Text>
                </View>
                <Button
                    onPress={() => this.props.navigation.navigate('Message')}
                    title="Message User"
                    color="#D3D3D3"
                />
            </View>;
        return (
            <View style={styles.body}>
                {userItemComponent}
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
