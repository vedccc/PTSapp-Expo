import React from "react";
import { StyleSheet, View, Text, Image, ScrollView, ImageBackground, TouchableOpacity } from "react-native";


const MyPropertyComponent = (props) => {
    return (




        <TouchableOpacity onPress={props.value}><View style={styles.Box1}>
            <View style={styles.Box}>
                <View style={styles.Box4}>
                    <Image source={require('../images/Artboard1.png')} style={styles.img} /></View>
                <Text style={styles.BoxText}>{props.BoxText}</Text>
            </View>
        </View></TouchableOpacity>




    )

};


const styles = StyleSheet.create({

    TextContainer: {
        flexDirection: 'row',
        left: 23,
        top: 15
    },
    Text5: {
        fontWeight: 'bold'
    },
    Box1: {
        height: 120,
        backgroundColor: 'white',
        borderBottomWidth: 0.3,
        borderLeftWidth: 0.1,
        borderRightWidth: 0.1,
        borderTopWidth: 0.1,

        top: 46,
        marginHorizontal: 20,
        justifyContent: 'center',
        borderRadius: 10,
        marginBottom: 32,
    },
    Box: {
        flexDirection: "row",
        left: 10
    },
    Box4: {
        borderRadius: 50
    },
    img: {
        width: 100,
        height: 105,
        borderRadius: 100,
        backgroundColor: '#f5f5f5',
        resizeMode: 'center'
    },
    BoxText: {
        margin: 10,
        width: 240,
        fontSize: 16,
        left: 5,
    },
})

export default MyPropertyComponent;