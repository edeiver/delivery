import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import { styles } from '../../style'


const Home = () => {
    return (

        <View style={[styles.mainContainer, styles.center]}>
            <SafeAreaView>

                <Text> HOME </Text>
            </SafeAreaView>
        </View>
    )
}

export default Home
