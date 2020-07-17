import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import Login from '../screens/account/Login';
import Register from '../screens/account/Register';

const Stack = createStackNavigator();

const AccountStack = () => {
    return(
        <Stack.Navigator
            headerMode='none'
            initialRouteName='Login'
            
        >
            <Stack.Screen 
                name='Login' 
                component={Login}
                
            />
            <Stack.Screen 
                name='Register' 
                component={Register}
            />
        </Stack.Navigator>
    )
}
export default AccountStack