import React from 'react';
import { SafeAreaView, View, Text, Button, StyleSheet, Image, TouchableOpacity, Dimensions} from 'react-native';
import { styles, Colors } from '../../../style';

const { height, width } = Dimensions.get('window')
const DetailProduct = (props) => {
    const { navigation,  } = props
    const {pizzaData } = props.route.params

    const fakeStars = (stars) => {
        let star = parseInt(stars)
        switch (star) {
            case 1:
                return (
                    <View style={styles.row}>
                        <Image source={require('../../assets/icons/black-star.png')} style={stylesDetail.img}/>
                    </View>
                )
                break;
            case 2:
                return (
                    <View style={styles.row}>
                        <Image source={require('../../assets/icons/black-star.png')} style={stylesDetail.img}/>
                        <Image source={require('../../assets/icons/black-star.png')} style={stylesDetail.img}/>

                    </View>
                )                
                break;
            case 3:
                return (
                    <View style={styles.row}>
                        <Image source={require('../../assets/icons/black-star.png')} style={stylesDetail.img}/>
                        <Image source={require('../../assets/icons/black-star.png')} style={stylesDetail.img}/>
                        <Image source={require('../../assets/icons/black-star.png')} style={stylesDetail.img}/>

                    </View>
                )                 
                break;
            case 4:
                return (
                    <View style={styles.row}>
                        <Image source={require('../../assets/icons/black-star.png')} style={stylesDetail.img}/>
                        <Image source={require('../../assets/icons/black-star.png')} style={stylesDetail.img}/>
                        <Image source={require('../../assets/icons/black-star.png')} style={stylesDetail.img}/>
                        <Image source={require('../../assets/icons/black-star.png')} style={stylesDetail.img}/>
                    </View>
                )                 
                break;
            case 5:
                return (
                    <View style={styles.row}>
                        <Image source={require('../../assets/icons/black-star.png')} style={stylesDetail.img}/>
                        <Image source={require('../../assets/icons/black-star.png')} style={stylesDetail.img}/>
                        <Image source={require('../../assets/icons/black-star.png')} style={stylesDetail.img}/>
                        <Image source={require('../../assets/icons/black-star.png')} style={stylesDetail.img}/>
                        <Image source={require('../../assets/icons/black-star.png')} style={stylesDetail.img}/>
                    </View>
                ) 
                break;
            default:
                break;
        }
    }
    return(
        <SafeAreaView style={[styles.mainContainer, stylesDetail.backgroundGray]}>
            <View style={[styles.mainContainer, styles.safePadding, styles.safePaddingTop]}>
                <View style={[styles.row, styles.spaceBetween]}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image source={require('../../assets/icons/arrow-back.jpg')} style={stylesDetail.img}/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={require('../../assets/icons/cart-gray.png')} style={stylesDetail.img}/>
                    </TouchableOpacity>
                </View>
                <View style={[styles.center, stylesDetail.marginTop]}>
                    <Image source={{ uri: pizzaData.img}} style={{height: 205,width: 205, borderRadius: 205/2}}/>
                </View>
                <View style={[styles.row, styles.spaceBetween, stylesDetail.marginTop]}>
                <Text style={[ styles.fontLatoBold, stylesDetail.textDescription]}>{pizzaData.description.toUpperCase()}</Text>
                    { fakeStars(pizzaData.stars)}
                </View>
                <View style={[styles.row, styles.spaceBetween]}>
                    <View style={[styles.column, stylesDetail.marginVertical]}>
                            <Text style={stylesDetail.textLabel}>Precio: </Text>
                            <Text style={[stylesDetail.textPrice, styles.fontLatoBold, stylesDetail.marginVertical]}>{'$'}{pizzaData.price}</Text>

                    </View>
                    <View style={[styles.column, stylesDetail.marginVertical]}>
                            <Text style={stylesDetail.textLabel}>Restaurante: </Text>
                            <Text style={[stylesDetail.textName, styles.fontLatoBold, stylesDetail.marginVertical]}>{pizzaData.restaurantName}</Text>

                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}
const stylesDetail = StyleSheet.create({
    backgroundGray: {
        backgroundColor: Colors.gray
    },
    img: {
        width: 30,
        height: 30,
    },
    marginTop: {
        marginTop: height*0.10
    }, 
    textPrice :{
        fontSize: 22,
        color: Colors.green
    },
    textName :{
        fontSize: 22,
        color: Colors.darkBlack,
    },
    textLabel: {
        color: Colors.ligthIndigo,
        fontSize: 20
    },
    textDescription :{
        color: Colors.darkBlack,
        fontSize: 25,
    },
    marginVertical: {
        marginVertical: 10,
    },
   
})
export default DetailProduct