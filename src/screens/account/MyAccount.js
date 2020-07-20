import React, { useContext } from 'react'
import { View, Text, SafeAreaView, Button} from 'react-native'
import { styles } from '../../../style'
import { AuthContext } from '../../Context'

const MyAccount = () => {
    const {removeAuth } = useContext(AuthContext) 
    return (
        <View style={[styles.mainContainer, styles.center]}>
            <SafeAreaView>
                <Button
                    title='Cerrar sesion'
                    onPress={removeAuth}

                />
            </SafeAreaView>
        </View>
    )
}

export default MyAccount
