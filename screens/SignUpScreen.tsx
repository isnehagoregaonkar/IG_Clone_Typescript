import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import { INSTAGRAM_LOGO } from '../utils/Constants'
import SignUpForm from '../components/Forms/SignUpForm'
import { RouterProps } from '../utils/PropTypes'

const SignUpScreen = ({navigation}:RouterProps) => {
  return (
    <View style={styles.container}>
    <View style={styles.logoContainer}>
        <Image
            source={{ uri: INSTAGRAM_LOGO, height: 100, width: 100 }} />
    </View>
    <SignUpForm navigation={navigation}/>
</View>
  )
}

export default SignUpScreen

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