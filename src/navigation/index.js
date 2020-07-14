import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AccountStack from './AccountStack';

const Navigator = () => {
    return(
        <NavigationContainer>
            <AccountStack/>
        </NavigationContainer>
    )
}
export default Navigator
