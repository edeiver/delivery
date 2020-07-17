import React, { useState, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AccountStack from './AccountStack';
import SplashScreen from '../screens/SplashScreen';
import TabNavigator from './BottomTab';

const Navigator = () => {
    const [ token, setToken ] = useState(null)
    const [ loading, setLoading ] = useState(false)

    useEffect(() => {
        
        const fakeLoginAndToken = () => {
            setLoading(true)
                setTimeout(() => {
                    setLoading(false)
                    setToken('fake_token')
                }, 2000);
        }
        fakeLoginAndToken()
    }, [token])

    return(
        <NavigationContainer>
            {
                loading ? 
                <SplashScreen/>
                : token ?
                <TabNavigator/>
                :
                <AccountStack setToken={setToken}/>
                }
        </NavigationContainer>
    )
}
export default Navigator
