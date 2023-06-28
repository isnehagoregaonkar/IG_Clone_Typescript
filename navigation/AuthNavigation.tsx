import { StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SignedInStack, SignedOutStack } from './navigation'

const AuthNavigation = () => {
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();

    // Handle user state changes
    function onAuthStateChanged(user: any) {
        setUser(user);
        if (initializing) setInitializing(false);
    }

    useEffect(() => {
        const subscriber = onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
    }, []);
    return (
        <>
            {
                user ? <SignedInStack /> : <SignedOutStack />
            }
        </>
    )
}

export default AuthNavigation

const styles = StyleSheet.create({})