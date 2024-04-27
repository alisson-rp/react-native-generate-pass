import React from "react";
import { View } from "react-native";
import { StatusBar } from "expo-status-bar";
import styles from '@/screens/Home/Style';
import { Logo } from "@/components/Logo/Logo";
import { Button } from "@/components/Button/Button";

export default function Home() {
    return(
        <View style={styles.appContainer}>
            <View style={styles.logoContainer}>
                <Logo/>
            </View>
            <View style={styles.inputConteiner}>
                <Button/>
            </View>
            
            <StatusBar style="auto" />
        </View>
    );
}
