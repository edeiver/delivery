import React from 'react'
import { createStackNavigator} from '@react-navigation/stack'
import { View, Text } from 'react-native'
import DetailProduct from '../screens/product/DetailProduct'
import TabNavigator from './BottomTab'


const Stack = createStackNavigator()
const AppStack = () => {
    return (
        <Stack.Navigator
            headerMode='none'
            initialRouteName='BottomTab'
        >
            <Stack.Screen name='BottomTab' component={TabNavigator}/>
            <Stack.Screen name='DetailProduct' component={DetailProduct}/>
        </Stack.Navigator>
    )
}

export default AppStack
