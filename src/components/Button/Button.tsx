import React, { useState } from 'react';
import { Text, Pressable, View } from 'react-native';

import { styles } from '@/components/Button/ButtonStyles';
import { TextInputC } from '../TextInput/TextInput';
import generatePass from '@/services/passwordService';
import * as Clipboard from 'expo-clipboard';

export function Button() {
    const [pass, setPass] = useState('')

    function handleGenerateButton() {
        let generateToken = generatePass()
        setPass(generateToken)
    }

    function handleCopyButton() {
        Clipboard.setStringAsync(pass)
    }

    return (
        <>
            <TextInputC pass={pass}/>
            <View style={styles.ViewButton}>
                <Pressable
                    onPress={handleGenerateButton}
                    style={styles.button}
                >
                    <Text style={styles.text}>GENERATE</Text>
                </Pressable>
                <Pressable
                    onPress={handleCopyButton}
                    style={styles.button}
                >
                    <Text style={styles.text}>⚡ COPY</Text>
                </Pressable>
            </View>
        </>
    );
}