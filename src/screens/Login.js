import React from 'react'
import { View, Text, SafeAreaView, StyleSheet, TextInput, Image } from 'react-native'
import { Button } from 'react-native-elements'
import { styles, Colors } from '../../style';
import LoginForm from '../components/account/LoginForm';

const Login = ({ navigation }) => {
    return(
        <>
        <SafeAreaView style={[styles.mainContainer, { backgroundColor: Colors.gray, paddingHorizontal: 15}]}>
            <View  style={loginStyle.mainLogin}>
                <View style={[styles.row,{ paddingTop: 20, justifyContent: 'flex-end'}]}>
                    <Button 
                        title='Sign Up' 
                        onPress={() => navigation.navigate('Register')}
                        buttonStyle={loginStyle.loginBtn}
                    />
                </View>
                <View style={[ styles.center]}>
                    <Text style={loginStyle.title}>Inicia sesion</Text>
                </View>
                <View style={loginStyle.profile}>
                    <Image source={require('../assets/img/profile.png')} style={styles.imgRound}/>
                </View>
                <LoginForm/>
            </View>
          
        </SafeAreaView>
        <View style={loginStyle.footer}>
                <Image source={require('../assets/img/wave.png')} style={styles.wave}/>
        </View>
        </>
        
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
        padding: 10
    },
    footer: {
        color: 'blue'
    }

})

export default Login