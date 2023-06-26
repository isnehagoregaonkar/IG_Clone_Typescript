import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FormikPostUploader from './FormikPostUploader';
import { RouterProps } from '../../utils/PropTypes';

const AddNewPost = ({navigation}:RouterProps) => {
    return (
        <View style={styles.container}>
            <Header navigation={navigation} />
            <FormikPostUploader navigation={navigation}/>
        </View>
  )
}

const Header = ({navigation}:RouterProps) => (
    <View style={styles.headerContainer}>
        <TouchableOpacity onPress={()=>navigation.goBack()}>
            <Ionicons name='chevron-back' size={30} color={'#fff'} />
        </TouchableOpacity>
        <Text style={styles.headerText}>New Post</Text>
        <Text></Text>
    </View>
)

export default AddNewPost

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    headerText:{
        color:'#fff',
        fontWeight:'700',
        fontSize:20,
        marginRight:25
    }
})