import React from "react";
import {View} from 'react-native';
import {Header} from '../../components/header';
import {MessageList} from '../../components/messageList';
import {SignInBox} from '../../components/signInBox';
import {SendMessageForm} from '../../components/sendMessageForm';
import { useAuth } from "../../hooks/auth";

import {styles} from './styles';

export function Home() {
    const {user} = useAuth();

    return(
        <View style={styles.container}>
            <Header />
            <MessageList />
            {user ? <SendMessageForm /> : <SignInBox />}
        </View>
    )
}