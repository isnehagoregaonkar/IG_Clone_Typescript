import { Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Validator from 'email-validator';
import { RouterProps } from '../../utils/PropTypes';
import { FirebaseApp, FirebaseAuth } from '../../utils/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import firestore from '@react-native-firebase/firestore';

type SignupProps = {
    email: string
    username: string
    password: string
}

const usersCollection = firestore().collection('users');

const SignUpForm = ({ navigation }: RouterProps) => {
    const SignUpFormSchema = Yup.object().shape({
        email: Yup.string().required('An email is required'),
        username: Yup.string().required().min(2, 'Username must contain minimun 2 characters'),
        password: Yup.string().required().min(8, 'Password should be 8 characters long')
    });
    const getRandomeProfilePicture=async()=>{
        const response=await fetch('https://randomuser.me/api')
        const data=await response.json();
        return data.results[0].picture.large
    }

    const onSignUp = async ({ email, username, password }: SignupProps) => {
        try {
            const authUser=await createUserWithEmailAndPassword(FirebaseAuth, email, password);
            usersCollection.add({
                owner_uid:authUser.user.uid,
                username:username,
                email:email,
                profile_picture:await getRandomeProfilePicture()
            })
            console.log("Signed up successfully")
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <View>
            <View style={styles.wrapper}>
                <Formik
                    initialValues={{ email: '', username: '', password: '' }}
                    validationSchema={SignUpFormSchema}
                    onSubmit={values => onSignUp(values)}
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
                                borderColor: values.username.length > 2 ? '#ccc' : '#f00'
                            }]}>
                                <TextInput
                                    placeholder='Username'
                                    placeholderTextColor='#444'
                                    autoCapitalize='none'
                                    textContentType='username'
                                    autoCorrect={false}
                                    onChangeText={handleChange('username')}
                                    onBlur={handleBlur('username')}
                                    value={values.username}
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
                                <Text >Already have an account?</Text>
                                <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
                                    <Text style={{ color: '#6bb0e5' }}> Log In</Text>
                                </TouchableOpacity>
                            </View>
                        </>
                    )}

                </Formik>
            </View>
        </View>
    )
}

export default SignUpForm

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