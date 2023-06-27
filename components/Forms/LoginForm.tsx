import { Button, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native'
import React from 'react'
import { Formik } from 'formik';
import * as Yup from 'yup';
import Validator from 'email-validator';
import { RouterProps } from '../../utils/PropTypes';
import { FirebaseAuth, FirebaseApp } from '../../utils/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';


type LoginProps={
    email:string
    password:string
}

const LoginForm = ({ navigation }: RouterProps) => {

    const LoginFormSchema = Yup.object().shape({
        email: Yup.string().email().required('An email is requiredß'),
        password: Yup.string().required().min(8, 'Your password must contain at least 8 characters')
    });

    const onLogin = async ({email, password}:LoginProps) => {
        try {
            await signInWithEmailAndPassword(FirebaseAuth,email,password);
            console.log("Firebase logged in",email,password)
        } catch (error) {
            Alert.alert('Error Occurred',error+'',[
                {
                    text:'Ok',
                    onPress:()=>console.log("Ok"),
                    style:'cancel'
                },
                {
                    text:'Sign Up',
                    onPress:()=>navigation.navigate('SignUpScreen')
                }
            ])
        }
    }

    return (
        <View style={styles.wrapper}>
            <Formik
                initialValues={{ email: '', password: '' }}
                validationSchema={LoginFormSchema}
                onSubmit={values => onLogin(values)}
                validateOnMount={true}
            >
                {({ handleChange, handleBlur, handleSubmit, values, isValid }) => (
                    <>
                        <View style={[styles.inputField, {
                            borderColor: values.email.length < 1 || Validator.validate(values.email) ? '#ccc' : '#f00'
                        }]}>
                            <TextInput
                                placeholder='Phone number, Username or Email'
                                placeholderTextColor='#444'
                                autoCapitalize='none'
                                keyboardType='email-address'
                                textContentType='emailAddress'
                                autoFocus={true}
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                value={values.email}
                            />
                        </View>
                        <View style={[styles.inputField, {
                            borderColor: values.password.length > 8 ? '#ccc' : '#f00'
                        }]}>
                            <TextInput
                                placeholder='Password'
                                placeholderTextColor='#444'
                                autoCapitalize='none'
                                textContentType='password'
                                autoCorrect={false}
                                secureTextEntry={true}
                                onChangeText={handleChange('password')}
                                onBlur={handleBlur('password')}
                                value={values.password}
                            />
                        </View>
                        <View style={{ alignItems: 'flex-end', marginBottom: 30 }}>
                            <Text style={{ color: '#6bb0e5' }}>Forgot Password</Text>
                        </View>
                        <Pressable
                            style={[styles.button, { backgroundColor: isValid ? '#6bb0e5' : '#9acaf7' }]}
                            onPress={handleSubmit}
                            disabled={!isValid}
                        >
                            <Text style={{ fontSize: 20, color: '#fff', fontWeight: '600' }}>Log in</Text>
                        </Pressable>
                        <View style={styles.signupContainer}>
                            <Text >Don't have an account?</Text>
                            <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen')}>
                                <Text style={{ color: '#6bb0e5' }}> Sign Up</Text>
                            </TouchableOpacity>
                        </View>
                    </>
                )}

            </Formik>
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
    button: {
        backgroundColor: '#0096f6',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 42,
        borderRadius: 4
    },
    signupContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 50
    }
})