import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native'
import AddNewPost from '../components/NewPost/AddNewPost'

const NewPostScreen = () => {
  return (
    <SafeAreaView style={{backgroundColor:'#000', flex:1}}>
      <AddNewPost/>
    </SafeAreaView>
  )
}

export default NewPostScreen

const styles = StyleSheet.create({})