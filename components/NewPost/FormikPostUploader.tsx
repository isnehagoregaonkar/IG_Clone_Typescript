import { Button, Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { isValidElement, useState } from 'react'
import * as Yup from 'yup'
import { Formik } from 'formik';
import { Divider } from 'react-native-elements';
import { RouterProps } from '../../utils/PropTypes';
const validUrl = require('valid-url');


const PLACEHOLDERIMG = "https://placehold.co/600x400.png";

const uploadPostSchema = Yup.object().shape({
  imageUrl: Yup.string().url().required('A URL is required'),
  caption: Yup.string().max(2200, 'Caption has reached the character limit')
})

const FormikPostUploader = ({navigation}:RouterProps) => {
  const [thumbnailUrl, setThumbnailUrl] = useState(PLACEHOLDERIMG)
  return (
    <Formik
      initialValues={{ caption: '', imageUrl: '' }}
      onSubmit={()=>{
        navigation.goBack()
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