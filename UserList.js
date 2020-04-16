import React, { Component } from 'react';
import {Button, FlatList, StyleSheet, Text, View} from "react-native";
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
        getAllUsers()
            .then( r => {
                console.log(r);
                this.setState({
                    users: r,
                });
            })
            .catch(e => console.log(e));
    }

    render() {
        return (
            <FlatList
                contentContainerStyle={styles.body}
                data={this.state.users.map(user => {
                    user.key = user.email;
                    return user
                })}
                renderItem={({item}) =>
                    <View style={styles.item}>
                        <Text style={styles.item}>User {this.state.users.indexOf(item) + 1}: </Text>
                        <Text style={styles.info}> {item.fName + " " + item.lName} </Text>
                        <View style={styles.button}>
                            <Button
                                onPress={() => this.props.navigation.navigate('Message')}
                                title="Message User"
                                color="#D3D3D3"
                            />
                        </View>

                    </View>}
            />
        );
    }
}

const styles = StyleSheet.create({
    name:{
        fontSize:36,
        color:"#000000",
        fontWeight:'600',
    },
    body:{
        backgroundColor: "#778899",
        height:500,
        alignItems:'flex-start',
    },
    button:{
        marginTop:12,
        alignItems: 'flex-end',
    },
    item:{
        paddingLeft:5,
        fontSize:18,
        marginTop:20,
        color: "#add8e6",
        flexDirection : 'row',
        fontWeight: 'bold',
    },
    info:{
        fontSize:18,
        marginTop:20,
        color: "#FFFFFF",
    }
});
