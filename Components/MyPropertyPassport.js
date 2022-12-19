import React from "react";
import { StyleSheet, View, Text, Image, Dimensions, TouchableOpacity } from "react-native";


const MyPropertyComponent = (props) => {

    const styles = StyleSheet.create({
        MainContainer: {
            backgroundColor: 'white',
            width: props.w,
            left: props.left,
            elevation: 4,
            marginBottom: 32,
            borderRadius: 10,
            borderWidth: 1
        },
        img: {
            top: 13,
            width: 100,
            height: 100,
            left: 10,
            resizeMode: 'center',
            borderRadius: 50,
            backgroundColor: '#f5f5f5',
            marginBottom: 20,
        },
        text: {
            fontSize: 15,
            alignSelf: 'center',
            width: Dimensions.get('window').width * 0.6,
            left: 23,
        },
        Box: {
            flexDirection: 'row'
        }
    })

    return (

        <View style={styles.MainContainer}>
            <TouchableOpacity onPress={props.value}>
                <View style={styles.Box}>
                    <Image source={require('../images/Artboard1.png')} style={styles.img} />
                    <Text style={styles.text}>{props.BoxText}</Text>
                </View>
            </TouchableOpacity>

        </View>

    )

};




export default MyPropertyComponent;