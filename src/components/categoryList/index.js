import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, TouchableHighlight, Alert} from 'react-native';
import { styles } from '../../../style';

const CategoryList = ({ setCategorySelected }) => {
    const categoryListFake = [
        {
            id: 1,
            image: require('../../assets/img/pizza.png'),
            description: 'Pizza'
        },
        {
            id: 2,
            image: require('../../assets/img/cheese-burger.png'),
            description: 'Burger'
        },
        {
            id: 3,
            image: require('../../assets/img/salad.png'),
            description: 'Salad'
        },
        {
            id: 4,
            image: require('../../assets/img/ice-cream.png'),
            description: 'Ice-cream'
        }
    ]
    return(
        <View style={[styles.row, catStyles.top]}>

            
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {
                    categoryListFake.map((category) => (
                        <TouchableOpacity key={category.id} onPress={() => {
                           // Alert.alert(`touch: ${category.description}`)
                            setCategorySelected(category.id)
                        }}
                        delayLongPress={0.1}
                        >
                            <View style={[catStyles.card, styles.center]} >
                                <Image source={category.image} style={catStyles.img} resizeMode='contain'/>
                                <Text style={[catStyles.descriptionText, styles.fontLatoL,{ letterSpacing: 1.2, textAlign: "center"}]}>{category.description}</Text>
                            </View>
                        </TouchableOpacity>
                    ))
                }
            </ScrollView>
        </View>

    )
}
const catStyles = StyleSheet.create({
    card: {
        borderRadius: 16,
        backgroundColor: '#fff',
        width: 100,
        height: 150,
        padding: 10,
        marginHorizontal: 10
    },
    img: {
        height: 52,
        width: '100%'
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

export default CategoryList