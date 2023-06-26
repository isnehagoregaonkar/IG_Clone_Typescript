import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react';
import LoginForm from '../components/Login/LoginForm';

const INSTAGRAM_LOGO = 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png';

const LoginScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image
                    source={{ uri: INSTAGRAM_LOGO, height: 100, width: 100 }} />
            </View>
            <LoginForm/>
        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#fff',
        paddingTop:50,
        paddingHorizontal:12
    },
    logoContainer: {
        alignItems:'center',
        marginTop:60
    }
})