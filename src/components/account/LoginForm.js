import React, { useContext, useState } from 'react';
import { TextInput, StyleSheet, View, Text, ActivityIndicator, Dimensions } from 'react-native'
import { Button } from 'react-native-elements'
import { styles, Colors } from '../../../style';
import Axios from 'axios';
import { URL, URL_ip} from '../../api';
import { AuthContext } from '../../Context';

const { height, width} = Dimensions.get('window')

const LoginForm = () => {

    const { activateAuth } = useContext(AuthContext)
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ loading, setLoading ] = useState(false);
    const [ error, setError ] = useState({});
    const headers = {
        'Content-Type': 'application/json',
        'Accept': "application/json",

      }

    const Login = async () => {
        setLoading(true)
        let errorMsj = {};
        if (!email || !password) {
            !email && (errorMsj.email = 'Necesitas escribir el email, para inicar sesion')
            !password && (errorMsj.password = 'Necesitas escribir la contraseña, para inicar sesion')
            setLoading(false)
            setError(errorMsj)
        } else {
            errorMsj = {};
           Axios.post(`${URL}users/login/`, {
               email,
               password,
           }/* , {
               headers
           } */)
           .then((res) => {
               const { access_token, user: { email, first_name } } = res.data
               setLoading(false)
               activateAuth(access_token)
           })
           .catch((error) => {
               console.log(error)
               error && (errorMsj.errorNet ='Error de servidor')
               setError(errorMsj)
               setLoading(false)
           })
        }
        setLoading(false)


    }
    if (loading) {
        return(
        <View style={[styles.center]}>
            <View style={[loginStyle.card, styles.center]}>
                <ActivityIndicator size='large' color={Colors.indigo}/>
            </View>
        </View>
        )
    }

    return(
        < >
            <View style={[styles.center, styles.shadow, { paddingHorizontal: 20}]}>
                    <TextInput 
                        placeholder='delivery@delivery.com' 
                        style={loginStyle.input} 
                        onChange={ e => setEmail(e.nativeEvent.text)}
                        keyboardType='email-address'
                        autoCapitalize='none'
                        autoCorrect={false}
                        
                    />
                    {error.email && (
                        <View style={loginStyle.error}>
                            <Text style={loginStyle.errorText}>{error.email}</Text>
                        </View>
                    )}
                    <TextInput 
                        placeholder='*********************' 
                        style={loginStyle.input}
                        onChange={ e => setPassword(e.nativeEvent.text)}
                        secureTextEntry={true}
                        autoCapitalize='none'
                        autoCorrect={false}

                    />
                    {error.password && (
                        <View style={loginStyle.error}>
                            <Text style={loginStyle.errorText}>{error.password}</Text>
                        </View>
                    )}
            </View> 
            <View style={loginStyle.mainLogin}>
                    <Button
                        title='Login'
                        containerStyle={[styles.fullWidth, {borderRadius: 30,marginVertical: 20}]}
                        buttonStyle={loginStyle.loginBtn}
                        onPress={Login}                   
                    />
 {error.errorNet && (
                        <View style={[loginStyle.error, styles.safePadding, styles.center]}>
                            <Text style={loginStyle.errorText}>{error.errorNet}</Text>
                        </View>
                    )}                    
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
        padding: 12,
    },
    footer: {
        color: 'blue'
    },
    card:{
        width: 100,
        height: 100,
        borderRadius: 20,
        backgroundColor: '#fff'
    },
    error: { 
        //width: width-80, 
        //marginHorizontal: 40,
        paddingVertical: 5, 
        marginVertical: 10, 
        backgroundColor: Colors.red,
        alignItems: "center",
        borderRadius: 15
    },
    errorText: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center'
    }

})

export default LoginForm
