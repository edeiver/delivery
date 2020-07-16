import React, { useState, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AccountStack from './AccountStack';
import SplashScreen from '../screens/SplashScreen';

const Navigator = () => {
    const [ token, setToken ] = useState(null)
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
    }, [])

    return(
        <NavigationContainer>
            {
                loading ? 
                <SplashScreen/>
                :
                <AccountStack/>
                }
        </NavigationContainer>
    )
}
export default Navigator
