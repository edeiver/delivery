import React, { useState, useEffect, useContext} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AccountStack from './AccountStack';
import SplashScreen from '../screens/SplashScreen';
import TabNavigator from './BottomTab';
import {AuthContext} from '../Context';

const Navigator = () => {

   /*  const [ token, setToken ] = useState(null)
    const [ loading, setLoading ] = useState(false)

    useEffect(() => {
        
        const fakeLoginAndToken = () => {
            setLoading(true)

            setTimeout(() => {
                    setToken('fake_token')
                    setLoading(false)
                }, 2000);
        }

        fakeLoginAndToken()
    }, [token]) */

    const { isLogin, loading } = useContext(AuthContext);
    console.log(loading)

    return(
        <NavigationContainer>
            {
                loading ? 
                <SplashScreen/>
                : isLogin ?
                <TabNavigator/>
                :
                <AccountStack/>
                }
        </NavigationContainer>
    )
}
export default Navigator
