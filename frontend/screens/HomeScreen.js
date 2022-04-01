import { Text, View, Button } from 'react-native'
import React from 'react'


const HomeScreen = ({ navigation }) => {

    return (
        <View>
            <Text>HomeScreen</Text>
            <Button title="Go To Chat Screen" onPress={() => navigation.navigate("Chat")} />
        </View>
    )
}

export default HomeScreen