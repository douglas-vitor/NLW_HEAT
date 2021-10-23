import React from "react";
import {View} from 'react-native';
import {Header} from '../../components/header';
import {MessageList} from '../../components/messageList';
import {SignInBox} from '../../components/signInBox';
import {SendMessageForm} from '../../components/sendMessageForm';

import {styles} from './styles';

export function Home() {
    return(
        <View style={styles.container}>
            <Header />
            <MessageList />
            <SendMessageForm />
        </View>
    )
}