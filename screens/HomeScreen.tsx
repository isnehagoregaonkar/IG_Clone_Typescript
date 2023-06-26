import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react';
import Header from '../components/Home/Header'
import Stories from '../components/Home/Stories';
import Post from '../components/Home/Post';
import { posts } from '../data/posts';
import BottomTab from '../components/Home/BottomTab';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Stories />
      <ScrollView>
        {
          posts.map((post,index)=>{
            return(
              <Post post={post} key={index} />
            )
          })
        }
      </ScrollView>
      <BottomTab/>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#000'
    }
})