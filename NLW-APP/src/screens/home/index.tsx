import React from "react";
import {View} from 'react-native';
import {Header} from '../../components/header';
import {MessageList} from '../../components/messageList';

import {styles} from './styles';

export function Home() {
    return(
        <View style={styles.container}>
            <Header />
            <MessageList />
        </View>
    )
}