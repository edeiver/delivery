import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Cart from '../screens/order/Cart';
import Explore from '../screens/explore';
import MyAccount from '../screens/account/MyAccount';
import { Colors } from '../../style';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return(
        <Tab.Navigator
            initialRouteName='Home'
            headerMode="none"
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused }) =>{
                    let iconName;
                    if (route.name ==='Home') {
                        focused ? iconName = require('../assets/icons/home-indigo.png') : iconName = require('../assets/icons/home-gray.png')
                    } else if (route.name === 'Cart') {
                        focused ? iconName = require('../assets/icons/cart-indigo.png'): iconName = require('../assets/icons/cart-gray.png')
                    } else if (route.name === 'Explore') {
                        focused ? iconName = require('../assets/icons/explore-indigo.png') : iconName = require('../assets/icons/explore-gray.png')
                    } else if (route.name === 'MyAccount') {
                        focused ? iconName = require('../assets/icons/profile-user-indigo.png') : iconName = require('../assets/icons/profile-user-gray.png')
                    }
                    return (
						<Image source={iconName} resizeMode="contain" style={{ height: 26, width: 26, marginTop: 7}} />
					);
                }
            })
            }
            tabBarOptions={{
                activeTintColor: Colors.indigo
            }}
        >
            <Tab.Screen
                name='Home'
                component={Home}
            />
            <Tab.Screen
                name='Cart'
                component={Cart}
            />
            <Tab.Screen
                name='Explore'
                component={Explore}
            />
            <Tab.Screen
                name='MyAccount'
                component={MyAccount}
            />

        </Tab.Navigator>
    )
}
export default TabNavigator