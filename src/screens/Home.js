import React, { useEffect, useState} from 'react'
import { View, Text, SafeAreaView, StyleSheet, StatusBar, Image, TextInput} from 'react-native'
import { styles, Colors } from '../../style'
import CategoryList from '../components/categoryList'
import Pizza from '../components/pizza'


const Home = () => {
    const [ categorySelected, setCategorySelected ] = useState('')
    return (
        <SafeAreaView style={homeStyles.main}>
            <StatusBar backgroundColor={Colors.indigo}/>
        
            <View style={styles.mainContainer}>
                <View style={[homeStyles.mainTop, homeStyles.safePadding]}>
                    <View style={[styles.row, styles.spaceBetween, homeStyles.safeMarginVertical ]}>
                        <Text style={homeStyles.textName}>Entregar a: {'\n'}
                            <Text style={homeStyles.textFullName}>Edeiver Barranco</Text>
                        </Text>
                        <View style={homeStyles.imgView}>
                            <Image source={require('../assets/img/new_profile.png')} style={[styles.selfCenter]} resizeMode='contain'/>
                        </View>
                    </View>
                    <View style={[styles.row, homeStyles.viewInput, styles.center]} >
                    <Image source={require('../assets/icons/search-Indigo.png')} style={{ marginLeft: 20}} resizeMode='contain' />
                        <TextInput 
                            style={homeStyles.input} 
                            placeholderTextColor={Colors.ligthIndigo}
                            placeholder='Busca tu comida'
                            inlineImageLeft='search'
                        />                        
                    </View>
                </View>

                    <CategoryList
                        setCategorySelected={setCategorySelected}
                    />
                <View style={homeStyles.mainBottom}>
                    {!categorySelected && (<Text style={{ marginTop: 100}}>Populares</Text>)}
                    {
                        categorySelected=== 1 && (
                            <Pizza/>
                        )
                    }
                    {
                        categorySelected=== 2 && (<Text style={{ marginTop: 100}}>Burger</Text>)
                    }
                    {
                        categorySelected=== 3 && (<Text style={{ marginTop: 100}}>Ensalada</Text>)
                    }
                    {
                        categorySelected=== 4 && (<Text style={{ marginTop: 100}}>Ice-CREAM</Text>)
                    }
                </View>
            </View>
        </SafeAreaView>
    )
}

const homeStyles =  StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: Colors.indigo

    },
    mainTop: {
        flex: 2,
        backgroundColor: Colors.indigo,

    },
    mainBottom: {
        flex: 3,
        backgroundColor: Colors.gray
    },
    safePadding: {
        paddingHorizontal: 20
    },
    imgView: {
        borderRadius: 20,
        width: 60,
        height: 61,
        backgroundColor: '#fff'
    },
    textName: {
        fontSize: 18,
        color: '#fff'
    }, 
    textFullName: {
        fontSize: 27
    },
    safeMarginVertical: { 
        marginVertical: 15
    }, 
    input: {
        height: '100%',
        width: '100%',
        color: Colors.indigo,
        paddingHorizontal: 10,
        fontSize: 18
        
    },
    viewInput: {
        backgroundColor: '#fff',
        borderRadius: 20,
        height: 60,
        marginVertical: 20,
        padding: 10
    }
    

})

export default Home
