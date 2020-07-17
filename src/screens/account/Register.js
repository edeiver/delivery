import React from 'react'
import { View, Text, SafeAreaView, Button} from 'react-native'
import { styles, Colors } from '../../../style'

const Register = ({ navigation }) => {
    return(
        <SafeAreaView style={[styles.mainContainer, styles.center, { backgroundColor: Colors.gray}]}>
            <Text>Register screen</Text>
            <Button title='Login' onPress={() => navigation.navigate('Login')}/>
        </SafeAreaView>
    )
} 

export default Register