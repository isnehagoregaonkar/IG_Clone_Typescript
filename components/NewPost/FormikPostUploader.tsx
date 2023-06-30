import { Button, Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { isValidElement, useEffect, useState } from 'react'
import * as Yup from 'yup'
import { Formik } from 'formik';
import { Divider } from 'react-native-elements';
import { RouterProps } from '../../utils/PropTypes';
import { FirebaseAuth } from '../../utils/firebase';
import firestore from '@react-native-firebase/firestore';

const validUrl = require('valid-url');

const PLACEHOLDERIMG = "https://placehold.co/600x400.png";

const uploadPostSchema = Yup.object().shape({
  imageUrl: Yup.string().url().required('A URL is required'),
  caption: Yup.string().max(2200, 'Caption has reached the character limit')
})

type UserProps={
  username:string
  profile_picture:string
  email:string
}
type PostProps={
  imageUrl:string
  caption:string
}
const FormikPostUploader = ({navigation}:RouterProps) => {
  const [thumbnailUrl, setThumbnailUrl] = useState(PLACEHOLDERIMG)
  const [currentLoggedInUser, setCurrentLoggedInUser]=useState<UserProps|null>(null)

  const getUser=()=>{
    const currentUser=FirebaseAuth.currentUser;
    const user=firestore().collection('users')
    .where('owner_uid','==',currentUser?.uid).limit(1).onSnapshot((snapshot)=>snapshot.docs.map(doc=>setCurrentLoggedInUser({
      username:doc.data().username,
      profile_picture:doc.data().profile_picture,
      email:doc.data().email
    })))
    return user
  }

  useEffect(()=>{
    getUser()
  },[])

  const uploadPostToFirebase=({imageUrl,caption}:PostProps)=>{
    const post=firestore().collection('users').doc(currentLoggedInUser?.email).collection('posts').add({
      imageUrl:imageUrl,
        user:currentLoggedInUser?.username,
        likes:0,
        caption:caption,
        profile_picture:currentLoggedInUser?.profile_picture,
        likes_by_users:[],
        comments:[
 
        ]
    });
    return post
  }

  return (
    <Formik
      initialValues={{ caption: '', imageUrl: '' }}
      onSubmit={(values)=>{
        uploadPostToFirebase(values)
        .then(()=>navigation.goBack())
      }}
      validationSchema={uploadPostSchema}
      validateOnMount={true}
    >
      {({ handleBlur, handleChange, handleSubmit, values, errors, isValid }) =>
        <>
          <View style={{ margin: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
            <Image source={{uri:validUrl.isUri(thumbnailUrl)?thumbnailUrl:PLACEHOLDERIMG}}
              style={{
                width: 100,
                height: 100
              }} />
            <View style={{ flex: 1, marginLeft: 12 }}>
              <TextInput
                placeholder='Write a caption....'
                placeholderTextColor='gray'
                multiline={true}
                style={{
                  color: '#fff',
                  fontSize: 20
                }}
                onChangeText={handleChange('caption')}
                onBlur={handleBlur('caption')}
                value={values.caption}
              />
            </View>
          </View>
          <Divider width={0.2} orientation='vertical' />
          <TextInput
          onChange={(e)=>setThumbnailUrl(e.nativeEvent.text)}
            placeholder='Enter Image URL....'
            placeholderTextColor='gray'
            style={{
              color: '#fff',
              fontSize: 18
            }}
            onChangeText={handleChange('imageUrl')}
            onBlur={handleBlur('imageUrl')}
            value={values.imageUrl}
          />
          {
            errors.imageUrl && (
              <Text style={{ fontSize: 10, color: 'red' }}>{errors.imageUrl}</Text>
            )
          }

          <Button
            title='Share'
            onPress={handleSubmit}
            disabled={!isValid}
          />
        </> 
      }

    </Formik>
  )
}

export default FormikPostUploader

const styles = StyleSheet.create({})