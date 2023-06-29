import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react';
import Octicons from 'react-native-vector-icons/Octicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5Brands from 'react-native-vector-icons/FontAwesome5';
import { RouterProps } from '../../utils/PropTypes';
import { signOut } from 'firebase/auth';
import { FirebaseAuth } from '../../utils/firebase';

const handleSignout = async () => {
  try {
    await signOut(FirebaseAuth);
    console.log("Sign out successfully")
  } catch (error) {
    Alert.alert(error + "")
  }
}

const Header = ({ navigation }: RouterProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleSignout}>
        <Image source={require('../../assets/header-logo.png')} style={styles.logo} />
      </TouchableOpacity>
      <View style={styles.iconsContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('NewPostScreen')}>
          <Octicons name="diff-added" style={styles.icon} size={26} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity>
          <AntDesign name="hearto" style={styles.icon} size={26} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.unreadBadge}>
            <Text style={styles.unreadBadgeText}>8</Text>
          </View>
          <FontAwesome5Brands name="facebook-messenger" style={styles.icon} size={26} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: 20
  },
  logo: {
    width: 130,
    height: 50,
    resizeMode: 'contain'
  },
  iconsContainer: {
    flexDirection: 'row',
  },
  icon: {
    marginLeft: 15,
  },
  unreadBadge: {
    backgroundColor: '#ff3250',
    position: 'absolute',
    left: 20,
    bottom: 18,
    width: 25,
    height: 18,
    borderRadius: 25,
    alignItems: 'center',
    zIndex: 100
  },
  unreadBadgeText: {
    color: '#fff',
    fontWeight: '600'
  }
})