import React from 'react';
import { TextInput, StyleSheet, View } from 'react-native'
import { Button } from 'react-native-elements'
import { styles, Colors } from '../../../style';

const LoginForm = () => {
    return(
        <View>
            <View style={[styles.center, styles.shadow, { paddingHorizontal: 20}]}>
                    <TextInput placeholder='delivery@delivery.com' style={loginStyle.input}/>
                    <TextInput placeholder='*********************' style={loginStyle.input}/>
            </View>
            <View style={loginStyle.mainLogin}>
                    <Button
                        title='Login'
                        containerStyle={[styles.fullWidth, {borderRadius: 30,marginVertical: 20}]}
                        buttonStyle={loginStyle.loginBtn}                      
                    />
            </View>
        </View>
    )
}

const loginStyle = StyleSheet.create({
    title: {
        fontWeight: '500',
        fontSize: 25
    },
    mainLogin: {
        paddingHorizontal: 20
    },
    input: {
        width: '100%',
        borderRadius: 20,
        paddingVertical: 15,
        paddingHorizontal: 15,
        marginVertical: 10,
        backgroundColor: '#fff',
        color: '#000',
    },
    profile: {
        alignItems: "center",
        marginVertical: 20
    },
    loginBtn: {
        backgroundColor: Colors.indigo,
        padding: 12,
    },
    footer: {
        color: 'blue'
    }

})

export default LoginForm
