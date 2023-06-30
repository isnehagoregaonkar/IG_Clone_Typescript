import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react';
import Header from '../components/Home/Header'
import Stories from '../components/Home/Stories';
import Post from '../components/Home/Post';
import { POSTS } from '../data/posts';
import BottomTab from '../components/Home/BottomTab';
import { RouterProps } from '../utils/PropTypes';
import firestore from '@react-native-firebase/firestore';


const HomeScreen = ({navigation}:RouterProps) => {
  const [posts,setPosts]=useState<any[]>([]);
  useEffect(() => {
    firestore().collectionGroup('posts').onSnapshot(snapshot=>{
      setPosts(snapshot.docs.map(doc=>doc.data()))
    })
  }, [])
  
  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} />
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