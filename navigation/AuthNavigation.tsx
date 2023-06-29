import { StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SignedInStack, SignedOutStack } from './navigation'
import { FirebaseAuth } from '../utils/firebase';

const AuthNavigation = () => {
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();
  
    // Handle user state changes
    function onAuthStateChanged(user:any) {
      setUser(user);
      if (initializing) setInitializing(false);
    }
  
    useEffect(() => {
      const subscriber =  FirebaseAuth.onAuthStateChanged(onAuthStateChanged);
      return subscriber; // unsubscribe on unmount
    }, []);
  
    if (initializing) return null;
  
    if (!user) {
      return (
        <SignedOutStack/>
      );
    }
  
    return (
     <SignedInStack/>
    );
}
export default AuthNavigation

const styles = StyleSheet.create({})