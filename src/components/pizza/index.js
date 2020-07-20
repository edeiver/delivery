import React, { useState } from 'react';
import {View, Text, ScrollView, StyleSheet, Button, Image, ColorPropType } from 'react-native';
import { styles,  } from '../../../style';

const Pizza = () => {
    const [ pizzaList, setPizzaList ] = useState([
        {
            id: 1,
            description: 'pizza medium',
            price: '20.000',
            restaurantName: 'Pizza donde Edeiver',
            stars: '5',
            img: 'https://cdn.pixabay.com/photo/2016/02/16/07/39/pizza-1202775__340.jpg'
        },
        {
            id: 2,
            description: 'pizza small',
            price: '20.000',
            restaurantName: 'Pizza donde Edeiver',
            stars: '5',
            img: 'https://cdn.pixabay.com/photo/2015/02/01/05/20/supreme-pizza-619133__340.png'
        },
        {
            id: 3,
            description: 'pizza large',
            price: '20.000',
            restaurantName: 'Pizza donde Edeiver',
            stars: '5',
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
            stars: '5',
            img: 'https://cdn.pixabay.com/photo/2016/04/09/09/22/pizza-1317699__340.jpg'
        },

    ])
    return(
       <ScrollView horizontal showsHorizontalScrollIndicator={false} >
           <View style={[styles.row, styles.safePadding, {alignItems: 'center'}]}>
           {
               pizzaList.map((pizza) => (
                <View style={[localStyles.card, styles.center]} key={pizza.id}>
                    <View style={localStyles.imgView}>
                        <Image source={{ uri: pizza.img}} style={localStyles.img} resizeMode='contain'/>
                    </View>
                    <Text>{pizza.description}</Text>
               <Text>{pizza.price}</Text>

                </View>
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
        marginRight: 10

    },
    imgView: {
    
        //backgroundColor: '#fff',
        zIndex: 4,
        position: 'absolute',
        top: -70,
        width: 137,
        height: 137,

        borderRadius: 137/2,
        overflow: "hidden"
       
    },
    img:{
        height: 137,
        width: 137,
   
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
