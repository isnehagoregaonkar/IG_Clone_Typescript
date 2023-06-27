import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react';
import LoginForm from '../components/Forms/LoginForm';
import { INSTAGRAM_LOGO } from '../utils/Constants';
import { RouterProps } from '../utils/PropTypes';

const LoginScreen = ({navigation}:RouterProps) => {
    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image
                    source={{ uri: INSTAGRAM_LOGO, height: 100, width: 100 }} />
            </View>
            <LoginForm navigation={navigation} />
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