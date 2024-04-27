import React from 'react';
import { Image, Text, View } from 'react-native';

import { styles } from '@/components/Logo/LogoStyles';
import superLogo from '../../../assets/super.png'

export function Logo() {
  return (
    <View>
        <Text style={styles.title}>
            SUPER PASSWORD 
        </Text>
        <Image 
            source={superLogo}
            style={{
                resizeMode:'contain',
                height:180
            }} 
        />
    </View>
  );
}