import React, { useState } from 'react';
import {View, Text, ScrollView, StyleSheet, Button, Image, TouchableOpacity } from 'react-native';
import { styles, Colors,  } from '../../../style';

const Pizza = ({ navigation }) => {
    console.log('pizza: ', navigation)
    const [ pizzaList, setPizzaList ] = useState([
        {
            id: 1,
            description: 'pizza medium',
            price: '20.000',
            restaurantName: 'Pizza donde Edeiver',
            stars: '1',
            img: 'https://cdn.pixabay.com/photo/2016/02/16/07/39/pizza-1202775__340.jpg'
        },
        {
            id: 2,
            description: 'pizza small',
            price: '20.000',
            restaurantName: 'Pizza donde Edeiver',
            stars: '2',
            img: 'https://cdn.pixabay.com/photo/2015/02/01/05/20/supreme-pizza-619133__340.png'
        },
        {
            id: 3,
            description: 'pizza large',
            price: '20.000',
            restaurantName: 'Pizza donde Edeiver',
            stars: '4',
            img: 'https://cdn.pixabay.com/photo/2016/06/08/00/03/pizza-1442946__340.jpg'
        },
        {
            id: 4,
            description: 'pizza XL',
            price: '20.000',
            restaurantName: 'Pizza donde Edeiver',
            stars: '5',
            img: 'https://cdn.pixabay.com/photo/2019/08/04/20/09/pizza-4384650_960_720.jpg'
        },
        {
            id: 5,
            description: 'pizza XXl',
            price: '20.000',
            restaurantName: 'Pizza donde Edeiver',
            stars: '3',
            img: 'https://cdn.pixabay.com/photo/2016/04/09/09/22/pizza-1317699__340.jpg'
        },

    ])
    return(
       <ScrollView horizontal showsHorizontalScrollIndicator={false} >
           <View style={[styles.row, styles.safePadding, {alignItems: 'center'}]}>
           {
               pizzaList.map((pizza) => (
                
                <TouchableOpacity style={[localStyles.card, styles.center]} key={pizza.id} onPress={() => navigation.navigate('DetailProduct', {pizzaData: pizza})}>
                    {/* <View style={localStyles.imgView}>
                        <Image source={{ uri: pizza.img}} style={localStyles.img} resizeMode='contain'/>
                    </View> */}
                        <Image source={{ uri: pizza.img}} style={localStyles.img}/>
                    <Text style={[styles.fontLato, { fontSize: 20, letterSpacing: 0.3}]}>{pizza.description}</Text>
                    <Text style={[styles.fontLatoBold, { fontSize: 20}]}>{pizza.price}</Text>

                </TouchableOpacity>
               ))
           }
           </View>
       </ScrollView>
    )
}
const localStyles = StyleSheet.create({
    card : {
        height: 217,
        width: 209,
        backgroundColor: '#fff',
        borderRadius: 15,
        marginTop: '8%',
        marginRight: 15

    },
    imgView: {
        position: 'absolute',
        top: -70, 
    },
    img:{
        position: 'absolute',
        top: -50, 
        height: 120,
        width: 120, 
        borderRadius: 120/2
    },
    descriptionText: {
        marginTop: 10,
        fontSize: 17,
    },
    top: {
        position: "absolute",
        top: 220,
        zIndex: 2,
        paddingHorizontal: 10
    }
})

export default Pizza
