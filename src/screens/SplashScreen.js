import React from 'react';
import { View, Image, Dimensions, StyleSheet} from 'react-native';

const { height, width } = Dimensions.get('window')

const SplashScreen = () => {
    return(
        <View style={style.main}>
            <Image source={require('../assets/img/splashx3.png')} resizeMode='contain' style={style.img}/>
        </View>
    )
}

const style = StyleSheet.create({
    main:{
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
        width: width,
        height: height

    },
    img: {
        width: '100%',
        height: '100%'
    }
   
})

export default SplashScreen