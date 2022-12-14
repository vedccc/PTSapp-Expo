import React from "react";
import { StyleSheet, View, Text, Image, ScrollView, ImageBackground } from "react-native";

const MyPropertyComponent = (props) => {
    return (
        <View >
            <View style={styles.MainContainer}>
                <View style={styles.TextContainer}>
                    <Text>{props.Text1}</Text>
                    <Text style={styles.Text5}>{props.Text2}</Text>
                </View>
                <View style={styles.Box1}>
                    <View style={styles.Box}>
                        <View style={styles.Box4}>
                            <Image source={require('../images/Artboard1.png')} style={styles.img} /></View>
                        <View></View><Text style={styles.BoxText}>{props.BoxText}</Text>

                    </View>
                </View>
            </View>


        </View>
    )

};


const styles = StyleSheet.create({
    MainContainer: {
        top: 10,
        marginBottom: 40
    },
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
        elevation: 10,
        top: 32,
        marginHorizontal: 20,
        justifyContent: 'center',
        borderRadius: 10,

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