import { Button, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'

const LoginForm = () => {
    return (
        <View style={styles.wrapper}>
            <View style={styles.inputField}>
                <TextInput
                    placeholder='Phone number, Username or Email'
                    placeholderTextColor='#444'
                    autoCapitalize='none'
                    keyboardType='email-address'
                    textContentType='emailAddress'
                    autoFocus={true}
                />
            </View>
            <View style={styles.inputField}>
                <TextInput
                    placeholder='Password'
                    placeholderTextColor='#444'
                    autoCapitalize='none'
                    textContentType='password'
                    autoCorrect={false}
                    secureTextEntry={true}
                />
            </View>
            <View style={{ alignItems: 'flex-end', marginBottom: 30 }}>
                <Text style={{ color: '#6bb0e5' }}>Forgot Password</Text>
            </View>
            <Pressable style={styles.button} onPress={()=>console.log('clicked me')} >
                <Text style={{fontSize:20, color:'#fff', fontWeight:'600'}}>Log in</Text>
            </Pressable>
            <View style={styles.signupContainer}>
                <Text >Don't have an account?</Text>
                <TouchableOpacity>
                    <Text style={{color:'#6bb0e5'}}> Sign Up</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default LoginForm

const styles = StyleSheet.create({
    wrapper: {
        marginTop: 80
    },
    inputField: {
        borderRadius: 4,
        padding: 12,
        backgroundColor: '#fafafa',
        marginBottom: 10,
        borderWidth: 1
    },
    button:{
        backgroundColor:'#0096f6',
        alignItems:'center',
        justifyContent:'center',
        minHeight:42,
        borderRadius:4
    },
    signupContainer:{
        flexDirection:'row',
        justifyContent:'center',
        marginTop:50
    }
})