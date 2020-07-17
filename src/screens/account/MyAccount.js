import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import { styles } from '../../../style'

const MyAccount = () => {
    return (
        <View style={[styles.mainContainer, styles.center]}>
            <SafeAreaView>
                <Text> MY ACCOUNT </Text>
            </SafeAreaView>
        </View>
    )
}

export default MyAccount
