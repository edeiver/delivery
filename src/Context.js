import React, { useState, createContext, useEffect } from 'react';
import { AsyncStorage, Alert} from 'react-native';

export const AuthContext = createContext();

const Provider = ({ children }) => {
    const [ isLogin, setIsLogin ] = useState(false)
    const [ loading, setLoading ] = useState(false)
    const [ isAuth, setIsAuth ] = useState( async () =>{
        setLoading(true)
        try {
            const access_token = await AsyncStorage.getItem('access_token');
            if (access_token) {
                setIsLogin(true)
                setLoading(false)
                return;
            }
            setTimeout(() => {
                setLoading(false)
            }, 1000);

        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    });
    const value = {
        isAuth,
        isLogin,
        loading,
        activateAuth: async (token) => {
            try {
                await AsyncStorage.setItem('access_token', token);
                //await AsyncStorage.setItem('id', id);
                setIsLogin(true);
                setIsAuth(true);
            } catch (error) {
                console.log(error)              
            }
        },
        removeAuth: async () => {
            setIsLogin(false);
            setIsAuth(false);
            await AsyncStorage.getAllKeys()
            .then(keys => {
                AsyncStorage.multiRemove(keys)
                Alert.alert(
                    'Cerrar sesion',
                    'cerraste tu sesion, recuerda que debes iniciarla para usar allgunas funciones',
                    [
                        {
                            text: 'Ok',
                            onPress: () => console.log('ok')
                        }
                    ],
                    { cancelable: false}
                );
            })
            .catch((e) => {
                console.log(e);
            })
        }
    }
    return(
        <AuthContext.Provider value={value}>
            { children }
        </AuthContext.Provider>
    )
}
export default {
    Provider,
    Consumer: AuthContext.Consumer
};