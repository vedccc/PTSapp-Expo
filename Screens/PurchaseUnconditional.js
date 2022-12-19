import React from 'react';
import type { Node } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Dimensions,
    Image,
    Button,
    TouchableOpacity,
    TextInput
} from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign'
import Iconfa from 'react-native-vector-icons/FontAwesome'
import Topbar from '../Components/Topbar.js'

const PurchaseUnconditional = ({ navigation }) => {

    const back = () => {
        navigation.push('PathwaySteps')
    }

    const PathwayStepsScreen = () => {
        navigation.push('PathwaySteps')
    }

    return (

        <View style={{ height: '100%', backgroundColor: 'white' }}>

            <Topbar title={"Purchase Unconditional"} mb={50} t={9} onPress={back} />
            <View style={styles.profilecontainer}>

                <TouchableOpacity >
                    <View style={styles.subprofilecontainer}>
                        <Image source={require('../images/UserDefault.jpg')} style={styles.profileimg} />
                        <Text style={styles.profiletitle1}>Varun Verma</Text>
                        <Text style={styles.profiletitle2}>You are on your pathway to the purchase of</Text>
                        <Text style={{ left: 180, color: 'white', fontSize: 13, width: 160, top: 10 }}>Buyer Australia Avenue  Sydney Olympic Park, NSW 2127 Australia</Text>
                    </View>
                </TouchableOpacity>
                <View style={{ top: 5 }}>
                    <Image source={require('../images/160DarkCrop.jpeg')} style={{ height: 290, left: 23, width: 320, resizeMode: 'stretch', top: 100 }} />
                    <View style={{ backgroundColor: '#80bdd2', right: 23, width: 100, borderRadius: 8, height: 23, justifyContent: 'center', alignSelf: 'flex-end', top: 116, position: 'absolute' }}>
                        <Text style={{ alignSelf: 'center', fontSize: 11 }}>IN PROGRESS</Text>
                    </View>
                    <Text style={{ color: 'black', fontSize: 23, top: 95, width: 370, left: 72, color: '#606060' }}>Your purchase is not yet</Text>
                    <Text style={{ color: 'black', fontSize: 23, top: 95, width: 370, left: 130, color: '#606060' }}>unconditional</Text>
                    <Text style={{ color: 'black', fontSize: 13, top: 105, marginHorizontal: 10, color: '#606060', left: 5 }}>Some of the conditions of the contract have not been met yet,so the property is still under offer.</Text>
                </View>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    profilecontainer: {
        backgroundColor: "#133459",
        height: 105,
        justifyContent: "flex-start"
    },

    subprofilecontainer: {
        width: 180,
        height: 90,
        position: "absolute",
        left: 20, top: 15
    },

    profileimg: {
        resizeMode: 'stretch',
        height: 50,
        width: 50,
        borderRadius: 40,
        position: "absolute",
        top: 5
    },

    profiletitle1: {
        alignSelf: "center",
        fontSize: 13,
        position: "absolute",
        right: 49,
        top: 5,
        color: "white"
    },

    profiletitle2: {
        alignSelf: "flex-end",
        fontSize: 11,
        width: 110,
        position: "absolute",
        top: 23,
        right: 14,
        color: "#F0F0F0"
    }
})

export default PurchaseUnconditional;