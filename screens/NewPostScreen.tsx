import { StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native'
import AddNewPost from '../components/NewPost/AddNewPost'
import { RouterProps } from '../utils/PropTypes'

const NewPostScreen = ({navigation}:RouterProps) => {
  return (
    <SafeAreaView style={{backgroundColor:'#000', flex:1}}>
      <AddNewPost navigation={navigation} />
    </SafeAreaView>
  )
}

export default NewPostScreen

const styles = StyleSheet.create({})