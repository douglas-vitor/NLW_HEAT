import React, {useState} from "react";
import {TextInput, View} from 'react-native';
import { COLORS } from "../../theme";
import { Button } from "../button";

import {styles} from './styles';

export function SendMessageForm() {
    const [message, setMessage] = useState('');
    const [sendMessage, setSendMessage] = useState(false);

    return (
        <View style={styles.container}>
            <TextInput 
                keyboardAppearance="dark"
                placeholder="Qual sua expectativa para o evento?"
                placeholderTextColor={COLORS.GRAY_PRIMARY}
                multiline
                maxLength={140}
                onChangeText={setMessage}
                value={message}
                style={styles.input}
                editable={!sendMessage}
            />

            <Button 
                title="ENVIAR MENSAGEM"
                backgroundColor={COLORS.PINK}
                color={COLORS.WHITE}
            />

        </View>
    );
}