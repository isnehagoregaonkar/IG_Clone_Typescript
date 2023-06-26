import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Divider } from 'react-native-elements'
import Octicons from 'react-native-vector-icons/Octicons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


const BottomTab = () => {
    const [activeTab, setActiveTab] = useState('Home')
    return (
        <View style={styles.wrapper}>
            <Divider width={1} orientation='vertical' />
            <View style={styles.container}>
                <TouchableOpacity>
                    <Octicons name='home' color={'#fff'} size={26} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Octicons name='search' color={'#fff'} size={26} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Feather name='plus-square' color={'#fff'} size={26} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Octicons name='video' color={'#fff'} size={26} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <FontAwesome5 name='user-circle' color={'#fff'} size={26} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default BottomTab

const styles = StyleSheet.create({
    wrapper: {},
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: 50,
        paddingTop: 10
    }
})