import React from 'react'
import { View, Text, SafeAreaView} from 'react-native'
import { styles } from '../../../style'

const Cart = () => {
    return(
        <View style={[styles.mainContainer, styles.center]}>
            <SafeAreaView>
                <Text>CART</Text>
            </SafeAreaView>
        </View>
    )
} 

export default Cart