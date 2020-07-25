import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Cart from '../screens/order/Cart';
import Explore from '../screens/explore';
import MyAccount from '../screens/account/MyAccount';
import { Colors, styles } from '../../style';

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
                        focused ? iconName = require('../assets/icons/home-indigo.png') : iconName = require('../assets/icons/home.png')
                    } else if (route.name === 'Cart') {
                        focused ? iconName = require('../assets/icons/cart-indigo.png'): iconName = require('../assets/icons/car-gray.png')
                    } else if (route.name === 'Explore') {
                        focused ? iconName = require('../assets/icons/explore-indigo.png') : iconName = require('../assets/icons/explore-gray.png')
                    } else if (route.name === 'MyAccount') {
                        focused ? iconName = require('../assets/icons/profile-user-indigo.png') : iconName = require('../assets/icons/profile-user-gray.png')
                    }
                    return (
						<Image source={iconName} resizeMode="contain" style={{ height: 23, width: 23, marginTop: 7, alignItems:'center'}} />
					);
                }
            })
            }
            tabBarOptions={{
                activeTintColor: Colors.indigo,
                allowFontScaling: true,
                /* labelPosition: "beside-icon",
                tabStyle: [
                    {
                        borderRadius: 16
                    }
                ],*/
                labelStyle: [styles.fontLato, { fontSize: 13.2}], 
            }}
        >
            <Tab.Screen
                name='Home'
                component={Home}
                options={{
                    tabBarLabel: 'Inicio'
                }}
            />
            <Tab.Screen
                name='Cart'
                component={Cart}
                options={{
                    tabBarLabel: 'Carrito'
                }}
            />
            <Tab.Screen
                name='Explore'
                component={Explore}
                options={{
                    tabBarLabel: 'Explora'
                }}
            />
            <Tab.Screen
                name='MyAccount'
                component={MyAccount}
                options={{
                    tabBarLabel: 'Mi Cuenta'
                }}
            />

        </Tab.Navigator>
    )
}
export default TabNavigator