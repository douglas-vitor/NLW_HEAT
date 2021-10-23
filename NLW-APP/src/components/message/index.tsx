import React from "react";
import {View, Text} from 'react-native';
import { UserPhoto } from "../userPhoto";
import {styles} from './styles';

export function Message() {
    return (
        <View style={styles.container}>
            <Text style={styles.message}>
                Texto da mensagem
            </Text>
            <View style={styles.footer}>
                <UserPhoto 
                imageUri="https://github.com/douglas-vitor.png"
                sizes="SMALL" 
                />

                <Text style={styles.userName}>
                    Nome do usuário
                </Text>
            </View>
        </View>
    );
}