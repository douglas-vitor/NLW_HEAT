import React from "react";
import {ScrollView} from 'react-native';
import {Message} from '../message';
import {styles} from './styles';

export function MessageList() {
    const message = {
        id: '1',
        text: 'string',
        user: {
            name: 'nameaqui',
            avatar_url: 'https://github.com/douglas-vitor.png',
        }
    }

    return (
        <ScrollView 
        style={styles.container}
        contentContainerStyle={styles.content}
        keyboardShouldPersistTaps="never"
        >
            <Message data={message} />
            <Message data={message} />
            <Message data={message} />
        </ScrollView>
    );
}