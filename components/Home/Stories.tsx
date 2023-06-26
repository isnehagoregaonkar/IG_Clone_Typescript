import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { users } from '../../data/users';


const Stories = () => {
    return (
        <View style={{ marginBottom: 13 }}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {
                    users.map((item, index) =>
                    (
                        <View style={styles.storyView} key={index}>
                            <Image
                                source={{ uri: item.image }}
                                style={styles.story}
                                
                            />
                            <Text style={{ color: '#fff' }}>{
                                item.user.length>11?item.user.slice(0,10).toLowerCase()+'...':item.user
                            }</Text>
                        </View>
                    ))
                }

            </ScrollView>
        </View>
    )
}

export default Stories

const styles = StyleSheet.create({
    storyView:{
        justifyContent:'center',
        alignItems:'center'
    },
    story: {
        width: 70,
        height: 70,
        borderRadius: 50,
        marginLeft: 6,
        borderWidth: 3,
        borderColor: '#ff8501'
    }
})