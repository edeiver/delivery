import React from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
import Animated from 'react-native-reanimated';


const { height, width } = Dimensions.get('window');

const AnimatedBottomSheet = ({ translateY}) => {
    return (
        <Animated.View style={{...stylesBottom.bottomSheet,
            transform: [{ translateY}]}}>
            <Text> AnimatedBottomSheet </Text>
        </Animated.View>
    )
}

export default AnimatedBottomSheet

const stylesBottom = StyleSheet.create({
    
    bottomSheet: {
        position: 'absolute',
        bottom: 0,
        width: width-20,
        height: 300,
        backgroundColor: '#fff',
        borderRadius: 25,
        marginHorizontal: 10,
        alignItems: 'center'
    }
})
