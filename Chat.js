import React from 'react'
import { GiftedChat } from 'react-native-gifted-chat'
import { StyleSheet, View, ScrollView, Button, CheckBox, Dimensions, TouchableOpacity, AlertIOS,} from 'react-native';

const {width, height} = Dimensions.get('window')

export default class Chat extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
    }
    state = {
        messages: [],
    };

    componentDidMount() {
        console.log("componentDidMount");
        this.setState({
            messages: [
                {
                    _id: 1,
                    text: 'Hello there!',
                    createdAt: new Date(),
                    user: {
                        _id: 2,
                        name: 'React Native',
                        avatar: 'https://placeimg.com/140/140/any',
                    },
                },
            ],
        })
    }

    onSend(messages = []) {
        this.setState(previousState => ({
            messages: GiftedChat.append(previousState.messages, messages),
        }))
    }

    render() {
        return (
            <View style={styles.container}>
                <GiftedChat
                    messages={this.state.messages}
                    onSend={messages => this.onSend(messages)}
                    user={{
                        _id: 1,
                    }}
                />
            </View>

        )
    }
}

const SCREEN_HEIGHT = height;
const SCREEN_WIDTH = width;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#add8e6',
        height: 100
    },
    titleText: {
        fontSize: 30,
    },
    bubble: {
        flex: 1,
        backgroundColor: 'rgba(255,255,255,0.7)',
        paddingHorizontal: 18,
        paddingVertical: 12,
        borderRadius: 20,
    },
    mainView: {
        position: 'absolute',
        height : SCREEN_HEIGHT - 100,
        width : SCREEN_WIDTH,
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
});
