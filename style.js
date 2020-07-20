import { StyleSheet } from 'react-native';

export const Colors = {
    green: '#34c759',
    ligthIndigo: '#ACABEB',
    indigo: '#5856d6',
    pink: '#f82752',
    red: '#ff3b30',
    gray: '#F4F4F4',

}


export const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    row: {
        flexDirection: 'row'
    },
    center: {
        justifyContent: "center",
        alignItems: "center"
    },
    boldText: {
        fontWeight: 'bold'
    },
    spaceBetween:{
        justifyContent: "space-between"
    },
    selfCenter:{
        alignSelf: "center"
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 3,
        
    },
    imgRound: {
        width: 150,
        height: 150,
        borderRadius: 150 / 2,
        overflow: "hidden",
        borderWidth: 2,
    },
    fullWidth: {
        width: '100%'
    },
    wave: {
        height: 150,
        width: '100%',
        overflow: "hidden",

    },
    safePadding: {
        paddingHorizontal: 20
    }
})

