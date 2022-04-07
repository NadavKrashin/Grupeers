import { View, Text, Button } from 'react-native'
import React from 'react'
import useAuth from "../context/AuthContext";

const LoginScreen = () => {
    const { signInWithGoogle } = useAuth();
    return (
        <View>
            <Text>Login Page</Text>
            <Button title="login" onPress={signInWithGoogle} />
        </View>
    )
}

export default LoginScreen